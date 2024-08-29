import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Analytics, AnalyticsData, AnalyticsPatch, AnalyticsQuery } from './analytics.schema';
export type { Analytics, AnalyticsData, AnalyticsPatch, AnalyticsQuery };
export interface AnalyticsParams extends MongoDBAdapterParams<AnalyticsQuery> {
}
export declare class AnalyticsService<ServiceParams extends Params = AnalyticsParams> extends MongoDBService<Analytics, AnalyticsData, AnalyticsParams, AnalyticsPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
