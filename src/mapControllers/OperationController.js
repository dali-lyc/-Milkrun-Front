export default class InformationControl {
  onAdd(map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl-operation';
    this._container.innerHTML += "<div class='title' style='font-size: 14px; font-weight: bold; margin-bottom: 10px;'></div>"
    this._container.innerHTML += `
      <div style="margin-left: 10px; ">
        <select id="line_selector">
          <option value="0">-- Select Line --</option>
          <option value="1">Line 1</option>
          <option value="2">Line 2</option>
        </select>
      </div>
    `
    return this._container;
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}