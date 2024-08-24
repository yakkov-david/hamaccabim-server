import type { Application } from '../../declarations';
import { UsersService } from './users.class';
import { usersPath } from './users.shared';
export * from './users.class';
export * from './users.schema';
export declare const users: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [usersPath]: UsersService;
    }
}
