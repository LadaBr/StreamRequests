import {Component, OnInit} from '@angular/core';
import {AuthConfig, JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';
import {RouteConfigLoadEnd, RouteConfigLoadStart, Router} from '@angular/router';

export const authConfig: AuthConfig = {
  issuer: 'https://id.twitch.tv/oauth2',
  redirectUri: window.location.origin,
  clientId: environment.twitchApi.clientId,
  scope: 'user_subscriptions openid user_read',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  title = 'StreamRequests';
  loadingRouteConfig: boolean;
  constructor(private oauthService: OAuthService, private router: Router) {
    this.configureWithNewConfigApi();
    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument().then(() => {
      this.oauthService.tryLogin();
    });
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        this.loadingRouteConfig = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.loadingRouteConfig = false;
      }
    });
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }
}
