import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersGroupDetailsComponent } from './users-group-details.component';

describe('UsersGroupDetailsComponent', () => {
  let component: UsersGroupDetailsComponent;
  let fixture: ComponentFixture<UsersGroupDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersGroupDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
