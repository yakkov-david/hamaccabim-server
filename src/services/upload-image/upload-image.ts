// For more information about this file see https://dove.feathersjs.com/guides/cli/service.html

import { hooks as schemaHooks } from '@feathersjs/schema'

import {
  uploadImageDataValidator,
  uploadImagePatchValidator,
  uploadImageQueryValidator,
  uploadImageResolver,
  uploadImageExternalResolver,
  uploadImageDataResolver,
  uploadImagePatchResolver,
  uploadImageQueryResolver
} from './upload-image.schema'

import type { Application } from '../../declarations'
import { UploadImageService, getOptions } from './upload-image.class'
import { uploadImagePath, uploadImageMethods } from './upload-image.shared'

export * from './upload-image.class'
export * from './upload-image.schema'

// A configure function that registers the service and its hooks via `app.configure`
export const uploadImage = (app: Application) => {
  // Register our service on the Feathers application
  app.use(uploadImagePath, new UploadImageService(getOptions(app)), {
    // A list of all methods this service exposes externally
    methods: uploadImageMethods,
    // You can add additional custom events to be sent to clients here
    events: []
  })
  // Initialize hooks
  app.service(uploadImagePath).hooks({
    around: {
      all: [
        schemaHooks.resolveExternal(uploadImageExternalResolver),
        schemaHooks.resolveResult(uploadImageResolver)
      ]
    },
    before: {
      all: [
        schemaHooks.validateQuery(uploadImageQueryValidator),
        schemaHooks.resolveQuery(uploadImageQueryResolver)
      ],
      find: [],
      get: [],
      create: [
        schemaHooks.validateData(uploadImageDataValidator),
        schemaHooks.resolveData(uploadImageDataResolver)
      ],
      patch: [
        schemaHooks.validateData(uploadImagePatchValidator),
        schemaHooks.resolveData(uploadImagePatchResolver)
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
    [uploadImagePath]: UploadImageService
  }
}
