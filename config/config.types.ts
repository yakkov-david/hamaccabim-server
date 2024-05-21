//config.types.ts

// Existing authentication configuration types
export interface JwtOptions {
    header: { typ: string };
    audience: string;
    issuer: string;
    algorithm: string;
    expiresIn: string;
  }
  
  export interface LocalStrategy {
    usernameField: string;
    passwordField: string;
  }
  
  export interface AuthenticationConfiguration {
    entity: string;
    service: string;
    secret: string;
    authStrategies: string[];
    jwtOptions: JwtOptions;
    local: LocalStrategy;
  }
  
  export interface Config {
    authentication: AuthenticationConfiguration;
  }
  
  // New types for another service can be added here
  export interface AnotherServiceConfig {
    // Define additional or different settings as needed
  }
  