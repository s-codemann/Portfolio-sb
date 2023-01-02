import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactIconComponent } from './contact-icon.component';

describe('ContactIconComponent', () => {
  let component: ContactIconComponent;
  let fixture: ComponentFixture<ContactIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
