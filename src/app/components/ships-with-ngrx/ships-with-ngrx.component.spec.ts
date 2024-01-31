import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsWithNgrxComponent } from './ships-with-ngrx.component';

describe('ShipsWithNgrxComponent', () => {
  let component: ShipsWithNgrxComponent;
  let fixture: ComponentFixture<ShipsWithNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipsWithNgrxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShipsWithNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
