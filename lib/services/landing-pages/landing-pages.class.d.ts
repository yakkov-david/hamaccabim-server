import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { LandingPages, LandingPagesData, LandingPagesPatch, LandingPagesQuery } from './landing-pages.schema';
export type { LandingPages, LandingPagesData, LandingPagesPatch, LandingPagesQuery };
export interface LandingPagesParams extends MongoDBAdapterParams<LandingPagesQuery> {
}
export declare class LandingPagesService<ServiceParams extends Params = LandingPagesParams> extends MongoDBService<LandingPages, LandingPagesData, LandingPagesParams, LandingPagesPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
