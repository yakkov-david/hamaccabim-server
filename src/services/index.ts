import { landingPages } from './landing-pages/landing-pages'
//import { landingPages } from './landing-pages/landing-pages'
import { ip } from './ip/ip'
// For more information about this file see https://dove.feathersjs.com/guides/cli/application.html#configure-functions
import type { Application } from '../declarations'

export const services = (app: Application) => {
  app.configure(landingPages)
  //app.configure(landingPages)
  app.configure(ip)
  // All services will be registered here
}
