import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { Analytics, AnalyticsData, AnalyticsPatch, AnalyticsQuery, AnalyticsService } from './analytics.class';
export type { Analytics, AnalyticsData, AnalyticsPatch, AnalyticsQuery };
export type AnalyticsClientService = Pick<AnalyticsService<Params<AnalyticsQuery>>, (typeof analyticsMethods)[number]>;
export declare const analyticsPath = "analytics";
export declare const analyticsMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const analyticsClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [analyticsPath]: AnalyticsClientService;
    }
}
