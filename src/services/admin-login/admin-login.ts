import { hooks as schemaHooks } from '@feathersjs/schema';
import type { Application, HookContext } from '../../declarations';
import { AdminLoginService, getOptions } from './admin-login.class';
import { adminLoginPath, adminLoginMethods } from './admin-login.shared';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Import the schema validators and resolvers as before
import {
  adminLoginDataValidator,
  adminLoginPatchValidator,
  adminLoginQueryValidator,
  adminLoginResolver,
  adminLoginExternalResolver,
  adminLoginDataResolver,
  adminLoginPatchResolver,
  adminLoginQueryResolver
} from './admin-login.schema';

dotenv.config();

// Custom hook for verifying admin login
const verifyAdminLoginHook = async (context: HookContext) => {
  const {email, password} = context.data;
  const service = context.service;
  const result = await service.find({query: { email }});

  const adminUser = result.data && result.data[0];

  if (adminUser && adminUser.password === password) {
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

  return context;
};

export const adminLogin = (app: Application) => {
  app.use(adminLoginPath, new AdminLoginService(getOptions(app)), {
    methods: adminLoginMethods,
    events: []
  });

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
      create: [
        schemaHooks.validateData(adminLoginDataValidator),
        schemaHooks.resolveData(adminLoginDataResolver),
        verifyAdminLoginHook // Apply the custom verifyAdminLoginHook here
      ],
      patch: [
        schemaHooks.validateData(adminLoginPatchValidator),
        schemaHooks.resolveData(adminLoginPatchResolver)
      ],
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  });
};

declare module '../../declarations' {
  interface ServiceTypes {
    [adminLoginPath]: AdminLoginService;
  }
}
