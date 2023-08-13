import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewShopComponent } from './create-new-shop.component';

describe('CreateNewShopComponent', () => {
  let component: CreateNewShopComponent;
  let fixture: ComponentFixture<CreateNewShopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewShopComponent]
    });
    fixture = TestBed.createComponent(CreateNewShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
