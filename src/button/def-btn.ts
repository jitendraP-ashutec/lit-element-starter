/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './def-btn.css';

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

  static override styles = [styles];


  /**
   * The number of times the button has been clicked.
   */
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  class: string = '';


  @property({ type: Boolean })
  disabled: boolean = false;

  //  override ariaLabel: string | null;

  // get ariaLabelText(): any{
  //   console.log('d', this.ariaLabel)
  //   return this.ariaLabel;
  // }

  constructor() {
    super();
    // this.disabled = false;
  }

  override render() {
    return html`<button  type="button"
                          id=${this.id}
                          title=${this.label} 
                          class=${'def-btn def-btn-primary'}
                          value=${this.label} 
                          ?disabled=${this.disabled}
                          aria-label= ${this.ariaLabel}
                          tabindex=${this.tabIndex}
                          >
                          ${this.label}
               </button>
          
               `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'def-btn': DefBtn;
  }
}


