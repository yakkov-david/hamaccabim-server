"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminLogin = void 0;
const schema_1 = require("@feathersjs/schema");
const admin_login_class_1 = require("./admin-login.class");
const admin_login_shared_1 = require("./admin-login.shared");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
// Import the schema validators and resolvers as before
const admin_login_schema_1 = require("./admin-login.schema");
dotenv_1.default.config();
// Custom hook for verifying admin login
const verifyAdminLoginHook = async (context) => {
    const { email, password } = context.data;
    const service = context.service;
    const result = await service.find({ query: { email } });
    const adminUser = result.data && result.data[0];
    if (adminUser && adminUser.password === password) {
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            throw new Error('JWT secret key is undefined. Please set it in your environment variables.');
        }
        const payload = { email: adminUser.email, role: 'admin' };
        const options = { expiresIn: '1h' };
        const token = jsonwebtoken_1.default.sign(payload, secretKey, options);
        context.result = { status: 'success', message: 'Login successful', token };
    }
    else {
        throw new Error('Invalid credentials');
    }
    return context;
};
const adminLogin = (app) => {
    app.use(admin_login_shared_1.adminLoginPath, new admin_login_class_1.AdminLoginService((0, admin_login_class_1.getOptions)(app)), {
        methods: admin_login_shared_1.adminLoginMethods,
        events: []
    });
    app.service(admin_login_shared_1.adminLoginPath).hooks({
        around: {
            all: [
                schema_1.hooks.resolveExternal(admin_login_schema_1.adminLoginExternalResolver),
                schema_1.hooks.resolveResult(admin_login_schema_1.adminLoginResolver)
            ]
        },
        before: {
            all: [
                schema_1.hooks.validateQuery(admin_login_schema_1.adminLoginQueryValidator),
                schema_1.hooks.resolveQuery(admin_login_schema_1.adminLoginQueryResolver)
            ],
            create: [
                schema_1.hooks.validateData(admin_login_schema_1.adminLoginDataValidator),
                schema_1.hooks.resolveData(admin_login_schema_1.adminLoginDataResolver),
                verifyAdminLoginHook // Apply the custom verifyAdminLoginHook here
            ],
            patch: [
                schema_1.hooks.validateData(admin_login_schema_1.adminLoginPatchValidator),
                schema_1.hooks.resolveData(admin_login_schema_1.adminLoginPatchResolver)
            ],
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.adminLogin = adminLogin;
//# sourceMappingURL=admin-login.js.map