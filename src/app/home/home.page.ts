import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public column: number;

  public variable = 1;

  public items: any = ['a', 'b', 'c', 'd'];

  constructor() {}
  
  public place() {

    this.items.push('e');

  }
}
