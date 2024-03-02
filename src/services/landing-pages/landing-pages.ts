// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'


import {
  landingPagesDataValidator,
  landingPagesPatchValidator,
  landingPagesQueryValidator,
  landingPagesResolver,
  landingPagesExternalResolver,
  landingPagesDataResolver,
  landingPagesPatchResolver,
  landingPagesQueryResolver
} from './landing-pages.schema'

import type { Application } from '../../declarations'
import { LandingPagesService, getOptions } from './landing-pages.class'
import { landingPagesPath, landingPagesMethods } from './landing-pages.shared'

export * from './landing-pages.class'
export * from './landing-pages.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const landingPages = (app: Application) => {
  // Register our service on the Feathers application
  app.use(landingPagesPath, new LandingPagesService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: landingPagesMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })





  
  // Initialize hooks
  app.service(landingPagesPath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(landingPagesExternalResolver),
        schemaHooks.resolveResult(landingPagesResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(landingPagesQueryValidator),
        schemaHooks.resolveQuery(landingPagesQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(landingPagesDataValidator),
        schemaHooks.resolveData(landingPagesDataResolver)
      ],
      patch: [
        schemaHooks.validateData(landingPagesPatchValidator),
        schemaHooks.resolveData(landingPagesPatchResolver)
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
    [landingPagesPath]: LandingPagesService
  }
}
