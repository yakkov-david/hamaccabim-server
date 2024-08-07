// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html

// Import necessary modules
import { feathers } from '@feathersjs/feathers';
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

export { app };
