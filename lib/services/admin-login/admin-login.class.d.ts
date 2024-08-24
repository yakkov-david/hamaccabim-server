import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { AdminLogin, AdminLoginData, AdminLoginPatch, AdminLoginQuery } from './admin-login.schema';
export type { AdminLogin, AdminLoginData, AdminLoginPatch, AdminLoginQuery };
export interface AdminLoginParams extends MongoDBAdapterParams<AdminLoginQuery> {
}
export declare class AdminLoginService<ServiceParams extends Params = AdminLoginParams> extends MongoDBService<AdminLogin, AdminLoginData, AdminLoginParams, AdminLoginPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
