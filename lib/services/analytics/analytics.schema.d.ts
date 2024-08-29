import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import type { AnalyticsService } from './analytics.class';
export declare const analyticsSchema: import("@sinclair/typebox").TObject<{}>;
export type Analytics = Static<typeof analyticsSchema>;
export declare const analyticsValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const analyticsResolver: import("@feathersjs/schema").Resolver<{}, HookContext<AnalyticsService<import("./analytics.class").AnalyticsParams>>>;
export declare const analyticsExternalResolver: import("@feathersjs/schema").Resolver<{}, HookContext<AnalyticsService<import("./analytics.class").AnalyticsParams>>>;
export declare const analyticsDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{}>, []>;
export type AnalyticsData = Static<typeof analyticsDataSchema>;
export declare const analyticsDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const analyticsDataResolver: import("@feathersjs/schema").Resolver<{}, HookContext<AnalyticsService<import("./analytics.class").AnalyticsParams>>>;
export declare const analyticsPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{}>>;
export type AnalyticsPatch = Static<typeof analyticsPatchSchema>;
export declare const analyticsPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const analyticsPatchResolver: import("@feathersjs/schema").Resolver<{}, HookContext<AnalyticsService<import("./analytics.class").AnalyticsParams>>>;
export declare const analyticsQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{}>, []>;
export declare const analyticsQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{}>;
    $select: import("@sinclair/typebox").TUnsafe<never[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type AnalyticsQuery = Static<typeof analyticsQuerySchema>;
export declare const analyticsQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const analyticsQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {};
    $select: never[];
    $and: ({} | {
        $or: {}[];
    })[];
    $or: {}[];
}> & {} & {}, HookContext<AnalyticsService<import("./analytics.class").AnalyticsParams>>>;
