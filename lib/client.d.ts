import type { TransportConnection, Application } from '@feathersjs/feathers';
import type { AuthenticationClientOptions } from '@feathersjs/authentication-client';
import './services/analytics/analytics.shared';
export type { Analytics, AnalyticsData, AnalyticsQuery, AnalyticsPatch } from './services/analytics/analytics.shared';
import './services/users/users.shared';
export type { Users, UsersData, UsersQuery, UsersPatch } from './services/users/users.shared';
import './services/admin-login/admin-login.shared';
export type { AdminLogin, AdminLoginData, AdminLoginQuery, AdminLoginPatch } from './services/admin-login/admin-login.shared';
import './services/upload-image/upload-image.shared';
export type { UploadImage, UploadImageData, UploadImageQuery, UploadImagePatch } from './services/upload-image/upload-image.shared';
import './services/landing-pages/landing-pages.shared';
export type { LandingPages, LandingPagesData, LandingPagesQuery, LandingPagesPatch } from './services/landing-pages/landing-pages.shared';
import './services/ip/ip.shared';
export type { Ip, IpData, IpQuery, IpPatch } from './services/ip/ip.shared';
export interface Configuration {
    connection: TransportConnection<ServiceTypes>;
}
export interface ServiceTypes {
}
export type ClientApplication = Application<ServiceTypes, Configuration>;
/**
 * Returns a typed client for the hamaccabim app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
export declare const createClient: <Configuration = any>(connection: TransportConnection<ServiceTypes>, authenticationOptions?: Partial<AuthenticationClientOptions>) => ClientApplication;
