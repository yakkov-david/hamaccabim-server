// For more information about this file see https://dove.feathersjs.com/guides/cli/service.class.html#database-services

//admin-login.class.ts

import type { Params } from '@feathersjs/feathers'
import { MongoDBService } from '@feathersjs/mongodb'
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb'


import type { Application } from '../../declarations'
import type { AdminLogin, AdminLoginData, AdminLoginPatch, AdminLoginQuery } from './admin-login.schema'

export type { AdminLogin, AdminLoginData, AdminLoginPatch, AdminLoginQuery }

export interface AdminLoginParams extends MongoDBAdapterParams<AdminLoginQuery> {}

// By default calls the standard MongoDB adapter service methods but can be customized with your own functionality.
export class AdminLoginService<ServiceParams extends Params = AdminLoginParams> extends MongoDBService<
  AdminLogin,
  AdminLoginData,
  AdminLoginParams,
  AdminLoginPatch
> {}



export const getOptions = (app: Application): MongoDBAdapterOptions => {
  return {
    paginate: app.get('paginate'),
    Model: app.get('mongodbClient').then((db) => db.collection('admin-login'))
  }
}
