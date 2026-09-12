import { TestBed } from '@angular/core/testing';

import { TodoFunService } from './todo-fun.service';

describe('TodoFunService', () => {
  let service: TodoFunService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoFunService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
