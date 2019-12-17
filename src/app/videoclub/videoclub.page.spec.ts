import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VideoclubPage } from './videoclub.page';

describe('VideoclubPage', () => {
  let component: VideoclubPage;
  let fixture: ComponentFixture<VideoclubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoclubPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoclubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
