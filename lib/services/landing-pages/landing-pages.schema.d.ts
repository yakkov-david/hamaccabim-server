import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import type { LandingPagesService } from './landing-pages.class';
export declare const landingPagesSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>;
export type LandingPages = Static<typeof landingPagesSchema>;
export declare const landingPagesValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const landingPagesResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<LandingPagesService<import("./landing-pages.class").LandingPagesParams>>>;
export declare const landingPagesExternalResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<LandingPagesService<import("./landing-pages.class").LandingPagesParams>>>;
export declare const landingPagesDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>, []>;
export type LandingPagesData = Static<typeof landingPagesDataSchema>;
export declare const landingPagesDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const landingPagesDataResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<LandingPagesService<import("./landing-pages.class").LandingPagesParams>>>;
export declare const landingPagesPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>>;
export type LandingPagesPatch = Static<typeof landingPagesPatchSchema>;
export declare const landingPagesPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const landingPagesPatchResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<LandingPagesService<import("./landing-pages.class").LandingPagesParams>>>;
export declare const landingPagesQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>, []>;
export declare const landingPagesQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{}>;
    $select: import("@sinclair/typebox").TUnsafe<never[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type LandingPagesQuery = Static<typeof landingPagesQuerySchema>;
export declare const landingPagesQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const landingPagesQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {};
    $select: never[];
    $and: ({} | {
        $or: {}[];
    })[];
    $or: {}[];
}> & {} & {}, HookContext<LandingPagesService<import("./landing-pages.class").LandingPagesParams>>>;
