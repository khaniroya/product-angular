import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class AppComponent {
  title = 'app-test';

  show_dp: boolean = false
  clickToShowDropDown() {
    this.show_dp = !this.show_dp
  }
  onClick(event: any) {
    let arrayClassList = ['user', ' dropـdown', 'dropdown_menu', 'title_dp']
    let include = arrayClassList.includes(event.srcElement.className)
    if (!include) {
      this.show_dp = false
    }
  }
}
