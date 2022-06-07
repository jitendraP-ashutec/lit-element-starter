/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
  @property({ type: String })
  label: string = '';

  @property({ type: String })
  class: string = '';


  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String })
  dropdownPosition: string = 'bottom-left';


  private _handleClick(e: any) {
    let slt: any = this.assignedNodes;
    if (this.shadowRoot) {
      const buttons = this.shadowRoot.querySelector('button');
      if (buttons) {
        const domRect: DOMRect = buttons.getBoundingClientRect();
        if (slt.length > 0) {
          slt.forEach((element: any) => {
            if (element?.classList?.contains('dropdown-menu')) {
              if (element.classList.contains('show')) {
                element.classList.remove('show')
              } else {
                // if(this.)
                const dropdownMenuItem =  element.getBoundingClientRect();
                const point:any =  this.getPositionPoint(dropdownMenuItem);

                // const positionX = domRect.x + domRect.width;
                // const positionY = domRect.y + domRect.height;
                element.classList.add('show')
                element.style.position = 'absolute';
                element.style.inset = '0px auto auto 0px';
                element.style.transform = `translateX(${point.positionX}px) translateY(${point.positionY}px)`;
                //         position: absolute;
                // inset: 0px auto auto 0px;
                // transform: translateX(0px) translateY(2px);
              }
            }
          });
        }
      }
    }
  }

  getPositionPoint(dropdownMenuItem:DOMRect) {
    console.log(this.dropdownPosition)

    if (this.shadowRoot) {
      const button = this.shadowRoot.querySelector('button');
      console.log(document.documentElement.scrollTop);
      const scrollX = document.documentElement.scrollTop;
      // const dropdownMenu = this.shadowRoot.querySelector('.dropdown-menu');
      // console.log(dropdownMenu);
      if (button) {
        
        const domRect: DOMRect = button.getBoundingClientRect();
        console.log(domRect);
        // console.log(dropdownMenuItem.width -  domRect.right)
// console.log({domRect})
        switch (this.dropdownPosition) {
          case 'bottom-left':
          return {
              positionX: domRect.x,
              positionY: (scrollX + domRect.y + domRect.height)
          }
            break;
          case 'bottom-right':
             let positionX = domRect.right - dropdownMenuItem.width;
             console.log(positionX);
             if(positionX <= 0){
              positionX = domRect.x;
             }
            return {
              positionX: (positionX),
              positionY: (scrollX + domRect.y + domRect.height)
          }
            break;

          case 'top-left':
            return {
              positionX: domRect.x ,
              positionY: (scrollX + domRect.y - dropdownMenuItem.height)
            }

            break;

          case 'top-right':
            let positionTopX = domRect.right - dropdownMenuItem.width;
            console.log(positionTopX);
            if(positionTopX <= 0){
              positionTopX = domRect.x;
            }
           return {
             positionX: (positionTopX),
             positionY: (scrollX + domRect.y - dropdownMenuItem.height)
         }
            return {
              positionX: (positionX),
              positionY: (scrollX + domRect.y + domRect.height)
          }
            break;

          case 'left-bottom':

            break;

          case 'left-top':

            break;

          case 'right-top':
            return {
              positionX: domRect.x + domRect.width,
              positionY: domRect.y
            }
            break;

          case 'right-bottom':
            return {
              positionX: domRect.x + domRect.width,
              positionY: domRect.y
            }

            break;



          default:
            break;
        }

      }
    }
    // dropdownPosition
  }
  get assignedNodes() {
    if (this.shadowRoot) {

      const slot = this.shadowRoot.querySelector('slot');

      if (slot) {
        let slt: any = slot.assignedNodes();
        console.log(slt);
        return slt;
      }
    }
    return [];
  }

  _closeButton = () => {
    let slt: any = this.assignedNodes;
    if (slt && slt.length > 0) {
      slt.forEach((element: any) => {
        if (element?.classList?.contains('dropdown-menu')) {
          element.classList.remove('show')
        }
      });
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', (event) => {
      if (!event.composedPath().includes(this)) {
        this._closeButton();
      }
    });

    const dropDownItems = document.querySelectorAll(".dropdown-item");
    for (let item of dropDownItems) {
      item.addEventListener("click", this._closeButton);
    }
  }


  override disconnectedCallback() {
    super.disconnectedCallback()
    const dropDownItems = document.querySelectorAll(".dropdown-item");
    for (let item of dropDownItems) {
      item.removeEventListener("click", this._closeButton);
    }
  }

  override render() {
    return html`
                  <div>
                    <button type="button"
                          @click="${this._handleClick}"
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


