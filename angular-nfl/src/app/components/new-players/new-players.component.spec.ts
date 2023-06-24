import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlayersComponent } from './new-players.component';

describe('NewPlayersComponent', () => {
  let component: NewPlayersComponent;
  let fixture: ComponentFixture<NewPlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlayersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
