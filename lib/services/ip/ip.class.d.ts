import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { Ip, IpData, IpPatch, IpQuery } from './ip.schema';
export type { Ip, IpData, IpPatch, IpQuery };
export interface IpParams extends MongoDBAdapterParams<IpQuery> {
}
export declare class IpService<ServiceParams extends Params = IpParams> extends MongoDBService<Ip, IpData, IpParams, IpPatch> {
    getIpAddress(params: ServiceParams): Promise<{
        ip: string;
    }>;
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
