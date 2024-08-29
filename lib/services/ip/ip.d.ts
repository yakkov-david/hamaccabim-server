import type { Application } from '../../declarations';
import { IpService } from './ip.class';
import { ipPath } from './ip.shared';
export * from './ip.class';
export * from './ip.schema';
export declare const ip: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [ipPath]: IpService;
    }
}
