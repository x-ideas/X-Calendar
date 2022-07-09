import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('x-timeline-charts')
class XTimelineCharts extends LitElement {
  render() {
    return html` <div>ddd</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-timeline-charts': XTimelineCharts;
  }
}
