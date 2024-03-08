// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type {
  LandingPages,
  LandingPagesData,
  LandingPagesPatch,
  LandingPagesQuery
} from './landing-pages.schema'

export type { LandingPages, LandingPagesData, LandingPagesPatch, LandingPagesQuery }

export interface LandingPagesParams extends MongoDBAdapterParams<LandingPagesQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class LandingPagesService<ServiceParams extends Params = LandingPagesParams> extends MongoDBService<
  LandingPages,
  LandingPagesData,
  LandingPagesParams,
  LandingPagesPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('landing-pages'))
  }
}
