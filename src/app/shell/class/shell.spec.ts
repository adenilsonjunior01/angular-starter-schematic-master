import { TestBed } from '@angular/core/testing';
import { Shell } from '@app/shell/class/shell';


describe('Shell', () => {
  let service: Shell;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Shell);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
