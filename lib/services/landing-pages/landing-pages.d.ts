import type { Application } from '../../declarations';
import { LandingPagesService } from './landing-pages.class';
import { landingPagesPath } from './landing-pages.shared';
export * from './landing-pages.class';
export * from './landing-pages.schema';
export declare const landingPages: (app: Application) => void;
declare module '../../declarations' {
    interface ServiceTypes {
        [landingPagesPath]: LandingPagesService;
    }
}
