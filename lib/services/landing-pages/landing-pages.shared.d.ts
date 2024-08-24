import type { Params } from '@feathersjs/feathers';
import type { ClientApplication } from '../../client';
import type { LandingPages, LandingPagesData, LandingPagesPatch, LandingPagesQuery, LandingPagesService } from './landing-pages.class';
export type { LandingPages, LandingPagesData, LandingPagesPatch, LandingPagesQuery };
export type LandingPagesClientService = Pick<LandingPagesService<Params<LandingPagesQuery>>, (typeof landingPagesMethods)[number]>;
export declare const landingPagesPath = "landing-pages";
export declare const landingPagesMethods: readonly ["find", "get", "create", "patch", "remove", "update"];
export declare const landingPagesClient: (client: ClientApplication) => void;
declare module '../../client' {
    interface ServiceTypes {
        [landingPagesPath]: LandingPagesClientService;
    }
}
