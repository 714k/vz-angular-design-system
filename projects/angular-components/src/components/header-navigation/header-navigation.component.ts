import { Component } from '@angular/core';

@Component({
  selector: 'vz-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.scss']
})
export class HeaderNavigationComponent {
  title: string = "";
  anchors: Array<object> = [];
}