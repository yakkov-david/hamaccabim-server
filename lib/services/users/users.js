"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const schema_1 = require("@feathersjs/schema");
const forgotPassword_1 = require("./forgotPassword");
const resetPassword_1 = require("./resetPassword");
const paginateUsers_1 = require("./paginateUsers");
const users_schema_1 = require("./users.schema");
const users_class_1 = require("./users.class");
const users_shared_1 = require("./users.shared");
const bcrypt = __importStar(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
__exportStar(require("./users.class"), exports);
__exportStar(require("./users.schema"), exports);
const hashPasswordIfPresent = async (context) => {
    if (context.data.password) {
        const salt = await bcrypt.genSalt(10);
        context.data.password = await bcrypt.hash(context.data.password, salt);
    }
    delete context.data.action; // Remove the action field from the data
    return context;
};
const processUserHook = async (context) => {
    const { email, password, action } = context.data;
    if (action === 'login') {
        // Login logic
        const service = context.service;
        const result = await service.find({ query: { email } });
        const adminUser = result[0] /* && result.data[0]*/;
        if (adminUser) {
            const isPasswordValid = await bcrypt.compare(password, adminUser.password);
            if (isPasswordValid) {
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
        }
        else {
            throw new Error('Invalid credentials');
        }
    }
    else if (action === 'register') {
        // Registration logic
        if (context.data && context.data.password) {
            const salt = await bcrypt.genSalt(10);
            context.data.password = await bcrypt.hash(context.data.password, salt);
        }
        delete context.data.action; // Remove the action field from the data
    }
    else if (action === 'forgotPassword') {
        context.result = { message: 'Password reset email sent' };
        (0, forgotPassword_1.forgotPassword)(context);
    }
    else if (action === 'resetPassword') {
        context.result = { message: 'Password reset email sent' };
        (0, resetPassword_1.resetPassword)(context);
    }
    else if (action === 'paginate') {
        await (0, paginateUsers_1.paginateUsers)(context);
    }
    else {
        throw new Error('Invalid action');
    }
    return context;
};
// A configure function that registers the service and its hooks via `app.configure`
const users = (app) => {
    // Register our service on the Feathers application
    app.use(users_shared_1.usersPath, new users_class_1.UsersService((0, users_class_1.getOptions)(app)), {
        // A list of all methods this service exposes externally
        methods: users_shared_1.usersMethods,
        // You can add additional custom events to be sent to clients here
        events: []
    });
    // Initialize hooks
    app.service(users_shared_1.usersPath).hooks({
        around: {
            all: [
                //authenticate('jwt'),
                schema_1.hooks.resolveExternal(users_schema_1.usersExternalResolver),
                schema_1.hooks.resolveResult(users_schema_1.usersResolver)
            ]
        },
        before: {
            all: [schema_1.hooks.validateQuery(users_schema_1.usersQueryValidator), schema_1.hooks.resolveQuery(users_schema_1.usersQueryResolver)],
            find: [],
            get: [],
            create: [schema_1.hooks.validateData(users_schema_1.usersDataValidator), schema_1.hooks.resolveData(users_schema_1.usersDataResolver),
                processUserHook
            ],
            patch: [schema_1.hooks.validateData(users_schema_1.usersPatchValidator), schema_1.hooks.resolveData(users_schema_1.usersPatchResolver)],
            update: [schema_1.hooks.validateData(users_schema_1.usersPatchValidator), schema_1.hooks.resolveData(users_schema_1.usersPatchResolver),
                hashPasswordIfPresent
            ],
            remove: []
        },
        after: {
            all: []
        },
        error: {
            all: []
        }
    });
};
exports.users = users;
//# sourceMappingURL=users.js.map