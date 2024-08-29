"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const analytics_1 = require("./analytics/analytics");
const users_1 = require("./users/users");
//import { managers } from './managers/managers'
//import { adminLogin } from './admin-login/admin-login'
const upload_image_1 = require("./upload-image/upload-image");
const landing_pages_1 = require("./landing-pages/landing-pages");
//import { landingPages } from './landing-pages/landing-pages'
const ip_1 = require("./ip/ip");
const services = (app) => {
    app.configure(analytics_1.analytics);
    app.configure(users_1.users);
    //app.configure(managers)
    //app.configure(adminLogin)
    app.configure(upload_image_1.uploadImage);
    app.configure(landing_pages_1.landingPages);
    app.configure(ip_1.ip);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map