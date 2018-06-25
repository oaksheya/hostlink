import { Injectable } from '@angular/core';

export const endpointRoot: any = {
  dev: {
    akana: {
      true: 'http://3.213.221.213:8085/salesiq/api/',
      false: 'http://3.213.221.213:8085/salesiq/api/'
    },
    web: {
      true: 'http://3.213.221.213:8085/salesiq/api/',
      false: 'http://3.213.221.213:8085/salesiq/api/'
    }
  },
  stg: {
    akana: {
      true: 'https://stage.api.ge.com/healthcare/api/salesiq/v1/api/',
      false: 'https://salesiq-ecs-api-stage.cloud.health.ge.com/salesiq/api/'
    },
    web: {
      true: 'http://salesiq-stage.cloud.health.ge.com/salesIQweb/api/',
      false: 'https://salesiq-ecs-api-stage.cloud.health.ge.com/salesiq/api/'
    }
  },
  prd: {
    akana: {
      true: 'https://api.ge.com/healthcare/api/salesiq/v1/api/',
      false: 'https://salesiq-ecs-api.cloud.health.ge.com/salesiq/api/'
    },
    web: {
      true: 'https://salesiq.gehealthcare.com/salesIQweb/api/',
      false: 'https://salesiq-ecs-api.cloud.health.ge.com/salesiq/api/'
    }
  }
};
export const HRAPIRoot: any = {
  dev: '/hrapi/',
  stg: 'https://stage.api.ge.com/digital/hrapi/v1/',
  prd: 'https://api.ge.com/digital/hrapi/v1/'
};

@Injectable()
export class RestMgmt {
  isMobile: boolean;
  securedConnection: any;
  environment: string;
  isAkana: any;
}
