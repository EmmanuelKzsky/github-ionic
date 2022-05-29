import {Directive, ElementRef, Input, OnInit} from '@angular/core';
import {UserService} from '../api/user.service';
import {fromRoot} from '../store/indexUsers';
import {select, Store} from '@ngrx/store';
import {User} from '../model/User';

@Directive({
  selector: '[appUsersRepo]'
})
export class UsersRepoDirective implements OnInit{

  @Input() user: User;

  constructor(private el: ElementRef) {
  }

  /**
   * ngOnInit method that evaluates user data to verify the amount of public repos
   */
  ngOnInit(): void {
    if(this.user && this.user.public_repos > 2){
      this.el.nativeElement.style.color = 'red';
    }

  }

}
