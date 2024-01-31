import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsWithSignalsComponent } from './ships-with-signals.component';

describe('ShipsWithSignalsComponent', () => {
  let component: ShipsWithSignalsComponent;
  let fixture: ComponentFixture<ShipsWithSignalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipsWithSignalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipsWithSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
