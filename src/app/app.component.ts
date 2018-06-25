import { EnvironmentHosts, AppConstants } from './app.constants';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public hostname;
  public href;
  public environment;
  public isMobile;
  mainSettings;
  constructor() {
    this.recognizeEnvironment();
  }

  recognizeEnvironment() {
    let location = window.location;
    this.href = location.href;
    this.hostname = location.hostname;
    this.environment = EnvironmentHosts[this.hostname];
    this.isMobile = false; //this will come from platform plugin in ionic app
    this.mainSettings = JSON.stringify(
      AppConstants[this.environment],
      null,
      '\t'
    );
    console.log('Location: ', location);
  }

  public fakeEnvironment(env: 'dev' | 'stg' | 'prd') {
    let fakeEnvironmentHost = {
      stg: 'salesiq-stage.cloud.health.ge.com',
      prd: 'salesiq.gehealthcare.com'
    };
    this.hostname = env == 'dev' ? location.hostname : fakeEnvironmentHost[env];
    this.environment = EnvironmentHosts[this.hostname];
    console.log('Fake environment: ', this.hostname);
    this.setAppSettings(this.environment, this.isMobile);
    return this.hostname;
  }

  public fakePlatform(platform: 'web' | 'mobile') {
    platform === 'mobile' ? (this.isMobile = true) : (this.isMobile = false);

    this.setAppSettings(this.environment, this.isMobile);
  }

  public setAppSettings(env: 'dev' | 'stg' | 'prd', isMobile: boolean) {
    this.mainSettings = JSON.stringify(AppConstants[env], null, '\t');
    console.log('Main Settings: ', this.mainSettings);
  }
}
