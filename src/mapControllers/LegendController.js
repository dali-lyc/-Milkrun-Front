import global from '../utils/global'

export default class LegendControl {
  onAdd(map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl-legend';
    this._container.innerHTML += "<div class='title' style='font-size: 14px; font-weight: bold; margin-bottom: 10px;'>Legend</div>"
    const layers = global.styleJson.layers
    for (let layer of layers) {
      console.log(layer)
      const paint = layer.paint
      switch (layer.type) {
        case 'background': {
          const color = paint["background-color"]
          const dom = `
            <div class="legend-item" >
              <div class="icon-block">
                <div class="fill" style="background-color: ${color}"/></div>
              </div>
              <span>Background</span>
            </div>
          `
          this._container.innerHTML += dom
          break
        }
        case 'fill': {
          const color = paint["fill-color"]
          const dom = `
            <div class="legend-item">
              <div class="icon-block">
                <div class="fill" style="background-color: ${color}"/></div>
              </div>
              <span>${layer.id}</span>
            </div>
          `
          this._container.innerHTML += dom
          break
        }
        case 'line': {
          const color = paint["line-color"]
          const dom = `
            <div class="legend-item">
              <div class="icon-block">
                <div class="line" style="background-color: ${color}"/></div>
              </div>
              <span>${layer.id}</span>
            </div>
          `
          this._container.innerHTML += dom
          break
        }
        case 'circle': {
          const color = paint["circle-color"]
          const dom = `
            <div class="legend-item">
              <div class="icon-block">
                <div class="point" style="background-color: ${color}"/></div>
              </div>
              <span>${layer.id}</span>
            </div>
          `
          this._container.innerHTML += dom
          break
        }
      }
    }

    return this._container;
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}