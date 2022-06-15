// import { WcTheme } from "./def-styles";
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
// @customElement('def-btn')
// Safari not supporting extending built in element
// https://github.com/lit/lit-element/issues/879

export class DefButton extends HTMLButtonElement {

constructor(){
  let self = super();
  // console.log('called', WcTheme.styles[0].cssText)
  console.log(self);
  
}

connectedCallback() {
  // this.attachShadow({mode: 'open'});
  
}

}

customElements.define('custom-button', DefButton, { extends: 'button' });

declare global {
  interface HTMLElementTagNameMap {
    'def-button': DefButton;
  }
}


