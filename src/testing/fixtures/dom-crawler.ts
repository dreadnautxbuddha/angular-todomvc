import { DebugElement, Type } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture } from '@angular/core/testing';

/**
 * Returns the first matching element within the given fixture, identified by the
 * given selector.
 *
 * @param {ComponentFixture<T>} fixture
 * @param {string} selector
 *
 * @returns {DebugElement}
 */
export const findByCss = <T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement => {
  return fixture.debugElement.query(By.css(selector));
}

/**
 * Returns all matching elements within the given fixture, identified by the given
 * selector.
 *
 * @param {ComponentFixture<T>} fixture
 * @param {string} selector
 *
 * @returns {DebugElement[]}
 */
export const findAllByCss = <T>(
  fixture: ComponentFixture<T>,
  selector: string
): DebugElement[] => {
  return fixture.debugElement.queryAll(By.css(selector));
}

/**
 * Returns the first matching element within the given fixture, identified by the
 * given directive type.
 *
 * @param {ComponentFixture<T>} fixture
 * @param {string} selector
 *
 * @returns {DebugElement}
 */
export const findByDirective = <T>(
  fixture: ComponentFixture<T>,
  type: Type<any>
): DebugElement => {
  return fixture.debugElement.query(By.directive(type));
}

/**
 * Returns all matching elements within the given fixture, identified by the given
 * directive type.
 *
 * @param {ComponentFixture<T>} fixture
 * @param {string} selector
 *
 * @returns {DebugElement[]}
 */
export const findAllByDirective = <T>(
  fixture: ComponentFixture<T>,
  type: Type<any>
): DebugElement[] => {
  return fixture.debugElement.queryAll(By.directive(type));
}

