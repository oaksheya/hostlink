import { endpointRoot, HRAPIRoot } from './rest-mgmt';
import { IMainConfig, IEnvSettings } from './app.interface';
export const AppMainConfig: IMainConfig = {
  AppName: 'SalesIQ',
  AppVersion: '2.4.2',
  AppEnvironment: 'dev',
  IsAkanaEnabled: true,
  EnableDeviceCheck: true,
  EnablePlatformReady: true,
  SecuredConnectionEnabled: true
};

export const EnvironmentHosts = {
  localhost: 'dev',
  'salesiq-stage.cloud.health.ge.com': 'stg',
  'salesiq.gehealthcare.com': 'prd'
};
/*
const EnvConfigMobile = {
  true: {
    IsAkanaEnabled: true,
    EnableDeviceCheck: true,
    EnablePlatformReady: true,
    SecuredConnectionEnabled: true
  },
  false: {
    IsAkanaEnabled: false,
    EnableDeviceCheck: false,
    EnablePlatformReady: true,
    SecuredConnectionEnabled: true
  }
};*/
/*
const CustomConstants: IEnvSettings = {
  defaultUser: {
    useDefaultUser: true,
    sso: '212462655'
  },
  root: {
    webHost: 'http://localhost:8888/#/',
    api: {
      hrapi: HRAPIRoot.stg,
      backend: {
        web: endpointRoot.stg.akana['false'],
        mobile: endpointRoot.stg.web['false']
      }
    }
  }
};*/
const DevConstants: IEnvSettings = {
  defaultUser: {
    useDefaultUser: true,
    sso: '212462655'
  },
  root: {
    webHost: 'http://localhost:8888/#/',
    api: {
      hrapi: HRAPIRoot.dev,
      backend: {
        web: endpointRoot.dev.akana['false'],
        mobile: endpointRoot.dev.web['false']
      }
    }
  }
};

const StgConstants: IEnvSettings = {
  defaultUser: {
    useDefaultUser: false,
    sso: '212462655'
  },
  root: {
    webHost: 'http://salesiq-stage.cloud.health.ge.com/#/',
    api: {
      hrapi: HRAPIRoot.stg,
      backend: {
        web: endpointRoot.stg.akana['true'],
        mobile: endpointRoot.stg.web['true']
      }
    }
  }
};
const PrdConstants: IEnvSettings = {
  defaultUser: {
    useDefaultUser: false
  },
  root: {
    webHost: 'https://salesiq.gehealthcare.com/#/',
    api: {
      hrapi: HRAPIRoot.prd,
      backend: {
        web: endpointRoot.prd.akana['true'],
        mobile: endpointRoot.prd.web['true']
      }
    }
  }
};

export const AppConstants: {
  dev: IEnvSettings;
  stg: IEnvSettings;
  prd: IEnvSettings;
} = {
  dev: DevConstants,
  stg: StgConstants,
  prd: PrdConstants
};

//export const Constants: IEnvSettings =
//  AppConstants[AppMainConfig.AppEnvironment];
