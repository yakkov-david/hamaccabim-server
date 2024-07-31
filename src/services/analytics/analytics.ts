// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html
import { authenticate } from '@feathersjs/authentication'

import { hooks as schemaHooks } from '@feathersjs/schema'

import axios from 'axios';
import { HookContext } from '@feathersjs/feathers';

import {
  analyticsDataValidator,
  analyticsPatchValidator,
  analyticsQueryValidator,
  analyticsResolver,
  analyticsExternalResolver,
  analyticsDataResolver,
  analyticsPatchResolver,
  analyticsQueryResolver
} from './analytics.schema'

import type { Application } from '../../declarations'
import { AnalyticsService, getOptions } from './analytics.class'
import { analyticsPath, analyticsMethods } from './analytics.shared'

import { disablePagination } from '../../hooks/disablePagination';



export * from './analytics.class'
export * from './analytics.schema'



async function getExternalIP() {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    return response.data.ip;
  } catch (error) {
    console.error('Error fetching external IP:', error);
    return null;
  }
}

export const logIpAndDate = async (context: HookContext) => {
  const { data } = context;

  // Extract the IP address
  data.ipAddress = await getExternalIP();
  
  // Add the current date
  data.createdAt = new Date();

  return context;
};


// A configure function that registers the service and its hooks via `app.configure`
export const analytics = (app: Application) => {
  // Register our service on the Feathers application
  app.use(analyticsPath, new AnalyticsService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: analyticsMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(analyticsPath).hooks({
    around: {
      all: [
        //authenticate('jwt'),
        schemaHooks.resolveExternal(analyticsExternalResolver),
        schemaHooks.resolveResult(analyticsResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(analyticsQueryValidator),
        schemaHooks.resolveQuery(analyticsQueryResolver)
      ],
      find: [/*disablePagination*/],
      get: [],
      create: [
        schemaHooks.validateData(analyticsDataValidator),
        schemaHooks.resolveData(analyticsDataResolver),
        logIpAndDate
      ],
      patch: [
        schemaHooks.validateData(analyticsPatchValidator),
        schemaHooks.resolveData(analyticsPatchResolver)
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
    [analyticsPath]: AnalyticsService
  }
}
