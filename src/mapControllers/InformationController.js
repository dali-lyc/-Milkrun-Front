export default class InformationControl {
  onAdd(map) {
    this._map = map;
    this._container = document.createElement('div');
    this._container.className = 'mapboxgl-ctrl-info';
    this._container.innerHTML += "<div class='title' style='font-size: 14px; font-weight: bold; margin-bottom: 10px;'>Live Info</div>"

    return this._container;
  }

  onRemove() {
    this._container.parentNode.removeChild(this._container);
    this._map = undefined;
  }
}