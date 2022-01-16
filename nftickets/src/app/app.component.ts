import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Moralis } from 'moralis';
import { environment } from '../environments/environment';
// import { User } from './user.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  title = 'NFTickets';

  user?: User;

  constructor(private cdr: ChangeDetectorRef){}

  ngOnInit() {
    Moralis.start({
      appId: environment.moralis.appId,
      serverUrl: environment.moralis.serverUrl,
    })
      .then(() => console.info('Moralis has been initialised.'))
      .finally(() => this.setLoggedInUser(Moralis.User.current()));
  }

  login(provider: 'metamask' | 'walletconnect' = 'metamask') {
    (provider === 'metamask'
      ? Moralis.Web3.authenticate()
      : Moralis.Web3.authenticate({ provider }))
          .then((loggedInUser) => this.setLoggedInUser(loggedInUser))
          .catch((e) => console.error(`Moralis '${provider}' login error:`, e));
  }

  logout() {
    Moralis.User.logOut()
      .then((loggedOutUser) => console.info('logout', loggedOutUser))
      // Set user to undefined
      .then(() => this.setLoggedInUser(undefined))
      // Disconnect Web3 wallet
      .then(() => Moralis.Web3.cleanup())
      .catch((e) => console.error('Moralis logout error:', e));
  }

  private setLoggedInUser(loggedInUser?: User) {
    this.user = loggedInUser;
    console.info('Loggedin user:', loggedInUser);
    /**
     * Manual detect changes due to OnPush change detection.
     * This can be eliminated if you use async pipe and Observables
     * (out of scope of this demo)
     */
    this.cdr.detectChanges();
  }
}

export type User = Moralis.User<Moralis.Attributes>;
