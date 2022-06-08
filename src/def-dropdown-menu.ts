/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';


/**
 * An example element.
 *
 * @fires def-dropdown-menu btn - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('def-dropdown-menu')
export class DefDropDownMenu extends LitElement {
  static override  styles = css``;


  override connectedCallback() {
    super.connectedCallback();
    if (this.shadowRoot) {
      const parentShadowRoot: any = this.shadowRoot.host;
      parentShadowRoot.classList.add('dropdown-menu');
      parentShadowRoot.labelledby = "dropdownMenuButton";
    }
  }


  override disconnectedCallback() {
    super.disconnectedCallback()
  }

  override render() {
    return html`
                  <slot></slot>
               `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'def-dropdown-menu': DefDropDownMenu;
  }
}


