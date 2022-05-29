import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {UserService} from '../../api/user.service';
import {User} from '../../model/User';
import {IonInfiniteScroll} from '@ionic/angular';
import {select, Store} from '@ngrx/store';
import {fromRoot} from '../../store/indexUsers';


@Component({
  selector: 'app-tab-users',
  templateUrl: 'tab-users.page.html',
  styleUrls: ['tab-users.page.scss']
})
export class TabUsersPage implements OnInit{

  @ViewChild(IonInfiniteScroll, {static:false}) infiniteScroll: IonInfiniteScroll;
  users: User[] = [];
  offset = 0;

  constructor(private usersStore: Store<{userState: any}>,
              private user: UserService) {
    this.retrieveData();
  }

  /**
   * ngOnInit used to get subcribed to store changes
   */
  ngOnInit(): void {
    this.usersStore.pipe(select(fromRoot.getStateUsersList)).subscribe(
      (users: User[]) => this.users = users
    );
  }

  /**
   * Function to dispatch action to retrieve users data
   */
  retrieveData() {
    this.usersStore.dispatch(fromRoot.GetUsersList({offset: this.offset}));
    this.offset += 15;
  }

  /**
   * Function used to make the infinite scroll work
   */
  doInfinite() {
    this.retrieveData();
    this.infiniteScroll.complete();
  }

}
