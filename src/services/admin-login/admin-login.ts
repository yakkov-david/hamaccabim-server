// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

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

import { verifyAdminLogin } from './adminLoginVerify';

export * from './admin-login.class'
export * from './admin-login.schema'


// A configure function that registers the service and its hooks via `app.configure`
export const adminLogin = (app: Application) => {
  // Register our service on the Feathers application
  app.use(adminLoginPath, new AdminLoginService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: adminLoginMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
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
        async (context) => {
          // Assuming the incoming data is on context.data and contains email and password
          // and that the service itself should be passed to verifyAdminLogin
          if (context.data.email && context.data.password) {
            const verifyResult = await verifyAdminLogin({
              email: context.data.email,
              password: context.data.password,
              service: context.service
            });

            // Depending on what you want to do with verifyResult, you could modify the context.result here
            // For example, if you want to stop the creation process when login verification fails:
            if (verifyResult.status === 'fail') {
              throw new Error(verifyResult.message);
            }

            // Or, add the token to context.params so it can be used later in the hook chain:
            context.params.token = verifyResult.token;

            // Return the modified context
            return context;
          } else {
            throw new Error('Email and password must be provided');
          }
        }, // Using `as any` to bypass TypeScript type checking; consider refining types for a more robust solution
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
