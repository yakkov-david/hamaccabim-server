import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import type { UsersService } from './users.class';
export declare const usersSchema: import("@sinclair/typebox").TObject<{}>;
export type Users = Static<typeof usersSchema>;
export declare const usersValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const usersResolver: import("@feathersjs/schema").Resolver<{}, HookContext<UsersService<import("./users.class").UsersParams>>>;
export declare const usersExternalResolver: import("@feathersjs/schema").Resolver<{}, HookContext<UsersService<import("./users.class").UsersParams>>>;
export declare const usersDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{}>, []>;
export type UsersData = Static<typeof usersDataSchema>;
export declare const usersDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const usersDataResolver: import("@feathersjs/schema").Resolver<{}, HookContext<UsersService<import("./users.class").UsersParams>>>;
export declare const usersPatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{}>>;
export type UsersPatch = Static<typeof usersPatchSchema>;
export declare const usersPatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const usersPatchResolver: import("@feathersjs/schema").Resolver<{}, HookContext<UsersService<import("./users.class").UsersParams>>>;
export declare const usersQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{}>, []>;
export declare const usersQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{}>;
    $select: import("@sinclair/typebox").TUnsafe<never[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type UsersQuery = Static<typeof usersQuerySchema>;
export declare const usersQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const usersQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {};
    $select: never[];
    $and: ({} | {
        $or: {}[];
    })[];
    $or: {}[];
}> & {} & {}, HookContext<UsersService<import("./users.class").UsersParams>>>;
