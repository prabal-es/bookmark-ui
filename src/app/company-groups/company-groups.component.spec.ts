import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyGroupsComponent } from './company-groups.component';

describe('CompanyGroupsComponent', () => {
  let component: CompanyGroupsComponent;
  let fixture: ComponentFixture<CompanyGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyGroupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
