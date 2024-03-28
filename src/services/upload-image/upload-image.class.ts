// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { UploadImage, UploadImageData, UploadImagePatch, UploadImageQuery } from './upload-image.schema'

export type { UploadImage, UploadImageData, UploadImagePatch, UploadImageQuery }

export interface UploadImageParams extends MongoDBAdapterParams<UploadImageQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class UploadImageService<ServiceParams extends Params = UploadImageParams> extends MongoDBService<
  UploadImage,
  UploadImageData,
  UploadImageParams,
  UploadImagePatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('upload-image'))
  }
}
