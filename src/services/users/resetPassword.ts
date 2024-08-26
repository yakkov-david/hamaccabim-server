
//resetPassword.ts

import { HookContext } from '@feathersjs/feathers';
import * as bcryptjs from 'bcryptjs';

export const resetPassword = async (context: HookContext) => {
  const { app, data } = context;
  const { token, newPassword, action } = data;

  // Find the user by resetPasswordToken
  const user = await app.service('users').find({
    query: {
      resetPasswordToken: token,
    },
  });

  if (user.total === 0) {
    throw new Error('Invalid token');
  }

  const foundUser = user[0];

  // Check if the token is expired
  if (new Date() > new Date(foundUser.resetPasswordExpires)) {
    throw new Error('Token expired');
  }

  // Hash the new password
  const salt = await bcryptjs.genSalt(10);
  const hashedPassword = await bcryptjs.hash(newPassword, salt);

  // Update the user's password and remove reset token fields
  await app.service('users').patch(foundUser._id, {
    password: hashedPassword,
    $unset: {
      resetPasswordToken: true,
      resetPasswordExpires: true,
    },
  });
  context.result = { message: 'Password reset successfully' };
  return context;
};

//export default resetPassword;
