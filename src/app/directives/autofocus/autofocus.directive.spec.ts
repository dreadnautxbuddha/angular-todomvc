import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { findByCss } from 'testing/fixtures/dom-crawler';
import { AutofocusDirective } from './autofocus.directive';

@Component({
  template: `<input [autofocus] type="text"/>`
})
class TestComponent { }

describe('AutofocusDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [AutofocusDirective, TestComponent]
    }).createComponent(TestComponent);

    fixture.detectChanges();
  });

  it('should focus on the element', () => {
    let input = findByCss(fixture, 'input');

    let focusedInput = findByCss(fixture, ':focus');

    expect(input.nativeElement).toBe(focusedInput.nativeElement);
  });
});
