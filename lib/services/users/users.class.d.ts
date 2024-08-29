import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Users, UsersData, UsersPatch, UsersQuery } from './users.schema';
export type { Users, UsersData, UsersPatch, UsersQuery };
export interface UsersParams extends MongoDBAdapterParams<UsersQuery> {
}
export declare class UsersService<ServiceParams extends Params = UsersParams> extends MongoDBService<Users, UsersData, UsersParams, UsersPatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
