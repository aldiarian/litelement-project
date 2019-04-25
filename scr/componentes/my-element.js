import { LitElement, html, css} from 'lit-element';

class MyElement extends LitElement {
    // definimos estilos
    static get styles(){
        return css`
        :host {
            display: inline-block;
            padding:1rem;
            background-color: var( --my-bg-color );
            color: var( --my-color );
            border-radius: 12px;
        }
        `;
    }
    // definimos variables
    static get properties() {
        return { 
            myString: { type: String },
            myArray: { type: Array },
            myBool: { type: Boolean }
        };
    }


    // inicializamos el constructor 
    constructor() {
        super();
        this.myString = 'Hello World';
        this.myArray = ['an','array','of','test','data'];
        this.myBool = true;
      }

    // ejecutamos el metodo render de litelemt que nos devuelve el html
    render(){
        return html`
        <div class="caja caja__uno">
            <p>Componente My Element: ${this.myString}</p>
        </div>
        <div class="caja caja__dos">
            <ul>
                ${ this.myArray.map (i => html`<li>${i}</li>`) }
            </ul>
        </div>
        <div class="caja caja__tres">
            ${this.myBool? html`<p>Renderiza este HTML si myBool es true</p>`: html`<p>Renderiza este HTML si myBool es false</p>`}
        </div>
        `;
    }
}
customElements.define('my-element', MyElement);