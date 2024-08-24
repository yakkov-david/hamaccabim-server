"use strict";
//resetPassword.ts
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
const bcrypt = __importStar(require("bcrypt"));
const resetPassword = async (context) => {
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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
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
exports.resetPassword = resetPassword;
//export default resetPassword;
//# sourceMappingURL=resetPassword.js.map