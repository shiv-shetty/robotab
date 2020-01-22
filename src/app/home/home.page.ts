import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public col: number;
  public row: number;
  public dir: string;

  public directions: any = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
  public rowcolvalues: any = [0, 1, 2, 3, 4];
  public items: any = []; 

  public currow = 0;
  public curcol = 0;
  public curdir = this.directions[0];
  public i = 0;
  public placed = false;

  constructor() {}

  public place() {
    if (this.col === null ||
       this.row === null ||
       this.dir === null ||
       !(this.row in this.rowcolvalues) ||
        !(this.col in this.rowcolvalues) ||
        (this.dir !== 'NORTH' && this.dir !== 'EAST' && this.dir !== 'SOUTH' && this.dir !== 'WEST')) {
          return;
    }
    this.currow = this.row;
    this.curcol = this.col;
    this.curdir = this.dir;
    this.placed = true;
  }
  public move() {
    if (!this.placed) {
      return;
    }
    if (this.curdir === this.directions[0]) {
      if (this.currow === 4) {
          return;
      }
      this.currow ++;
    } else if (this.curdir === this.directions[1]) {
      if (this.curcol === 4) {
          return;
      }
      this.curcol ++;
    } else if (this.curdir === this.directions[2]) {
      if (this.currow === 0) {
          return;
      }
      this.currow --;
    } else {
      if (this.curcol === 0) {
          return;
      }
      this.curcol --;
    }

  }
  public left() {
    if (!this.placed) {
      return;
  }
    if (this.curdir === this.directions[0]) {
      this.curdir = this.directions[3];
    } else {
      for (this.i = 1; this.i < 4; this.i ++) {
          if (this.curdir === this.directions[this.i]) {
              this.curdir = this.directions[this.i - 1];
              break;
          }
      }
    }
  }
  public right() {
    if (!this.placed) {
      return;
    }
    if (this.curdir === this.directions[3]) {
      this.curdir = this.directions[0];
    } else {
      for (this.i = 0; this.i < 3; this.i ++) {
          if (this.curdir === this.directions[this.i]) {
              this.curdir = this.directions[this.i + 1];
              break;
          }
      }
    }

  }
  public report() {
    if (!this.placed) {
      return;
    }
    this.items.push(this.curcol + ',' + this.currow + ',' + this.curdir);
  }

 

}
