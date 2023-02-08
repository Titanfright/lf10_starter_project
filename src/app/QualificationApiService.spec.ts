import { TestBed } from '@angular/core/testing';
import {QualificationApiService} from "./QualificationApiService";

describe('QualificationApiService', () => {
  let service: QualificationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QualificationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
