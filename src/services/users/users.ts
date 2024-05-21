// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import { hooks } from '@feathersjs/authentication';
//import hashPassword from './hash-password';

import { Hook, HookContext } from '@feathersjs/feathers';



import {
  usersDataValidator,
  usersPatchValidator,
  usersQueryValidator,
  usersResolver,
  usersExternalResolver,
  usersDataResolver,
  usersPatchResolver,
  usersQueryResolver
} from './users.schema'

import type { Application/*, HookContext*/ } from '../../declarations'
import { UsersService, getOptions } from './users.class'
import { usersPath, usersMethods } from './users.shared'

import * as bcrypt from 'bcrypt';

import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export * from './users.class'
export * from './users.schema'





const processUserHook = async (context: HookContext) => {
  const { email, password, action } = context.data;

  if (action === 'login') {
    // Login logic
    const service = context.service;
    const result = await service.find({ query: { email } });

    const adminUser = result.data && result.data[0];

    if (adminUser) {
      const isPasswordValid = await bcrypt.compare(password, adminUser.password);

      if (isPasswordValid) {
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
          throw new Error('JWT secret key is undefined. Please set it in your environment variables.');
        }

        const payload = { email: adminUser.email, role: 'admin' };
        const options = { expiresIn: '1h' };

        const token = jwt.sign(payload, secretKey, options);

        context.result = { status: 'success', message: 'Login successful', token };
      } else {
        throw new Error('Invalid credentials');
      }
    } else {
      throw new Error('Invalid credentials');
    }
  } else if (action === 'register') {
    // Registration logic
    if (context.data && context.data.password) {
      const salt = await bcrypt.genSalt(10);
      context.data.password = await bcrypt.hash(context.data.password, salt);
    }
  } else {
    throw new Error('Invalid action');
  }

  return context;
};








// A configure function that registers the service and its hooks via `app.configure`
export const users = (app: Application) => {
  // Register our service on the Feathers application
  app.use(usersPath, new UsersService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: usersMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(usersPath).hooks({
    around: {
      all: [
        //authenticate('jwt'),
        schemaHooks.resolveExternal(usersExternalResolver),
        schemaHooks.resolveResult(usersResolver)
      ]
    },
    before: {
      all: [schemaHooks.validateQuery(usersQueryValidator), schemaHooks.resolveQuery(usersQueryResolver)],
      find: [],
      get: [],
      create: [schemaHooks.validateData(usersDataValidator), schemaHooks.resolveData(usersDataResolver),
        /*hashPassword()verifyAdminLoginHook*/processUserHook],
      patch: [schemaHooks.validateData(usersPatchValidator), schemaHooks.resolveData(usersPatchResolver)],
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
    [usersPath]: UsersService
  }
}
