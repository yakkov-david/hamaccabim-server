import { HookContext } from '@feathersjs/feathers';
import type { Application } from '../../declarations';
import { AnalyticsService } from './analytics.class';
import { analyticsPath } from './analytics.shared';
export * from './analytics.class';
export * from './analytics.schema';
export declare const logIpAndDate: (context: HookContext) => Promise<HookContext<import("@feathersjs/feathers").Application<any, any>, any>>;
export declare const filterByLandingPageId: (context: HookContext) => Promise<HookContext<import("@feathersjs/feathers").Application<any, any>, any>>;
export declare const analytics: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [analyticsPath]: AnalyticsService;
    }
}
