import { tracked } from '@glimmer/tracking';
import { set } from '@ember/object';
export default class etape1controller extends Controller {
  dispoItems = [];
  includedItems = [];
  @tracked dispoItems = [];
  @tracked incudedItems = [];

  changeDispo(elements) {
    set('dispoItems', elements);
  }

  changeIncluded(elements) {
    this.includedItems = elements;
  }
}
