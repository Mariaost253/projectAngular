import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrtgrtghoppingListComponent } from './srtgrtghopping-list.component';

describe('SrtgrtghoppingListComponent', () => {
  let component: SrtgrtghoppingListComponent;
  let fixture: ComponentFixture<SrtgrtghoppingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrtgrtghoppingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrtgrtghoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
