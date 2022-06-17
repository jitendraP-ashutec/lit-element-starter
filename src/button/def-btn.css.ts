import { css } from 'lit';
export const styles = css`
:host {
  display: var(--lit-button-display, inline-block);
  box-sizing: inherit;
}

.def-btn-primary {
  color: #fff;
  background-color: #0076CE;
  border-color: #0076CE;
}

.def-btn {
  height: 40px;
  border-radius: 2px;
  cursor: pointer;
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
  font-size: 14px;

}

.def-btn:not(:disabled):not(.disabled) {
  cursor: pointer;
}

.def-btn-primary:disabled {
  color: #888888;
  background-color: #EEEEEE;
  border-color: #EEEEEE;
}

.def-btn-primary:hover:enabled {
  color: #FFFFFF;
  background-color: #6BACDE;
  border-color: #6BACDE;
}

.def-btn-primary:active:enabled {
  color: #FFFFFF;
  background-color: #00447C;
  border-color: #00447C;
}


.def-btn-secondary {
  color: #0076CE;
  background-color: transparent;
}

.def-btn {
  height: 40px;
  border-radius: 2px;
  cursor: pointer;
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
  font-size: 14px;
}

.def-btn-secondary:disabled {
  color: #888888;
  background-color: transparent;
}

.def-btn-secondary:hover:enabled {
  color: #6BACDE;
  background-color: transparent;
}

.def-btn-secondary:active:enabled {
  color: #00447C;
  background-color: transparent
}
`;