import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
import { FormsModule } from '@angular/forms';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [IonicModule.forRoot(), FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make curcol=3,currow=2,curdir= EAST', () => {
    component.placed = false;
    component.curcol = 0;
    component.currow = 0;
    component.curdir = 'NORTH';
    component.row = 2;
    component.col = 3;
    component.dir = 'EAST';
    component.place();
    expect(component.currow).toBe(2);
    expect(component.curcol).toBe(3);
    expect(component.curdir).toBe('EAST');
    expect(component.placed).toBe(true);
  });

  it('should make curcol=3,currow=2,curdir= WEST', () => {
    component.placed = false;
    component.curcol = 0;
    component.currow = 0;
    component.curdir = 'SOUTH';
    component.row = 2;
    component.col = 3;
    component.dir = 'WEST';
    component.place();
    expect(component.currow).toBe(2);
    expect(component.curcol).toBe(3);
    expect(component.curdir).toBe('WEST');
    expect(component.placed).toBe(true);
  });

  it('should append 1,2,right to items', () => {
    //    this.items.push(this.curcol + ',' + this.currow + ',' + this.curdir);
    component.items = [];
    component.placed = true;
    component.curcol = 1;
    component.currow = 2;
    component.curdir = 'right';
    component.report();
    expect(component.items).toEqual(['1,2,right']);
  });

  it('should change currow to 3', () => {
    component.placed = true;
    component.curcol = 1;
    component.currow = 2;
    component.curdir = 'NORTH';
    component.move();
    expect(component.currow).toBe(3);
  });

  it('should change curcol to 2', () => {
    component.placed = true;
    component.curcol = 1;
    component.currow = 2;
    component.curdir = 'EAST';
    component.move();
    expect(component.curcol).toBe(2);
  });

  it('should change curcol to 0', () => {
    component.placed = true;
    component.curcol = 1;
    component.currow = 2;
    component.curdir = 'WEST';
    component.move();
    expect(component.curcol).toBe(0);
  });

  it('should change currow to 1', () => {
    component.placed = true;
    component.curcol = 1;
    component.currow = 2;
    component.curdir = 'SOUTH';
    component.move();
    expect(component.currow).toBe(1);
  });

  it('should change curdir to NORTH ', () => {
    component.placed = true;
    component.curdir = 'EAST';
    component.left();
    expect(component.curdir).toBe('NORTH');
  });

  it('should change curdir to EAST ', () => {
    component.placed = true;
    component.curdir = 'SOUTH';
    component.left();
    expect(component.curdir).toBe('EAST');
  });

  it('should change curdir to SOUTH ', () => {
    component.placed = true;
    component.curdir = 'WEST';
    component.left();
    expect(component.curdir).toBe('SOUTH');
  });

  it('should change curdir to WEST ', () => {
    component.placed = true;
    component.curdir = 'NORTH';
    component.left();
    expect(component.curdir).toBe('WEST');
  });

  it('should change curdir to NORTH ', () => {
    component.placed = true;
    component.curdir = 'WEST';
    component.right();
    expect(component.curdir).toBe('NORTH');
  });

  it('should change curdir to EAST ', () => {
    component.placed = true;
    component.curdir = 'NORTH';
    component.right();
    expect(component.curdir).toBe('EAST');
  });

  it('should change curdir to SOUTH ', () => {
    component.placed = true;
    component.curdir = 'EAST';
    component.right();
    expect(component.curdir).toBe('SOUTH');
  });

  it('should change curdir to WEST ', () => {
    component.placed = true;
    component.curdir = 'SOUTH';
    component.right();
    expect(component.curdir).toBe('WEST');
  });

});


