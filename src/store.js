import { observable, action, computed, toJS } from 'mobx';
import Base from './base.js';

export default class AppStore {
  @observable uploadedGpxs = [];
  @observable baseLayerTop = 0;
  @observable baseLayerBottom = 0;
  @observable baseLayerOpacity = 0;

  @observable mapExtentBounds = [[0, 0], [20, 20]];

  @observable uploading = false;

  constructor() {}

  @computed
  get gpxs() {
    return toJS(this.uploadedGpxs);
  }

  @computed
  get mapExtent() {
    return toJS(this.mapExtentBounds);
  }

  @action
  mapMoved(e) {
    console.log(e);
    if (window['map']) {
      console.log(window['map'].getBounds());
      this.mapExtentBounds = window['map'].getBounds();
    }
  }

  @action
  changeTopBaseMap(newBaseMapId) {
    const newBaseMap = basemaps.find(basemap => basemap.id === newBaseMapId);
    if (newBaseMap) {
      this.baseLayerTop = newBaseMap;
    }
  }

  @action
  changeBottomBaseMap(newBaseMapId) {
    const newBaseMap = basemaps.find(basemap => basemap.id === newBaseMapId);
    if (newBaseMap) {
      this.baseLayerBottom = newBaseMap;
    }
  }

  @action
  addNewGpx(gpx) {
    this.uploadedGpxs.push(gpx);
  }
}
