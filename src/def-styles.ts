import { css } from 'lit';
import { LitElement } from 'lit-element';

export class WcTheme extends LitElement {
  static override styles = [
    css`
          .corp-button {
            background-color: #e7e7e7;
            color: black;
            border: none;
            border-radius: 4px;
            padding: 15px 32px;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
          }
          .corp-button:hover {
            background-color: #aaaaaa;
          }
        `
  ];
}