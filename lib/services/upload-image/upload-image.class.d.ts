import type { Params } from '@feathersjs/feathers';
import { MongoDBService } from '@feathersjs/mongodb';
import type { MongoDBAdapterParams, MongoDBAdapterOptions } from '@feathersjs/mongodb';
import type { Application } from '../../declarations';
import type { UploadImage, UploadImageData, UploadImagePatch, UploadImageQuery } from './upload-image.schema';
export type { UploadImage, UploadImageData, UploadImagePatch, UploadImageQuery };
export interface UploadImageParams extends MongoDBAdapterParams<UploadImageQuery> {
}
export declare class UploadImageService<ServiceParams extends Params = UploadImageParams> extends MongoDBService<UploadImage, UploadImageData, UploadImageParams, UploadImagePatch> {
}
export declare const getOptions: (app: Application) => MongoDBAdapterOptions;
