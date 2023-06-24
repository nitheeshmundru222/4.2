import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlayersComponent } from './update-players.component';

describe('UpdatePlayersComponent', () => {
  let component: UpdatePlayersComponent;
  let fixture: ComponentFixture<UpdatePlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
