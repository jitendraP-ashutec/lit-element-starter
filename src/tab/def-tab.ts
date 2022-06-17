/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './def-tab.css';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
//  in lit dev web have to manually add all property and events
// https://github.com/lit/lit/discussions/2685
@customElement('def-tab')
export class DefTab extends LitElement {

  static override styles = [styles];

  @property({ type: String })
  name: string = '';

  constructor() {
    super();
  }

  override render() {
    return html`
              <button> ${this.name}</button>
               `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'def-tab': DefTab;
  }
}


