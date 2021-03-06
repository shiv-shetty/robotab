import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, AlertController } from '@ionic/angular';

import { HomePage } from './home.page';
import { FormsModule } from '@angular/forms';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let alertSpy;
  const presentSpy = jasmine.createSpyObj('presentSpy', { present: Promise.resolve()});

  beforeEach(async(() => {
    alertSpy = jasmine.createSpyObj('alertSpy', { create: Promise.resolve(presentSpy)});

    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), FormsModule],
      providers: [
        {provide: AlertController, useValue: alertSpy}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should make currentcol=3,currentrow=2,currentdir= EAST and placed=true', () => {
    component.placed = false;
    component.currentcol = 0;
    component.currentrow = 0;
    component.currentdir = 'NORTH';
    component.row = 2;
    component.col = 3;
    component.dir = 'EAST';
    component.place();
    expect(component.currentrow).toBe(2);
    expect(component.currentcol).toBe(3);
    expect(component.currentdir).toBe('EAST');
    expect(component.placed).toBe(true);
  });

  it('should make currentcol=3,currentrow=2,currentdir= WEST and placed=true', () => {
    component.placed = false;
    component.currentcol = 0;
    component.currentrow = 0;
    component.currentdir = 'SOUTH';
    component.row = 2;
    component.col = 3;
    component.dir = 'WEST';
    component.place();
    expect(component.currentrow).toBe(2);
    expect(component.currentcol).toBe(3);
    expect(component.currentdir).toBe('WEST');
    expect(component.placed).toBe(true);
  });

  it('should keep currentcol=0,currentrow=0,currentdir= NORTH and placed=false', async () => {
    component.placed = false;
    component.currentcol = 0;
    component.currentrow = 0;
    component.currentdir = 'NORTH';
    component.row = 20;
    component.col = 3;
    component.dir = 'EAST';
    const presentPlaceAlertSpy = spyOn(component, 'presentPlaceAlert').and.callThrough();
    await component.place();
    expect(presentPlaceAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentrow).toBe(0);
    expect(component.currentcol).toBe(0);
    expect(component.currentdir).toBe('NORTH');
    expect(component.placed).toBe(false);
  });

  it('should keep currentcol=0,currentrow=0,currentdir= NORTH and placed=false', async () => {
    component.placed = false;
    component.currentcol = 0;
    component.currentrow = 0;
    component.currentdir = 'NORTH';
    component.row = 2;
    component.col = 3;
    component.dir = 'south west';
    const presentPlaceAlertSpy = spyOn(component, 'presentPlaceAlert').and.callThrough();
    await component.place();
    expect(presentPlaceAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentrow).toBe(0);
    expect(component.currentcol).toBe(0);
    expect(component.currentdir).toBe('NORTH');
    expect(component.placed).toBe(false);
  });

  it('should keep currentcol=0,currentrow=0,currentdir= NORTH and placed=false', async () => {
    component.placed = false;
    component.currentcol = 0;
    component.currentrow = 0;
    component.currentdir = 'NORTH';
    component.row = null;
    component.col = 3;
    component.dir = 'south west';
    const presentPlaceAlertSpy = spyOn(component, 'presentPlaceAlert').and.callThrough();
    await component.place();
    expect(presentPlaceAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentrow).toBe(0);
    expect(component.currentcol).toBe(0);
    expect(component.currentdir).toBe('NORTH');
    expect(component.placed).toBe(false);
  });

  it('should keep currentrow at 2', async () => {
    component.placed = false;
    component.currentcol = 1;
    component.currentrow = 2;
    component.currentdir = 'NORTH';
    const presentNoPlaceAlertSpy = spyOn(component, 'presentNoPlaceAlert').and.callThrough();
    await component.act('move');
    expect(presentNoPlaceAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentrow).toBe(2);
  });

  it('should keep currentrow at 4', async () => {
    component.placed = true;
    component.currentcol = 1;
    component.currentrow = 4;
    component.currentdir = 'NORTH';
    const presentMoveAlertSpy = spyOn(component, 'presentMoveAlert').and.callThrough();
    await component.act('move');
    expect(presentMoveAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentrow).toBe(4);
  });

  it('should change currentrow to 3', () => {
    component.placed = true;
    component.currentcol = 1;
    component.currentrow = 2;
    component.currentdir = 'NORTH';
    component.act('move');
    expect(component.currentrow).toBe(3);
  });

  it('should keep currentcol at 4', async () => {
    component.placed = true;
    component.currentcol = 4;
    component.currentrow = 1;
    component.currentdir = 'EAST';
    const presentMoveAlertSpy = spyOn(component, 'presentMoveAlert').and.callThrough();
    await component.act('move');
    expect(presentMoveAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentcol).toBe(4);
  });

  it('should change currentcol to 2', () => {
    component.placed = true;
    component.currentcol = 1;
    component.currentrow = 2;
    component.currentdir = 'EAST';
    component.act('move');
    expect(component.currentcol).toBe(2);
  });

  it('should keep currentcol at 0', async () => {
    component.placed = true;
    component.currentcol = 0;
    component.currentrow = 2;
    component.currentdir = 'WEST';
    const presentMoveAlertSpy = spyOn(component, 'presentMoveAlert').and.callThrough();
    await component.act('move');
    expect(presentMoveAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentcol).toBe(0);
  });

  it('should change currentcol to 0', () => {
    component.placed = true;
    component.currentcol = 1;
    component.currentrow = 2;
    component.currentdir = 'WEST';
    component.act('move');
    expect(component.currentcol).toBe(0);
  });

  it('should keep currentrow at 1=0', async () => {
    component.placed = true;
    component.currentcol = 1;
    component.currentrow = 0;
    component.currentdir = 'SOUTH';
    const presentMoveAlertSpy = spyOn(component, 'presentMoveAlert').and.callThrough();
    await component.act('move');
    expect(presentMoveAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentrow).toBe(0);
  });

  it('should change currentrow to 1', () => {
    component.placed = true;
    component.currentcol = 1;
    component.currentrow = 2;
    component.currentdir = 'SOUTH';
    component.act('move');
    expect(component.currentrow).toBe(1);
  });

  it('should keep currentdir at NORTH ', async () => {
    component.placed = false;
    component.currentdir = 'NORTH';
    const presentNoPlaceAlertSpy = spyOn(component, 'presentNoPlaceAlert').and.callThrough();
    await component.act('left');
    expect(presentNoPlaceAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentdir).toBe('NORTH');
  });

  it('should change currentdir to NORTH ', () => {
    component.placed = true;
    component.currentdir = 'EAST';
    component.act('left');
    expect(component.currentdir).toBe('NORTH');
  });

  it('should change currentdir to EAST ', () => {
    component.placed = true;
    component.currentdir = 'SOUTH';
    component.act('left');
    expect(component.currentdir).toBe('EAST');
  });

  it('should change currentdir to SOUTH ', () => {
    component.placed = true;
    component.currentdir = 'WEST';
    component.act('left');
    expect(component.currentdir).toBe('SOUTH');
  });

  it('should change currentdir to WEST ', () => {
    component.placed = true;
    component.currentdir = 'NORTH';
    component.act('left');
    expect(component.currentdir).toBe('WEST');
  });

  it('should keep currentdir at NORTH ', async () => {
    component.placed = false;
    component.currentdir = 'NORTH';
    const presentNoPlaceAlertSpy = spyOn(component, 'presentNoPlaceAlert').and.callThrough();
    await component.act('right');
    expect(presentNoPlaceAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.currentdir).toBe('NORTH');
  });

  it('should change currentdir to NORTH ', () => {
    component.placed = true;
    component.currentdir = 'WEST';
    component.act('right');
    expect(component.currentdir).toBe('NORTH');
  });

  it('should change currentdir to EAST ', () => {
    component.placed = true;
    component.currentdir = 'NORTH';
    component.act('right');
    expect(component.currentdir).toBe('EAST');
  });

  it('should change currentdir to SOUTH ', () => {
    component.placed = true;
    component.currentdir = 'EAST';
    component.act('right');
    expect(component.currentdir).toBe('SOUTH');
  });

  it('should change currentdir to WEST ', () => {
    component.placed = true;
    component.currentdir = 'SOUTH';
    component.act('right');
    expect(component.currentdir).toBe('WEST');
  });

  it('should keep items as []', async () => {
    component.items = [];
    component.placed = false;
    component.currentcol = 1;
    component.currentrow = 2;
    component.currentdir = 'right';
    const presentNoPlaceAlertSpy = spyOn(component, 'presentNoPlaceAlert').and.callThrough();
    await component.act('report');
    expect(presentNoPlaceAlertSpy).toHaveBeenCalled();
    expect(alertSpy.create).toHaveBeenCalled();
    expect(presentSpy.present).toHaveBeenCalled();
    expect(component.items).toEqual([]);
  });

  it('should append 1,2,right to items', () => {
    component.items = [];
    component.placed = true;
    component.currentcol = 1;
    component.currentrow = 2;
    component.currentdir = 'right';
    component.act('report');
    expect(component.items).toEqual(['1,2,right']);
  });

  it('should keep currentdir at SOUTH', () => {
    spyOn(component, 'move');
    spyOn(component, 'left');
    spyOn(component, 'right');
    spyOn(component, 'report');

    component.placed = true;
    component.currentdir = 'SOUTH';
    component.act('');
    expect(component.move).not.toHaveBeenCalled();
    expect(component.left).not.toHaveBeenCalled();
    expect(component.right).not.toHaveBeenCalled();
    expect(component.report).not.toHaveBeenCalled();
    expect(component.currentdir).toBe('SOUTH');
  });
});
