export class AppElement extends HTMLElement {
  constructor() {
    super();

    const root = this.attachShadow({ mode: 'open' });

    root.innerHTML = `
      <vaadin-checkbox></vaadin-checkbox>
      <vaadin-checkbox-group label="Checkbox group">
        <vaadin-checkbox label="1" value="one"></vaadin-checkbox>
        <vaadin-checkbox label="2" value="two"></vaadin-checkbox>
      </vaadin-checkbox-group>
    `;
  }

  async connectedCallback() {
    await Promise.all([
      import('@vaadin/checkbox'), // Comment this import and then app works
      import('@vaadin/checkbox-group'),
    ]);
  }
}

customElements.define('app-element', AppElement);

declare global {
  interface HTMLElementTagNameMap {
    'app-element': AppElement;
  }
}
