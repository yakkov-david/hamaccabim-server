
//adminLoginVerify.ts

import { Service } from '@feathersjs/feathers';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface VerifyAdminLoginParams {
    email: string;
    password: string;
    service: Service<any>;
}

interface VerifyAdminLoginResult {
    status: 'success' | 'fail';
    message: string;
    token?: string;
}

export async function verifyAdminLogin({ email, password, service }: VerifyAdminLoginParams): Promise<VerifyAdminLoginResult> {
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
        const token = jwt.sign(payload, secretKey, options);

        return {
            status: 'success',
            message: 'Login successful',
            token, // Shorthand for token: token
        };
    } else {
        return { status: 'fail', message: 'Invalid credentials' };
    }
}
