import { Component, OnInit } from '@angular/core';
import { User } from 'src/model/user.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  arrUsers: User[] = new Array(
    {id: 1, username: 'user123', email: 'user123@example.com', password: 'Passw0rd!'},
    {id: 2, username: 'jane_doe', email: 'jane.doe@exampple.com', password: 'Qwerty123!'},
    {id: 3, username: 'john_smith', email: 'john.smith@example.com', password: 'MySecureP@ss1'},
    {id: 4, username: 'test_user', email: 'test.user@example.com', password: 'Testing123!'},
    {id: 5, username: 'alice_wonder', email: 'alice.wonder@example.com', password: 'Wonderland2024'},
  );

  searchInput: string = '';
  public arrUsersSearch: User[] = this.arrUsers;
  public results: User[] = [...this.arrUsersSearch];

  handleInput(event: Event): void {
    const query = (event.target as HTMLInputElement).value.toLowerCase();

    if (query.length < 3) {
      // Show all users if query is less than 3 characters
      this.results = [...this.arrUsers];
      return;
    }else{
      this.results = this.arrUsers.filter((user) => user.username.toLowerCase().includes(query));
    }


  }

  constructor() { }

  ngOnInit() { }
}
