import type { Application } from '../../declarations';
import { UploadImageService } from './upload-image.class';
import { uploadImagePath } from './upload-image.shared';
export * from './upload-image.class';
export * from './upload-image.schema';
export declare const uploadImage: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [uploadImagePath]: UploadImageService;
    }
}
