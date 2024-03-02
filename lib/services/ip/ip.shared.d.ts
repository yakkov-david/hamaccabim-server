import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Ip, IpData, IpPatch, IpQuery, IpService } from './ip.class';
export type { Ip, IpData, IpPatch, IpQuery };
export type IpClientService = Pick<IpService<Params<IpQuery>>, (typeof ipMethods)[number]>;
export declare const ipPath = "ip";
export declare const ipMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const ipClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [ipPath]: IpClientService;
    }
}
