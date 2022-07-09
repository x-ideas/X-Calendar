import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-timeline-resources')
class XTimelineResources extends LitElement {
  render() {
    return html` <div></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-timeline-resources': XTimelineResources;
  }
}
