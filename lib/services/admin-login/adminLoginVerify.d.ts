import { Service } from '@feathersjs/feathers';
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
export declare function verifyAdminLogin({ email, password, service }: VerifyAdminLoginParams): Promise<VerifyAdminLoginResult>;
export {};
