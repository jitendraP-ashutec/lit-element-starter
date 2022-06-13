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
//  in lit dev web have to manually add all property and events
// https://github.com/lit/lit/discussions/2685
@customElement('def-btn')
export class DefBtn extends LitElement {
  static override styles = css`
   .def-btn-primary {
      color: #fff;
      background-color: #0076CE;
      border-color: #0076CE;
    }

    .def-btn {
      height:40px;
      border-radius: 2px;
      cursor:pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: 0 15px;
      font-size:14px;

    }
    .def-btn:not(:disabled):not(.disabled) {
        cursor: pointer;
    }

    .def-btn-primary:disabled {
      color: #888888;
      background-color: #EEEEEE;
      border-color: #EEEEEE;
    }

    .def-btn-primary:hover:enabled{
      color: #FFFFFF;
      background-color: #6BACDE;
      border-color: #6BACDE;
    } 

    .def-btn-primary:active:enabled{
      color: #FFFFFF;
      background-color: #00447C;
      border-color: #00447C;
    }


    .def-btn-secondary {
      color: #0076CE;
      background-color: transparent;
    }
    
    .def-btn {
      height:40px;
      border-radius: 2px;
      cursor:pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      border: 1px solid transparent;
      padding: 0 15px;
      font-size:14px;

    }


    .def-btn-secondary:disabled {
      color: #888888;
      background-color: transparent;
    }

    .def-btn-secondary:hover:enabled{
      color: #6BACDE;
      background-color: transparent;
    } 

    .def-btn-secondary:active:enabled{
      color: #00447C;
      background-color: transparent
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

  //  override ariaLabel: string | null;

  // get ariaLabelText(): any{
  //   console.log('d', this.ariaLabel)
  //   return this.ariaLabel;
  // }


  override render() {
    return  html`<button  type="button"
                          id=${this.id}
                          title=${this.label} 
                          class=${this.class}
                          value=${this.label} 
                          ?disabled=${this.disabled}
                          aria-label= ${this.ariaLabel}
                          tabindex=${this.tabIndex}
                          >
                          ${this.label}
               </button>`;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'def-btn': DefBtn;
  }
}


