import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectSearchListComponent } from './multiselect-search-list.component';

describe('MultiselectSearchListComponent', () => {
  let component: MultiselectSearchListComponent;
  let fixture: ComponentFixture<MultiselectSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiselectSearchListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiselectSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
