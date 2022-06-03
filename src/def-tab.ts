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
@customElement('def-tab')
export class DefTab extends LitElement {
  static override styles = css`
  `;

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';

  /**
   * The number of times the button has been clicked.
   */
   @property({type: String})
   tabTitle: string = '';

   @property({type: Boolean})
   active: boolean = false;

  override render() {
    return  this.active ? html`
      ${this.tabTitle}
      <slot></slot>
    ` : html`<slot></slot>`;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'def-tab': DefTab;
  }
}
