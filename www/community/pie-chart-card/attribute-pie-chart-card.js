/*
attribute: energy_percent_by_applicance
chart_type: doughnut
display_legend: false
entity: sensor.fpl_xxxxxxxxxx
legend_position: right
title: Power Distribution
type: 'custom:attribute-pie-chart-card'
*/

import "https://unpkg.com/chart.js@v2.9.3/dist/Chart.bundle.min.js?module";
import "https://cdn.jsdelivr.net/gh/emn178/chartjs-plugin-labels/src/chartjs-plugin-labels.js";
import "https://cdn.jsdelivr.net/npm/chartjs-plugin-colorschemes"

class AttributePieChartCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open'
    });
  }

  setConfig(config) {
    if (!config.entity) {
      throw new Error('You need to define an entity');
    }
    if (!config.attribute) {
      throw new Error('You need to define an attribute');
    }
    const root = this.shadowRoot;
    if (root.lastChild) root.removeChild(root.lastChild);

    const card = document.createElement('ha-card');
    const content = document.createElement('div');
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const style = document.createElement('style');

    card.id = 'ha-card';
    content.id = 'content';
    canvas.id = 'cnv';
    content.style.minHeight = '240px';
    canvas.height = 240;
    card.appendChild(content);
    card.appendChild(style);
    content.appendChild(canvas);
    root.appendChild(card);
    this._config = config;
  }

  set hass(hass) {

    // dont update workaround. not pretty
    if (this.ran) {
      return;
    }
    this.ran = true;

    const root = this.shadowRoot;
    const config = this._config;
    const card = root.getElementById("ha-card");
    const content = root.getElementById("content");
    const canvas = root.getElementById("cnv");
    const ctx = canvas.getContext('2d');

    const entity_data = hass.states[config.entity]['attributes'][config.attribute];
    console.log(entity_data);
    const dataNames = Object.keys(entity_data);
    const dataValues = Object.values(entity_data);

    var display_legend = true;
    if (config.display_legend !== undefined) {
      display_legend = config.display_legend;
    }

    card.header = config.title ? config.title : 'Pie Chart';
    this.doughnutChart = new Chart(ctx, {
      type: config.chart_type,
      data: {
        datasets: [{
          data: dataValues
        }],
        labels: dataNames
      },
      options: {
        tooltips: {
             enabled: false
        },
        responsive: true,
        maintainAspectRatio: false, // https://stackoverflow.com/a/53233861,
        animation: false,
        legend: {
          position: config.legend_position,
          display: display_legend
        },
        plugins: {
          labels: [{
              render: 'label',
              position: 'outside',
              fontColor: '#000',
              textMargin: 6
            },
            {
              render: 'percentage',
              fontColor: '#000',
            }
          ]
        },
      }
    });

  }

  getCardSize() {
    return 1;
  }
}
customElements.define('attribute-pie-chart-card', AttributePieChartCard);
