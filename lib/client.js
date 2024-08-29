"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
// For more information about this file see https://dove.feathersjs.com/guides/cli/client.html
const feathers_1 = require("@feathersjs/feathers");
const authentication_client_1 = __importDefault(require("@feathersjs/authentication-client"));
/*import { csrfTokenClient } from './services/csrf-token/csrf-token.shared'
export type {
  CsrfToken,
  CsrfTokenData,
  CsrfTokenQuery,
  CsrfTokenPatch
} from './services/csrf-token/csrf-token.shared'*/
const analytics_shared_1 = require("./services/analytics/analytics.shared");
/*import { resetPasswordClient } from './services/reset-password/reset-password.shared'
export type {
  ResetPassword,
  ResetPasswordData,
  ResetPasswordQuery,
  ResetPasswordPatch
} from './services/reset-password/reset-password.shared'*/
/*import { forgotPasswordClient } from './services/forgot-password/forgot-password.shared'
export type {
  ForgotPassword,
  ForgotPasswordData,
  ForgotPasswordQuery,
  ForgotPasswordPatch
} from './services/forgot-password/forgot-password.shared'*/
/*import { usersClient } from './services/users/users.shared'
export type { Users, UsersData, UsersQuery, UsersPatch } from './services/users/users.shared'

import { usersClient } from './services/users/users.shared'
export type { Users, UsersData, UsersQuery, UsersPatch } from './services/users/users.shared'*/
const users_shared_1 = require("./services/users/users.shared");
/*import { managersClient } from './services/managers/managers.shared'
export type {
  Managers,
  ManagersData,
  ManagersQuery,
  ManagersPatch
} from './services/managers/managers.shared'

import { managersClient } from './services/managers/managers.shared'
export type {
  Managers,
  ManagersData,
  ManagersQuery,
  ManagersPatch
} from './services/managers/managers.shared'

import { managersClient } from './services/managers/managers.shared'
export type {
  Managers,
  ManagersData,
  ManagersQuery,
  ManagersPatch
} from './services/managers/managers.shared'*/
const admin_login_shared_1 = require("./services/admin-login/admin-login.shared");
const upload_image_shared_1 = require("./services/upload-image/upload-image.shared");
/*import { landingPagesClient } from './services/landing-pages/landing-pages.shared'
export type {
  LandingPages,
  LandingPagesData,
  LandingPagesQuery,
  LandingPagesPatch
} from './services/landing-pages/landing-pages.shared'

import { landingPagesClient } from './services/landing-pages/landing-pages.shared'
export type {
  LandingPages,
  LandingPagesData,
  LandingPagesQuery,
  LandingPagesPatch
} from './services/landing-pages/landing-pages.shared'*/
const landing_pages_shared_1 = require("./services/landing-pages/landing-pages.shared");
const ip_shared_1 = require("./services/ip/ip.shared");
/**
 * Returns a typed client for the hamaccabim app.
 *
 * @param connection The REST or Socket.io Feathers client connection
 * @param authenticationOptions Additional settings for the authentication client
 * @see https://dove.feathersjs.com/api/client.html
 * @returns The Feathers client application
 */
const createClient = (connection, authenticationOptions = {}) => {
    const client = (0, feathers_1.feathers)();
    client.configure(connection);
    client.configure((0, authentication_client_1.default)(authenticationOptions));
    client.set('connection', connection);
    client.configure(ip_shared_1.ipClient);
    client.configure(landing_pages_shared_1.landingPagesClient);
    client.configure(landing_pages_shared_1.landingPagesClient);
    client.configure(landing_pages_shared_1.landingPagesClient);
    client.configure(upload_image_shared_1.uploadImageClient);
    client.configure(admin_login_shared_1.adminLoginClient);
    //client.configure(managersClient)
    //client.configure(managersClient)
    //client.configure(managersClient)
    client.configure(users_shared_1.usersClient);
    client.configure(users_shared_1.usersClient);
    client.configure(users_shared_1.usersClient);
    //client.configure(forgotPasswordClient)
    //client.configure(resetPasswordClient)
    client.configure(analytics_shared_1.analyticsClient);
    //client.configure(csrfTokenClient)
    return client;
};
exports.createClient = createClient;
//# sourceMappingURL=client.js.map