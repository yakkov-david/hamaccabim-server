// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services
import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'

import type { Application } from '../../declarations'
import type { Ip, IpData, IpPatch, IpQuery } from './ip.schema'

export type { Ip, IpData, IpPatch, IpQuery }

export interface IpParams extends MongoDBAdapterParams<IpQuery> { }

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class IpService<ServiceParams extends Params = IpParams> extends MongoDBService<
  Ip,
  IpData,
  IpParams,
  IpPatch
> {

}

export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('ip'))
  }
}
