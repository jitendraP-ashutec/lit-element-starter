/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';
import { DefDropDownMenu } from './def-dropdown-menu';

export const DEFAULT_MARGIN = 3;

/**
 * An example element.
 *
 * @fires dropdown btn - Indicates when the count changes
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

  @property({ type: String })
  label: string = '';

  @property({ type: String })
  class: string = '';

  @property({ type: Boolean })
  disabled: boolean = false;

  @property({ type: String,  })
  dropdownPosition: string = 'bottom-left';

  @property({ type: Boolean })
  defDropdownTrigger: boolean;

  @queryAssignedElements({slot: '', flatten: true})
  protected tabsPanel!: any;

  dropdownButton: any;



  @state()
  private _arialExpanded: boolean = false;


  private _handleClick() {
    let slt: any = this.assignedNodes;
    if (this.shadowRoot) {
      const buttons = this.dropdownButton;
      if (buttons) {
        let parentElement: DefDropDownMenu | undefined;
        if (slt.length > 0) {
          slt.forEach((element: any) => {
            if (element?.tagName === 'DEF-DROPDOWN-MENU') {
              // const menuItem = element.querySelector('.dropdown-menu');
              if (element.classList.contains('show')) {
                element.classList.remove('show');
                this._arialExpanded = false;
              } else {
                if (this.defDropdownTrigger) {
                  const menuElements = Array.from(document.querySelectorAll('def-dropdown-menu'));
                  parentElement = menuElements.filter(ele => {
                    return ele.classList.contains('show')
                  }).pop();
                }


                this._arialExpanded = true;
                element.classList.add('show')
                element.style.position = 'absolute';
                // element.style.inset = '0px auto auto 0px';
                const dropdownMenuItem = element.getBoundingClientRect();
                const point: any = this._getPositionPoint(dropdownMenuItem, this.defDropdownTrigger, parentElement);
                // element.style.transform = `translateX(${point.positionX}px) translateY(${point.positionY}px)`;
                element.style.left = `${point.positionX}px`;
                element.style.top = `${point.positionY}px`;
              }
            }
          });
        }
      }
    }
  }

  private _getPositionPoint(dropdownMenuItem: DOMRect, isSubMenu?: boolean, parentElement?: DefDropDownMenu) {

    if (this.shadowRoot) {
      const button = this.dropdownButton;


      if (isSubMenu && parentElement) {
        return this._setSubMenuPosition(dropdownMenuItem, parentElement, button);
      }
      if (button) {
        return this._setMenuPosition(dropdownMenuItem, button)
      }
      return {
        positionX: -1,
        positionY: -1
      };
    }
    return {
      positionX: -1,
      positionY: -1
    };
  }


  private _setMenuPosition(dropdownMenuItem: DOMRect, button?: HTMLButtonElement | null) {
    if (button) {
      const domRect: DOMRect = button.getBoundingClientRect();
      const scrollX = document.documentElement.scrollTop;
      const defaultPosition = {
        positionX: domRect.x,
        positionY: (scrollX + domRect.y + domRect.height)
      };
      switch (this.dropdownPosition) {
        case 'bottom-left':
          return defaultPosition;
          break;
        case 'bottom-right':
          let positionX = (domRect.right - dropdownMenuItem.width)
          if (positionX <= 0) {
            positionX = domRect.x;
          }
          return {
            positionX: (positionX),
            positionY: (scrollX + domRect.y + domRect.height)
          }
          break;

        case 'top-left':
          return {
            positionX: domRect.x,
            positionY: (scrollX + domRect.y - dropdownMenuItem.height - DEFAULT_MARGIN)
          }
          break;
        case 'top-right':
          let positionTopX = domRect.right - dropdownMenuItem.width;
          if (positionTopX <= 0) {
            positionTopX = domRect.x;
          }
          return {
            positionX: (positionTopX),
            positionY: (scrollX + domRect.y - dropdownMenuItem.height - DEFAULT_MARGIN)
          }
          break;
        case 'left-bottom':
          return {
            positionX: domRect.x - dropdownMenuItem.width - DEFAULT_MARGIN,
            positionY: (scrollX + domRect.y)
          }
          break;
        case 'left-top':
          return {
            positionX: (domRect.x - dropdownMenuItem.width - DEFAULT_MARGIN),
            positionY: (scrollX + domRect.y - dropdownMenuItem.height + domRect.height)
          }
          break;

        case 'right-top':
          return {
            positionX: domRect.x + domRect.width + DEFAULT_MARGIN,
            positionY: (scrollX + domRect.y)
          }
          break;

        case 'right-bottom':
          return {
            positionX: (domRect.x + domRect.width + DEFAULT_MARGIN),
            positionY: (scrollX + domRect.y - dropdownMenuItem.height + domRect.height)
          }
          break;

        default:
          return defaultPosition
          break;
      }
    }
    return {
      positionX: -1,
      positionY: -1
    }
  }

  private _setSubMenuPosition(dropdownMenuItem: DOMRect, parentElement: DefDropDownMenu, button?: HTMLButtonElement | null) {
    const remainMargin = (parentElement.getBoundingClientRect().width - dropdownMenuItem.width);
    const defaultPosition = {
      positionX: parentElement.getBoundingClientRect().width,
      positionY: (button?.offsetTop)
    };

    switch (this.dropdownPosition) {
      case 'bottom-right':
        return {
          positionX: parentElement.getBoundingClientRect().width,
          positionY: (button!.offsetTop + button!.getBoundingClientRect()?.height)
        };;
        break;

      case 'top-left':
        return {
          positionX: -(parentElement.getBoundingClientRect().width - (remainMargin - DEFAULT_MARGIN)),
          positionY: button?.offsetTop
        };
        break;

      case 'top-right':
        return defaultPosition;
        break;

      case 'bottom-left':
      default:
        return {
          positionX: -(parentElement.getBoundingClientRect().width - (remainMargin - DEFAULT_MARGIN)),
          positionY: (button!.offsetTop + button!.getBoundingClientRect()?.height)
        };

        break;

    }
  }
  get assignedNodes() {
    if (this.shadowRoot) {
      const slot = this.shadowRoot.querySelector('slot');
      if (slot) {
        let slt: any = slot.assignedNodes();
        return slt;
      }
    }
    return [];
  }

  _closeButton = () => {
    let nodes: any = this.assignedNodes;
    if (this.shadowRoot) {
      const buttons = this.dropdownButton;
      if (buttons) {
        if (nodes.length > 0) {
          if (nodes && nodes.length > 0) {
            nodes.forEach((element: any) => {
              if (element?.tagName === 'DEF-DROPDOWN-MENU') {
                if (element) {
                  element.classList.remove('show');
                  this._arialExpanded = false;
                }
              }
            });
          }
        }
      }
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

  override firstUpdated() {
      const slot = this.shadowRoot!.querySelector('slot');
      let innerElements = slot!.assignedElements({flatten: true});
      innerElements.forEach(element => {
            if(element.hasAttribute('defdropdowntrigger')){
              this.defDropdownTrigger = true;
              element.addEventListener('click' , () =>{
                this._handleClick()
              });
              this.dropdownButton = element;
            }
      });
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
                  <slot></slot>
               
               `;
  }


}

declare global {
  interface HTMLElementTagNameMap {
    'def-dropdown-btn': DefDropDownBtn;
  }
}


