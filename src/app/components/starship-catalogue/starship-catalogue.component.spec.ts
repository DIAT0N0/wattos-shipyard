import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipCatalogueComponent } from './starship-catalogue.component';

describe('StarshipCatalogueComponent', () => {
  let component: StarshipCatalogueComponent;
  let fixture: ComponentFixture<StarshipCatalogueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipCatalogueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarshipCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
