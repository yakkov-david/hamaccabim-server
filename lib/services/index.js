"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.services = void 0;
const ip_1 = require("./ip/ip");
const services = (app) => {
    app.configure(ip_1.ip);
    // All services will be registered here
};
exports.services = services;
//# sourceMappingURL=index.js.map