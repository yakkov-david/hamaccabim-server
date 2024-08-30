"use strict";
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// Import necessary modules
/*import { feathers } from '@feathersjs/feathers';
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler
} from '@feathersjs/express';
import configuration from '@feathersjs/configuration';
import socketio from '@feathersjs/socketio';
import { Application } from './declarations';
import { configurationValidator } from './configuration';
import { logger } from './logger';
import { logError } from './hooks/log-error';
import { mongodb } from './mongodb';
import { services } from './services/index';
import { channels } from './channels';
import { Request, Response, NextFunction } from 'express';

import rateLimit from 'express-rate-limit';

import { upload } from './services/upload-image/uploadMiddleware';

const app: Application = express(feathers());

// Load app configuration
app.configure(configuration(configurationValidator));

// Set up CORS to allow only requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000', // Allow only this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'], // Allowed headers
  credentials: true // Allow cookies and other credentials to be sent
}));

// Middleware to handle preflight requests for CORS
app.options('*', cors());

// Middleware to check for API key
app.use((req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers['x-api-key'];
  if (apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: 'Unauthorized' });
  }
  next();
});

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

app.use(limiter);

app.use(json());
app.use(urlencoded({ extended: true }));
// Host the public folder
app.use('/', serveStatic(app.get('public')));

// Multer middleware for handling image uploads
app.post('/upload-image', upload.single('file'), (req: Request, res: Response) => {
  if (req.file) {
    const imageUrl = `${req.protocol}://${req.hostname}:3030/Images/${req.file.filename}`;

    res.json({ success: true, imageUrl: imageUrl, message: "File uploaded successfully." });
  } else {
    res.status(400).send('No file uploaded.');
  }
});

// Configure services and real-time functionality
app.configure(rest());
app.configure(
  socketio({
    cors: {
      origin: app.get('origins')
    }
  })
);
app.configure(mongodb);
app.configure(services);
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(notFound());
app.use(errorHandler({ logger }));

// Register hooks that run on all service methods
app.hooks({
  around: {
    all: [logError]
  },
  before: {},
  after: {},
  error: {}
});
// Register application setup and teardown hooks here
app.hooks({
  setup: [],
  teardown: []
});

export { app };*/
// Import necessary modules
const feathers_1 = require("@feathersjs/feathers");
const express_1 = __importStar(require("@feathersjs/express"));
const cors_1 = __importDefault(require("cors"));
const configuration_1 = __importDefault(require("@feathersjs/configuration"));
const socketio_1 = __importDefault(require("@feathersjs/socketio"));
const configuration_2 = require("./configuration");
const logger_1 = require("./logger");
const log_error_1 = require("./hooks/log-error");
const mongodb_1 = require("./mongodb");
const index_1 = require("./services/index");
const channels_1 = require("./channels");
const storage_1 = require("@google-cloud/storage");
//import path from 'path';
const multer_1 = __importDefault(require("multer"));
const dotenv = __importStar(require("dotenv"));
dotenv.config();
const app = (0, express_1.default)((0, feathers_1.feathers)());
exports.app = app;
// Load app configuration
app.configure((0, configuration_1.default)(configuration_2.configurationValidator));
// Middleware to handle preflight requests for CORS
app.options('*', (0, cors_1.default)());
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        const allowedOrigins = ['http://localhost:3000', 'https://hamaccabim.netlify.app'];
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key'], // Allowed headers
    credentials: true // Allow cookies and other credentials to be sent
}));
/*
app.use(cors({
  credentials: true,
  origin: [
    '*',
    /\.*\.*$/,
  ]
}));
*/
// Middleware to check for API key
app.use((req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey !== process.env.API_KEY) {
        return res.status(403).json({ error: 'Unauthorized' });
    }
    next();
});
/*
// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: 'Too many requests from this IP, please try again after 15 minutes',
});

app.use(limiter);
*/
app.use((0, express_1.json)());
app.use((0, express_1.urlencoded)({ extended: true }));
// Host the public folder
app.use('/', (0, express_1.serveStatic)(app.get('public')));
// Setup Google Cloud Storage
const storage = new storage_1.Storage({
    keyFilename: process.env.GOOGLE_CLOUD_SERVICE_ACCOUNT_KEY,
    projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
});
const bucketName = 'hamaccabim-photos'; // your bucket name
const bucket = storage.bucket(bucketName);
// Multer middleware for handling image uploads
const upload = (0, multer_1.default)();
// Endpoint for uploading images
app.post('/upload-image', upload.single('file'), async (req, res) => {
    if (req.file) {
        try {
            // Upload the image to Google Cloud Storage
            const blob = bucket.file(req.file.originalname);
            const blobStream = blob.createWriteStream({
                resumable: false,
            });
            blobStream.on('error', (err) => {
                console.error('Upload error:', err);
                res.status(500).send({ success: false, message: 'File upload failed.' });
            });
            blobStream.on('finish', async () => {
                // Construct the public URL
                const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
                res.json({ success: true, imageUrl: publicUrl, message: 'File uploaded successfully.' });
            });
            blobStream.end(req.file.buffer);
        }
        catch (error) {
            console.error('Error uploading image:', error);
            res.status(500).send({ success: false, message: 'File upload failed.' });
        }
    }
    else {
        res.status(400).send('No file uploaded.');
    }
});
// Configure services and real-time functionality
app.configure((0, express_1.rest)());
app.configure((0, socketio_1.default)({
    cors: {
        origin: app.get('origins')
    }
}));
app.configure(mongodb_1.mongodb);
app.configure(index_1.services);
app.configure(channels_1.channels);
// Configure a middleware for 404s and the error handler
app.use((0, express_1.notFound)());
app.use((0, express_1.errorHandler)({ logger: logger_1.logger }));
// Register hooks that run on all service methods
app.hooks({
    around: {
        all: [log_error_1.logError]
    },
    before: {},
    after: {},
    error: {}
});
// Register application setup and teardown hooks here
app.hooks({
    setup: [],
    teardown: []
});
//# sourceMappingURL=app.js.map