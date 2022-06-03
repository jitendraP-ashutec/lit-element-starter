/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css, PropertyValues} from 'lit';
import {customElement, property, query, queryAll} from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('def-tabs')
export class DefTabs extends LitElement {

  static override styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `;


  // override shadowRoot = this.attachShadow({mode: 'open'});

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = 'World';
  

  @query('def-tab', true)
  private selectedSlot!: HTMLSlotElement;

  /**
   * The number of times the button has been clicked.
   */
  @property({type: Number})
  count = 0;

  hostConnected(){
    console.log('render')

  }
  protected override async updated(changedProperties: PropertyValues) {
    console.log(changedProperties);
    console.log(this.selectedSlot);
    // if ((changedProperties.has('selected') || this.previous === -1) && this.hasValidSelected()) {
    //   this.updateSlots();
    //   this.previous = this.selected;
    // }
  }

  override connectedCallback() {
    super.connectedCallback();
    const defTab = this.renderRoot;
    console.log({defTab})
    // addEventListener('keydown', this._handleKeydown);
  }

  override firstUpdated() {
    //  console.log(this.renderRoot.querySelector('def-tab'));
    //  setTimeout(() => {
      // console.log();
      const defTab = this.renderRoot.querySelectorAll('def-tab');
      // const myLitEl = this.get;
      // console.log(myLitEl)
      // console.log(myLitEl?.tabTitle)
      // console.log(this.shadowRoot.querySelector('slot'))

      // const header = document.createElement('div');
      // const shadowRoot = header.attachShadow({mode: 'open'});
      // shadowRoot.innerHTML = '<h1>Hello Shadow DOM</h1>';

      // console.log();
      let divElement = this.renderRoot.querySelector('div');
      if(divElement){
        divElement.innerHTML = `
        <div id="tabs">
      
      </div>
      <div id="panels">
       
      </div>
        `;
        if(this.shadowRoot){
          const slot = this.shadowRoot.getRootNode({composed:false});
          console.log(slot)
        }
      
        console.log(this.renderRoot.querySelector('def-tab'))
      }
     
    //   const shadowRoot = this.attachShadow({mode: 'open'});
    // shadowRoot.innerHTML = `
    //     <style>#tabs { ... }</style> <!-- styles are scoped to fancy-tabs! -->
    //     <div id="tabs">...</div>
    //     <div id="panels">...</div>
    // `;
    // }

    //  }, 3000);


  }

  override render() {

    // const template = document.createElement("template");
    // this.shadowRoot.querySelector('.someClass');
  
    return html`
    <div></div>
      <slot></slot>
      <!-- <slot></slot> -->
    `;
    
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'def-tabs': DefTabs;
  }
}

