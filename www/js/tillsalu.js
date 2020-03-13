class Tillsalu extends Base {

  async mount() {
    this.currencyFormatter = new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' });
    this.anvandarensVal = {
      minKvm: 10,
      maxKvm: 300,
      minPrice: 100000,
      maxPrice: 100000000,
      chosenDistrict: 'Alla'
    };

    this.districtButtons = [
      'Alla',
      'Södermalm',
      'Östermalm',
      'Vasastan'

    ];

    this.search();
  }

  async search() {
    console.log("GÖR NÅGOT UTIFRÅN VALET AV DISTRICT OCKSÅ + GE MÖJLIGHET TILL INMATNING KVM MIN MAX OCH PRIS MIN MAX")
    this.searchResult = await sql(/*sql*/`
      SELECT * 
      FROM Residence
      /*JOIN Pics
      ON Residence.residenceId = Pics.PicId*/
      WHERE Kvm >= $minKvm 
      AND Kvm <= $maxKvm
      AND price >= $minPrice
      AND price <= $maxPrice
      AND (area = $chosenDistrict OR "Alla" = $chosenDistrict)
    `
      , this.anvandarensVal);

    this.render();
    this.fixInitialRenderBug();
  }

  chooseDistrict(e) {
    this.anvandarensVal.chosenDistrict = e.target.innerText;
    this.search();
  }

  fangaUpp() {

  }

  changeMinPrice(e) {
    let av = this.anvandarensVal;
    av.minPrice = e.target.value;
    if (av.minPrice > av.maxPrice) {
      av.maxPrice = av.minPrice;
    }
    this.render();
  }

  changeMinKvm(e) {
    let av = this.anvandarensVal;
    av.minKvm = e.target.value;
    if (av.minKvm > av.maxKvm) {
      av.maxKvm = av.minKvm;
    }
    this.render();
  }

  changeMaxPrice(e) {
    let av = this.anvandarensVal;
    av.maxPrice = e.target.value;
    if (av.maxPrice < av.minPrice) {
      av.minPrice = av.maxPrice;
    }
    this.render();
  }

  changeMaxKvm(e) {
    let av = this.anvandarensVal;
    av.maxKvm = e.target.value;
    if (av.maxKvm < av.minKvm) {
      av.minKvm = av.maxKvm;
    }
    this.render();

  }

  fixInitialRenderBug() {
    let rangeSliders = document.querySelectorAll('input[type="range"]');
    for (let rangeSlider of rangeSliders) {
      // For some reason .value differs from getAttribute('value');
      // with the first one controlling what is shown on the screen
      // and the second one having correct values - this hack fixes that
      rangeSlider.value = rangeSlider.getAttribute('value');
    }
  }

  render() {
    return /*html*/`
    <div route="/till-salu">
    <h1 class="mb-3"> Här finner du alla våra bostäder som är till salu </h1>
    <form>
      ${this.districtButtons.map(label => /*html*/`
      <button click="chooseDistrict" type="button" class="btn ${this.anvandarensVal.chosenDistrict === label ?
        'btn-primary' : 'btn-secondary'} btn-lg">${label}</button>
      `)}

      <div class="row my-3">
        <div class="col-6">
          LÄGSTA PRIS ${this.currencyFormatter.format(this.anvandarensVal.minPrice)}
          <input type="range" class="form-control-range" id="formControlRange" input="changeMinPrice"
            value="${this.anvandarensVal.minPrice}" min="100000" max="100000000" step="50000">
        </div>

        <div class="col-6">
          HÖGSTA PRIS ${this.currencyFormatter.format(this.anvandarensVal.maxPrice)}
          <input type="range" class="form-control-range" id="formControlRange" input="changeMaxPrice"
            value="${this.anvandarensVal.maxPrice}" min="100000" max="100000000" step="50000">
        </div>
      </div>

      <div class="row my-3">
        <div class="col-6">
          LÄGSTA KVM ${this.currencyFormatter.format(this.anvandarensVal.minKvm)}
          <input type="range" class="form-control-range" id="formControlRange" input="changeMinKvm"
            value="${this.anvandarensVal.minKvm}" min="10" max="300" step="10">
        </div>
        <div class="col-6">
          HÖGSTA KVM ${this.currencyFormatter.format(this.anvandarensVal.maxKvm)}
          <input type="range" class="form-control-range" id="formControlRange" input="changeMaxKvm"
            value="${this.anvandarensVal.maxKvm}" min="10" max="300" step="10">
        </div>
      </div>
    </form>

    <div class="row">

      ${this.searchResult && this.searchResult.map(bostad => /*html*/`
      <div class="col-6 p-1">
        <div class="card">
          ${bostad.area} Pris: ${bostad.price}kr <br> ${bostad.rooms} Rum
          men kök lägnehet på ${bostad.Kvm} Kvm <br>Avgift på ${bostad.rent} kr<br>${bostad.residenceId}
        </div>
      </div>
      `)}

      </div>
    </div>
      ` }

}