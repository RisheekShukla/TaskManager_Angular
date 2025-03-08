import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTaskComponentComponent } from './all-task-component.component';

describe('AllTaskComponentComponent', () => {
  let component: AllTaskComponentComponent;
  let fixture: ComponentFixture<AllTaskComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTaskComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTaskComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
