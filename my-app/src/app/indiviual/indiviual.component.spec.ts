import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiviualComponent } from './indiviual.component';

describe('IndiviualComponent', () => {
  let component: IndiviualComponent;
  let fixture: ComponentFixture<IndiviualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndiviualComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndiviualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
