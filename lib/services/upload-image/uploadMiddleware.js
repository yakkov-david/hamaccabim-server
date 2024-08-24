"use strict";
//uploadMiddleware.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer")); // Use default import syntax for multer
const path_1 = __importDefault(require("path")); // This can remain as it is
// Configure storage for the files
const storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        // Define where the uploaded files should be stored
        cb(null, path_1.default.join(__dirname, '../../../public/Images'));
    },
    filename: function (req, file, cb) {
        // Rename the file to ensure uniqueness
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
// Initialize and export the multer middleware
exports.upload = (0, multer_1.default)({ storage: storage });
//# sourceMappingURL=uploadMiddleware.js.map