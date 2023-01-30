import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillForFormsComponent } from './skill-for-forms.component';

describe('SkillForFormsComponent', () => {
  let component: SkillForFormsComponent;
  let fixture: ComponentFixture<SkillForFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillForFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillForFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
