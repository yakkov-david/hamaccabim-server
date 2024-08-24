import type { Application } from '../../declarations';
import { AdminLoginService } from './admin-login.class';
import { adminLoginPath } from './admin-login.shared';
export declare const adminLogin: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [adminLoginPath]: AdminLoginService;
    }
}
