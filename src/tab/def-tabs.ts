/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, PropertyValueMap } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './def-tabs.css';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
//  in lit dev web have to manually add all property and events
// https://github.com/lit/lit/discussions/2685
@customElement('def-tabs')
export class DefTabs extends LitElement {


  @property({type: Number}) activeIndex = 0;

  static override styles = [styles];

  constructor() {
    super();
  }

  override render() {
    return html`
    <div>
        <slot name="def-tab"></slot>
    </div>
            
    <div>
    <slot name="def-tab-container"> </slot>
  </div>
               `;
  }

  protected override async updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    await this.updateComplete;
    console.log(this.activeIndex);

  }
}

declare global {
  interface HTMLElementTagNameMap {
    'def-tabs': DefTabs;
  }
}


