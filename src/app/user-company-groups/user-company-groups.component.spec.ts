import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompanyGroupsComponent } from './user-company-groups.component';

describe('UserCompanyGroupsComponent', () => {
  let component: UserCompanyGroupsComponent;
  let fixture: ComponentFixture<UserCompanyGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCompanyGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCompanyGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
