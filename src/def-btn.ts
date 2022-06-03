/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('def-btn')
export class DefBtn extends LitElement {
  static override styles = css`
   .def-btn-primary {
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
    }

    .def-btn-primary {
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
    }

    .def-btn {
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color .15s
    }
    .def-btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    .def-btn-primary.disabled, .def-btn-primary:disabled {
      color: #fff;
      background-color: #28a745;
      border-color: #28a745;
    }

    .def-btn.disabled, .def-btn:disabled {
      opacity: .65;
    }

  `;


  /**
   * The number of times the button has been clicked.
   */
   @property({type: String})
   label: string = '';

   @property({type: String})
   class: string = '';

   @property({type: Boolean})
   disabled: boolean = false;

  override render() {
    return  html`<button  type="button"
                          id=${this.id}
                          title=${this.label} 
                          class=${this.class}
                          value=${this.label} 
                          ?disabled=${this.disabled}>
                          ${this.label}
               </button>`;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'def-btn': DefBtn;
  }
}
