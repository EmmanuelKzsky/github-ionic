import {Component, OnInit, ViewChild} from '@angular/core';
import {IonInfiniteScroll} from "@ionic/angular";
import {User} from "../../model/User";
import {UserService} from "../../api/user.service";
import {InAppBrowser} from '@awesome-cordova-plugins/in-app-browser/ngx';
import {InAppBrowserOptions} from "@awesome-cordova-plugins/in-app-browser";
import {ActivatedRoute} from "@angular/router";
import {fromRoot} from "../../store/indexUsers";
import {select, Store} from "@ngrx/store";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab-search.page.html',
  styleUrls: ['tab-search.page.scss']
})
export class TabSearchPage implements OnInit {

  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;
  user: User;
  inputKey = '';
  //Options for inAppBrowser plugin
  options: InAppBrowserOptions = {
    location: 'yes',
    hidden: 'no',
    clearcache: 'yes',
    clearsessioncache: 'yes',
    zoom: 'yes',
    hardwareback: 'yes',
    mediaPlaybackRequiresUserAction: 'no',
    shouldPauseOnSuspend: 'no',
    closebuttoncaption: 'Close',
    disallowoverscroll: 'no',
    toolbar: 'yes',
    enableViewportScale: 'no',
    allowInlineMediaPlayback: 'no',
    presentationstyle: 'pagesheet',
    fullscreen: 'yes',
  };

  constructor(private usersStore: Store<{ userState: any }>,
              private iab: InAppBrowser,
              private aRoute: ActivatedRoute) {
  }

  /**
   * NgOnInit used to get subscribed for url changes and store changes
   */
  ngOnInit(): void {
    //Subscribe to route params so we can send towards the user service
    this.aRoute.params.subscribe(parameter => {
      const {login} = parameter;
      console.log(login);
      this.inputKey = login;
      this.getUser(login);
    });
    //Call selector to be only aware of user retrieved
    this.usersStore.pipe(select(fromRoot.getStateUser)).subscribe(
      (user: User) => this.user = user
    );

  }

  /**
   * Function to retrieve user after user type and debounce
   * @param event
   */
  onInput(event) {
    console.log(this.inputKey);
    this.getUser(this.inputKey);
  }

  /**
   * Function that dispatches the action to retrieve the user required
   * @param login
   */
  getUser(login: string) {
    this.usersStore.dispatch(fromRoot.GetUser({login}));
  }

  /**
   * Function to call inAppBrowser pluign with user Company
   * @param url
   */
  openCompany(url) {
    const target = '_blank';
    this.iab.create(url, target, this.options);
  }

  /**
   * Function that cleans the data of the user from input and details
   * @param event
   */
  onCancel(event) {
    console.log('cancel');
    this.inputKey = '';
    delete this.user;
  }
}
