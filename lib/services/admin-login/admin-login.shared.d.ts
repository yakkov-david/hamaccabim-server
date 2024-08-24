import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { AdminLogin, AdminLoginData, AdminLoginPatch, AdminLoginQuery, AdminLoginService } from './admin-login.class';
export type { AdminLogin, AdminLoginData, AdminLoginPatch, AdminLoginQuery };
export type AdminLoginClientService = Pick<AdminLoginService<Params<AdminLoginQuery>>, (typeof adminLoginMethods)[number]>;
export declare const adminLoginPath = "admin-login";
export declare const adminLoginMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const adminLoginClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [adminLoginPath]: AdminLoginClientService;
    }
}
