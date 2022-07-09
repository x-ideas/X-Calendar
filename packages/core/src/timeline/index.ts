import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import './components/timeline-charts';
import './components/timeline-resources';

@customElement('x-timeline')
class XTimeline extends LitElement {
  render() {
    return html`
      <div class="x-timeline">
        <x-timeline-resources></x-timeline-resources>
        <x-timeline-charts></x-timeline-charts>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'x-timeline': XTimeline;
  }
}
