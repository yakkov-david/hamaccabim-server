// forgotPassword.ts

import { HookContext } from '@feathersjs/feathers';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
//import app from '../app';

export const forgotPassword = async (context: HookContext) => {
    const { email } = context.data;

    //console.log('Forgot password action triggered for email:', email);

    // Find the user by email
    const service = context.app.service('users'); // Ensure this is the correct service name

    try {
        //console.log('Attempting to find user in the database...');
        const [user] = await service.find({
            query: { email: email }
        });
        //console.log('Database query result:', user);

        


        if (!user) {
            console.log('User not found'); // Log if the user is not found
            throw new Error('User not found');
        } else {
            console.log('User found:', user.email); // Log the found user
            // Generate a reset token
            const token = crypto.randomBytes(32).toString('hex');
            const expires = new Date();
            expires.setHours(expires.getHours() + 1); // Token expires in 1 hour

            // Update the user document with the reset token and expiry time
            await service.patch(user._id, { resetPasswordToken: token, resetPasswordExpires: expires });


            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: 'breshearttech@gmail.com',
                    pass: 'tlvkbp148!', // Ensure this is securely stored
                },
            });

            // Define the email options
            const mailOptions = {
                from: 'breshearttech@gmail.com',
                to: user.email,
                subject: 'Password Reset',
                text: `To reset your password, click the following link: /reset-password?token=${token}`,
            };

            console.log(`To reset your password, click the following link: /ResetPassword?token=${token}`)
            /*${process.env.CLIENT_URL}*/
            // Send the email
            //await transporter.sendMail(mailOptions);
            console.log('Password reset email sent to:', user.email); // Log email sent status

            // Optionally, add a message to the context result
            //context.result = { message: 'Password reset email sent' };
        }


    } catch (error) {
        console.error(error);
    }

    return context;
};
