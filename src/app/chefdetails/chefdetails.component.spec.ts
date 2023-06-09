import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefdetailsComponent } from './chefdetails.component';

describe('ChefdetailsComponent', () => {
  let component: ChefdetailsComponent;
  let fixture: ComponentFixture<ChefdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChefdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
