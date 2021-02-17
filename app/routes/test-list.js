export default class contacts {
  datas;

  constructor(datas) {
    this.datas = datas;
  }
  get contacts() {
    return this.datas.filterBy('isDeleted', false);
  }
}
