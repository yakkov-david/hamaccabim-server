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
  > {
    constructor(options:MongoDBAdapterOptions){//(options: Partial<MongoDBAdapterOptions>/*, app: Application) {
      super(options);
    }
  
    async find(params:any): Promise<any> {
      console.log("AAAAAAAAAAAAAA")
      // Check if the request includes an ID for a specific document
      if (params?.query?.id) {
        const db = await this.getModel(); // Ensure the model (MongoDB collection) is ready
        const data = await db.findOne({ _id: params.query.id }, { projection: { countdownDate: 1 } });
  
        // Return the countdownDate if the document is found
        if (data) {
          return { countdownDate: data.countdownDate };
        } else {
          // Handle the case where the document is not found
          return Promise.reject(new Error("Document not found"));
        }
      }
  
      // Fallback to the default find behavior if no specific ID is provided
      return super.find(params);
    }
  }
  
  export const getOptions = (app: Application): MongoDBAdapterOptions => {
    return {
      paginate: app.get('paginate'),
      Model: app.get('mongodbClient').then((db) => db.collection('landing-pages')),
    };
  };