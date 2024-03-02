import { HookContext, Service } from '@feathersjs/feathers'
import { hooks as schemaHooks } from '@feathersjs/schema'
import type { Application } from '../../declarations'
import { IpService, getOptions } from './ip.class'
import {
  ipDataResolver,
  ipDataValidator,
  ipExternalResolver,
  ipPatchResolver,
  ipPatchValidator,
  ipQueryResolver,
  ipQueryValidator,
  ipResolver
} from './ip.schema'
import { ipPath } from './ip.shared'
const axios = require('axios');

export * from './ip.class'
export * from './ip.schema'

// Define a more specific service interface for MongoDB if needed
interface MongoDBService extends Service<any> {
  Model: any; // Replace 'any' with your actual model type, e.g., Model: YourModelType;
}

// Extend the HookContext with additional properties if needed
interface MyContext extends HookContext {
  params: {
    connection: {
      remoteAddress: string;
    };
    [key: string]: any; // Add other params properties as needed
  };
  app: Application;
}

async function getExternalIP() {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
  } catch (error) {
    console.error('Error fetching external IP:', error);
    return null;
  }
}

// Custom hook to log IP address and date
const logIpAndDate = async (context : MyContext) => {
  const { app, params, data } = context;
  

  // Extract the IP address from the context
  data.ipAddress = await getExternalIP();

  return context;
};


// A configure function that registers the service and its hooks via app.configure
export const ip = (app: Application) => {
  // Register our service on the Feathers application
  app.use(ipPath, new IpService(getOptions(app)), {
   
    // You can add additional custom events to be sent to clients here
    events: []
  });

  // Initialize hooks
  app.service(ipPath).hooks({
    around: {
      all: [schemaHooks.resolveExternal(ipExternalResolver), schemaHooks.resolveResult(ipResolver)]
    },
    before: {
      all: [schemaHooks.validateQuery(ipQueryValidator), schemaHooks.resolveQuery(ipQueryResolver)],
      
      find: [],
      get: [],
      create: [schemaHooks.validateData(ipDataValidator), schemaHooks.resolveData(ipDataResolver), logIpAndDate],
      patch: [schemaHooks.validateData(ipPatchValidator), schemaHooks.resolveData(ipPatchResolver)],
      remove: []
    },
    after: {
      all: []
    },
    error: {
      all: []
    }
  });
}

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    [ipPath]: IpService;
  }
}
