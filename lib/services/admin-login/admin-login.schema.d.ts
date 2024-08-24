import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import type { AdminLoginService } from './admin-login.class';
export declare const adminLoginSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>;
export type AdminLogin = Static<typeof adminLoginSchema>;
export declare const adminLoginValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const adminLoginResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<AdminLoginService<import("./admin-login.class").AdminLoginParams>>>;
export declare const adminLoginExternalResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<AdminLoginService<import("./admin-login.class").AdminLoginParams>>>;
export declare const adminLoginDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>, []>;
export type AdminLoginData = Static<typeof adminLoginDataSchema>;
export declare const adminLoginDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const adminLoginDataResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<AdminLoginService<import("./admin-login.class").AdminLoginParams>>>;
export declare const adminLoginPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>>;
export type AdminLoginPatch = Static<typeof adminLoginPatchSchema>;
export declare const adminLoginPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const adminLoginPatchResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<AdminLoginService<import("./admin-login.class").AdminLoginParams>>>;
export declare const adminLoginQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>, []>;
export declare const adminLoginQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{}>;
    $select: import("@sinclair/typebox").TUnsafe<never[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type AdminLoginQuery = Static<typeof adminLoginQuerySchema>;
export declare const adminLoginQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const adminLoginQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {};
    $select: never[];
    $and: ({} | {
        $or: {}[];
    })[];
    $or: {}[];
}> & {} & {}, HookContext<AdminLoginService<import("./admin-login.class").AdminLoginParams>>>;
