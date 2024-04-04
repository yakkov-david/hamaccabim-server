// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema';

import {
  adminLoginDataValidator,
  adminLoginPatchValidator,
  adminLoginQueryValidator,
  adminLoginResolver,
  adminLoginExternalResolver,
  adminLoginDataResolver,
  adminLoginPatchResolver,
  adminLoginQueryResolver
} from './admin-login.schema'

import type { Application } from '../../declarations'
import { AdminLoginService, getOptions } from './admin-login.class'
import { adminLoginPath, adminLoginMethods } from './admin-login.shared'

import { authenticate } from '@feathersjs/authentication';
import { disallow, iff, isProvider } from 'feathers-hooks-common';
import { verifyAdminLogin } from './adminLoginVerify';
import { HookContext } from '@feathersjs/feathers';


export * from './admin-login.class'
export * from './admin-login.schema'




// A configure function that registers the service and its hooks via `app.configure`
export const adminLogin = (app: Application) => {
  app.use(adminLoginPath, new AdminLoginService(getOptions(app)), {
    methods: adminLoginMethods,
    events: []
  });
  // Initialize hooks
  app.service(adminLoginPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(adminLoginExternalResolver),
        schemaHooks.resolveResult(adminLoginResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(adminLoginQueryValidator),
        schemaHooks.resolveQuery(adminLoginQueryResolver)
      ],
      find: [
      ],
      get: [],
      create: [
        // First, ensure this operation is only called via external requests
        iff(isProvider('external'),
          async (context: HookContext) => {
            // Extract email and password from the request
            const { email, password } = context.data;

            // Perform the custom admin login verification
            const verifyResult = await verifyAdminLogin({
              email,
              password,
              service: context.app.service('admin-login') // Make sure to replace 'your-service-name' with the actual name/path of your user service
            });

            // If verification fails, throw an error to stop the process
            if (verifyResult.status === 'fail') {
              throw new Error(verifyResult.message);
            }

            // Optionally attach the result or token to the context for downstream hooks or services
            context.params.verifyResult = verifyResult;

            return context;
          }),
        authenticate('local'),
        schemaHooks.validateData(adminLoginDataValidator),
        schemaHooks.resolveData(adminLoginDataResolver)
      ],

      patch: [
        schemaHooks.validateData(adminLoginPatchValidator),
        schemaHooks.resolveData(adminLoginPatchResolver)
      ],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  })
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [adminLoginPath]: AdminLoginService
  }
}
