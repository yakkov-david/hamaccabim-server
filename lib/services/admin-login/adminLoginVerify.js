"use strict";
//adminLoginVerify.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdminLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
async function verifyAdminLogin({ email, password, service }) {
    const result = await service.find({
        query: { email }
    });
    const adminUser = result.data && result.data[0]; // Assuming the first result is the user you're looking for
    if (adminUser && adminUser.password === password) {
        // Ensure the secret key exists
        const secretKey = process.env.JWT_SECRET_KEY;
        if (!secretKey) {
            throw new Error('JWT secret key is undefined. Please set it in your environment variables.');
        }
        // Define the payload
        const payload = {
            email: adminUser.email,
            role: 'admin',
        };
        // Define token options, such as expiration
        const options = { expiresIn: '1h' }; // Token expires in 1 hour
        // Generate the JWT
        const token = jsonwebtoken_1.default.sign(payload, secretKey, options);
        return {
            status: 'success',
            message: 'Login successful',
            token, // Shorthand for token: token
        };
    }
    else {
        return { status: 'fail', message: 'Invalid credentials' };
    }
}
exports.verifyAdminLogin = verifyAdminLogin;
//# sourceMappingURL=adminLoginVerify.js.map