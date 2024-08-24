import type { Static } from '@feathersjs/typebox';
import type { HookContext } from '../../declarations';
import type { UploadImageService } from './upload-image.class';
export declare const uploadImageSchema: import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>;
export type UploadImage = Static<typeof uploadImageSchema>;
export declare const uploadImageValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const uploadImageResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<UploadImageService<import("./upload-image.class").UploadImageParams>>>;
export declare const uploadImageExternalResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<UploadImageService<import("./upload-image.class").UploadImageParams>>>;
export declare const uploadImageDataSchema: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>, []>;
export type UploadImageData = Static<typeof uploadImageDataSchema>;
export declare const uploadImageDataValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const uploadImageDataResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<UploadImageService<import("./upload-image.class").UploadImageParams>>>;
export declare const uploadImagePatchSchema: import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>>;
export type UploadImagePatch = Static<typeof uploadImagePatchSchema>;
export declare const uploadImagePatchValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const uploadImagePatchResolver: import("@feathersjs/schema").Resolver<{
    _id: string | {};
}, HookContext<UploadImageService<import("./upload-image.class").UploadImageParams>>>;
export declare const uploadImageQueryProperties: import("@sinclair/typebox").TPick<import("@sinclair/typebox").TObject<{
    _id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString<string>, import("@sinclair/typebox").TObject<{}>]>;
}>, []>;
export declare const uploadImageQuerySchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TPartial<import("@sinclair/typebox").TObject<{
    $limit: import("@sinclair/typebox").TNumber;
    $skip: import("@sinclair/typebox").TNumber;
    $sort: import("@sinclair/typebox").TObject<{}>;
    $select: import("@sinclair/typebox").TUnsafe<never[]>;
    $and: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>, import("@sinclair/typebox").TObject<{
        $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
    }>]>>;
    $or: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>>;
}>>, import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TObject<{}>>]>, import("@sinclair/typebox").TObject<{}>]>;
export type UploadImageQuery = Static<typeof uploadImageQuerySchema>;
export declare const uploadImageQueryValidator: import("@feathersjs/schema").Validator<any, any>;
export declare const uploadImageQueryResolver: import("@feathersjs/schema").Resolver<Partial<{
    $limit: number;
    $skip: number;
    $sort: {};
    $select: never[];
    $and: ({} | {
        $or: {}[];
    })[];
    $or: {}[];
}> & {} & {}, HookContext<UploadImageService<import("./upload-image.class").UploadImageParams>>>;
