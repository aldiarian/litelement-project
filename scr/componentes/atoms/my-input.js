import { LitElement, html, css } from 'lit-element';

class MyInput extends LitElement {
    static get styles(){
        return css`
        :host {
        }
        input{
            padding: var( --my-input-padding, 1rem );
            border: var( --my-input-borderWidth ) var( --my-input-borderType ) var( --my-input-borderColor );
            border-radius: var( --my-input-borderRadius );
            background-color: var( --my-input-backColor, white );
        }
        `;
    }
    static get properties() {
        return {
            placeholder: { type: String }
        };
    }
    render() {
        return html`
        <input id="text" type="text" placeholder="${this.placeholder}">
        `;
    }
}
customElements.define('my-input', MyInput);