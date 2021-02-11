import { computed } from '@ember/object';
export default class Services {
  services = [];
  test=0;

  constructor(services, promo) {
    this.services = services;
    this.promos = promo;
  }

  @computed('services.@each.active')

  get countActive(){
    return this.services.filterBy('active',true).length;

  }


  get sumActive(){
    var total = 0;
    this.services.filterBy('active',true).forEach(function(service) {
      total += service.price;
    });
    return total;
  }

  get coefPromo(){
    for (const [key, value] of Object.entries(this.promos)) {
      //console.log(`${key}: ${value}`);
      console.log(key);
      if (key == this.enterValue){
        return value;
      }
    }
    return 0;
  }

  get remise(){
    return this.sumActive * this.coefPromo;
  }

  get totalAvecRemise() {
    return this.sumActive - this.remise;
  }
}
