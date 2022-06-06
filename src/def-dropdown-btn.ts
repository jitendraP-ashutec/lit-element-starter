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
@customElement('def-dropdown-btn')
export class DefDropDownBtn extends LitElement {
  static override  styles = css`
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
    .def-btn::after{
      display: inline-block;
      width: 0;
      height: 0;
      margin-left: 0.255em;
      vertical-align: 0.255em;
      content: "";
      border-top: 0.3em solid;
      border-right: 0.3em solid transparent;
      border-bottom: 0;
      border-left: 0.3em solid transparent;
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

    .show{
      display:contents;
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

   _handleClick(e:Event) {
    // console.log(e);
    if(this.shadowRoot){
      const slot = this.shadowRoot.querySelector('slot');
      if(slot){
        let slt:any = slot.assignedNodes();
        if (slt.length===0){
          console.log('No content is available')
        } else {
          slt.forEach((element:any) => {
              console.log(element.className)
              if(element?.classList?.contains('dropdown-menu')){
                if(element.classList.contains('show')) {
                  element.classList.remove('show')
                } else{
                  element.classList.add('show')
                }
              }    
          });
        }
      } else {
        console.log('in else')
      }
    }
  
  }

  override connectedCallback() {
    super.connectedCallback();
    window.addEventListener('click', (e:any) => {   
      console.log(e);
      console.log(this.shadowRoot)
      if(this.shadowRoot)
      console.log(this.shadowRoot.contains(e.target))
      // if (document.getElementById('clickbox').contains(e.target)){
      //   // Clicked in box
      // } else{
      //   // Clicked outside the box
      // }
    });
  }

  override render() {
    return  html`
                  <div @click="${this._handleClick}">
                    <button  type="button"
                          id=${this.id}
                          title=${this.label} 
                          class=${this.class}
                          value=${this.label} 
                          ?disabled=${this.disabled}
                          aria-label= ${this.ariaLabel}
                          tabindex=${this.tabIndex}
                          >
                          ${this.label}
                     </button>
                  </div>
                <div>
                 <slot></slot>
                </div>

               
               `;
  }
  

}

declare global {
  interface HTMLElementTagNameMap {
    'def-dropdown-btn': DefDropDownBtn;
  }
}


