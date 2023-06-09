import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialmenuComponent } from './specialmenu.component';

describe('SpecialmenuComponent', () => {
  let component: SpecialmenuComponent;
  let fixture: ComponentFixture<SpecialmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialmenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
