// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Analytics, AnalyticsData, AnalyticsPatch, AnalyticsQuery } from './analytics.schema'

export type { Analytics, AnalyticsData, AnalyticsPatch, AnalyticsQuery }

export interface AnalyticsParams extends MongoDBAdapterParams<AnalyticsQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class AnalyticsService<ServiceParams extends Params = AnalyticsParams> extends MongoDBService<
  Analytics,
  AnalyticsData,
  AnalyticsParams,
  AnalyticsPatch
> {}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('analytics'))
  }
}
