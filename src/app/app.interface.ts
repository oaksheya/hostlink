export interface IMainConfig {
  /*Set app name visible in app */
  AppName: string;
  /* Set app version visible in app */
  AppVersion: string;
  /* Set environment: */
  AppEnvironment: 'dev' | 'stg' | 'prd';
  /* Enable/disable akana: */
  IsAkanaEnabled: boolean;
  /* Enable checking if device is mobile, false: web content is enabled as default */
  EnableDeviceCheck: boolean;
  /* This parameter trun on/off device readyness check on initializiation */
  /* Set this false if you want to run $ ionic serve */
  EnablePlatformReady: boolean;
  /* Set secured host for backend api */
  SecuredConnectionEnabled: boolean;
}

export interface IEnvSettings {
  defaultUser?: {
    useDefaultUser: boolean;
    sso?: string;
  };
  root: {
    webHost: string;
    api: any;
  };
}
