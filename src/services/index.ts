import { analytics } from './analytics/analytics'
import { users } from './users/users'
//import { managers } from './managers/managers'

//import { adminLogin } from './admin-login/admin-login'
import { uploadImage } from './upload-image/upload-image'
import { landingPages } from './landing-pages/landing-pages'

//import { landingPages } from './landing-pages/landing-pages'
import { ip } from './ip/ip'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(analytics)
  app.configure(users)
  //app.configure(managers)
  //app.configure(adminLogin)
  app.configure(uploadImage)
  app.configure(landingPages)
  app.configure(ip)
  // All services will be registered here
}
