import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Users, UsersData, UsersPatch, UsersQuery, UsersService } from './users.class';
export type { Users, UsersData, UsersPatch, UsersQuery };
export type UsersClientService = Pick<UsersService<Params<UsersQuery>>, (typeof usersMethods)[number]>;
export declare const usersPath = "users";
export declare const usersMethods: readonly ["find", "get", "create", "patch", "remove", "update"];
export declare const usersClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [usersPath]: UsersClientService;
    }
}
