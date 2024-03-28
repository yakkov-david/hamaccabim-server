
//uploadMiddleware.ts

import multer from 'multer'; // Use default import syntax for multer
import path from 'path'; // This can remain as it is

// Configure storage for the files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define where the uploaded files should be stored
    cb(null, path.join(__dirname, '../../../public/Images'));
  },
  filename: function (req, file, cb) {
    // Rename the file to ensure uniqueness
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

// Initialize and export the multer middleware
export const upload = multer({ storage: storage });
