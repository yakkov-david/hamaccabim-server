// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html


import { feathers } from '@feathersjs/feathers'
import express, {
  rest,
  json,
  urlencoded,
  cors,
  serveStatic,
  notFound,
  errorHandler
} from '@feathersjs/express'
import configuration from '@feathersjs/configuration'
import socketio from '@feathersjs/socketio'

import type { Application } from './declarations'
import { configurationValidator } from './configuration'
import { logger } from './logger'
import { logError } from './hooks/log-error'
import { mongodb } from './mongodb'
import { services } from './services/index'
import { channels } from './channels'
import { Request } from 'express';


import { upload } from './services/upload-image/uploadMiddleware';



const app: Application = express(feathers())


// Load app configuration
app.configure(configuration(configurationValidator))
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
// Host the public folder
app.use('/', serveStatic(app.get('public')))


// Multer middleware for handling image uploads
app.post('/upload-image', upload.single('file'), (req: Request, res: any) => {
  if (req.file) {
    // Assuming your server is running on localhost:3030 and images are stored in a public/Images folder accessible via HTTP
    const imageUrl = `${req.protocol}://${req.hostname}:3030/Images/${req.file.filename}`;

    res.json({ success: true, imageUrl: imageUrl, message: "File uploaded successfully." });
  } else {
    res.status(400).send('No file uploaded.');
  }
});



// Configure services and real-time functionality
app.configure(rest())
app.configure(
  socketio({
    cors: {
      origin: app.get('origins')
    }
  })
)
app.configure(mongodb)
app.configure(services)
app.configure(channels)





// Configure a middleware for 404s and the error handler
app.use(notFound())
app.use(errorHandler({ logger }))


// Register hooks that run on all service methods
app.hooks({
  around: {
    all: [logError]
  },
  before: {},
  after: {},
  error: {}
})
// Register application setup and teardown hooks here
app.hooks({
  setup: [],
  teardown: []
})

export { app }