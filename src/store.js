import { observable, action, computed, toJS } from 'mobx';
import Base from './base.js';

export default class AppStore {
  @observable mapExtentBounds = [[0, 0], [20, 20]];

  @observable uploading = false;

  constructor() {}

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
}
