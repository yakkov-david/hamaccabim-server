import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { UploadImage, UploadImageData, UploadImagePatch, UploadImageQuery, UploadImageService } from './upload-image.class';
export type { UploadImage, UploadImageData, UploadImagePatch, UploadImageQuery };
export type UploadImageClientService = Pick<UploadImageService<Params<UploadImageQuery>>, (typeof uploadImageMethods)[number]>;
export declare const uploadImagePath = "upload-image";
export declare const uploadImageMethods: readonly ["find", "get", "create", "patch", "remove"];
export declare const uploadImageClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [uploadImagePath]: UploadImageClientService;
    }
}
