import { Component } from '@angular/core';

enum Directions {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {

  public col: number;
  public row: number;
  public dir: string;

  public rowvalues: any = [0, 1, 2, 3, 4];
  public colvalues: any = [0, 1, 2, 3, 4];
  public items: any = [];

  public currentrow = 0;
  public currentcol = 0;
  public currentdir = 'NORTH';
  public placed = false;
  public item;

  constructor() {}

  public place() {
    if (this.checkIfNulls() ||
       !(this.row in this.rowvalues) ||
        !(this.col in this.colvalues) ||
        this.notValidDirection()) {
          return;
    }
    this.currentrow = this.row;
    this.currentcol = this.col;
    this.currentdir = this.dir;
    this.placed = true;
  }

  public checkIfNulls() {
    if (this.col === null ||
      this.row === null ||
      this.dir === null ) {
        return true;
      }
    return false;
  }

  public notValidDirection() {
    for (const item in Directions) {
      if ( this.dir === Directions[item]) {
        return false;
      }
    }
    return true;
  }

  public act(action: string) {
    if (!this.placed) {
      return;
    }
    switch (action) {
      case 'move' : this.move();
                    break;
      case 'left': this.left();
                   break;
      case 'right': this.right();
                    break;
      case 'report': this.report();
                     break;
      default: return;

    }
  }

  public move() {
    if (!this.placed) {
      return;
    }
    if (this.currentdir === Directions.NORTH) {
      if (this.currentrow === 4) {
          return;
      }
      this.currentrow ++;
    } else if (this.currentdir === Directions.EAST) {
      if (this.currentcol === 4) {
          return;
      }
      this.currentcol ++;
    } else if (this.currentdir === Directions.SOUTH) {
      if (this.currentrow === 0) {
          return;
      }
      this.currentrow --;
    } else {
      if (this.currentcol === 0) {
          return;
      }
      this.currentcol --;
    }

  }
  public left() {
    if (!this.placed) {
      return;
    }
    if (this.currentdir === Directions.NORTH) {
      this.currentdir = Directions.WEST;
    } else if (this.currentdir === Directions.EAST) {
      this.currentdir = Directions.NORTH;
    } else if (this.currentdir === Directions.SOUTH) {
      this.currentdir = Directions.EAST;
    } else {
      this.currentdir = Directions.SOUTH;
    }
  }
  public right() {
    if (!this.placed) {
      return;
    }
    if (this.currentdir === Directions.WEST) {
      this.currentdir = Directions.NORTH;
    } else if (this.currentdir === Directions.NORTH) {
      this.currentdir = Directions.EAST;
    } else if (this.currentdir === Directions.EAST) {
      this.currentdir = Directions.SOUTH;
    } else {
      this.currentdir = Directions.WEST;
    }
  }
  public report() {
    if (!this.placed) {
      return;
    }
    this.items.push(this.currentcol + ',' + this.currentrow + ',' + this.currentdir);
  }
}
