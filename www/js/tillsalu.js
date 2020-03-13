class Tillsalu extends Base {

  async mount() {
    this.currencyFormatter = new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' });
    this.anvandarensVal = {
      minKvm: 10,
      maxKvm: 300,
      minPrice: 100000,
      maxPrice: 300000000,
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
    this.searchResult = await sql(/*sql*/`
     SELECT Residence.*, Pics.url AS picUrl
      FROM Residence, Pics 
      WHERE Residence.residenceId = Pics.residenceId
      /*JOIN Pics
      ON Residence.residenceId = Pics.PicId*/
      AND Kvm >= $minKvm 
      AND Kvm <= $maxKvm
      AND price >= $minPrice
      AND price <= $maxPrice
       AND (area = $chosenDistrict OR "Alla" = $chosenDistrict)
      GROUP BY Residence.residenceId
    `, this.anvandarensVal);
    console.log("this.anvandarensVal", this.anvandarensVal)
    console.log("this.searchResult", this.searchResult)
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
    av.minPrice = +e.target.value;
    if (av.minPrice > av.maxPrice) {
      av.maxPrice = av.minPrice;
    }
    this.search();
  }

  changeMaxPrice(e) {
    let av = this.anvandarensVal;
    av.maxPrice = +e.target.value;
    if (av.maxPrice < av.minPrice) {
      av.minPrice = av.maxPrice;
    }
    this.search();
  }

  changeMinKvm(e) {
    let av = this.anvandarensVal;
    av.minKvm = +e.target.value;
    if (av.minKvm > av.maxKvm) {
      av.maxKvm = av.minKvm;

    }
    this.search();
  }

  changeMaxKvm(e) {
    let av = this.anvandarensVal;
    av.maxKvm = +e.target.value;
    if (av.maxKvm < av.minKvm) {
      av.minKvm = av.maxKvm;
    }
    this.search();

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
          LÄGSTA BOYTA (kvm) ${this.anvandarensVal.minKvm}
          <input type="range" class="form-control-range" id="formControlRange" input="changeMinKvm"
            value="${this.anvandarensVal.minKvm}" min="10" max="300" step="10">
        </div>
        <div class="col-6">
          STÖRSTA BOYTA (kvm) ${this.anvandarensVal.maxKvm}
          <input type="range" class="form-control-range" id="formControlRange" input="changeMaxKvm"
            value="${this.anvandarensVal.maxKvm}" min="10" max="300" step="10">
        </div>
      </div>
    </form>

  
      ${this.searchResult && this.searchResult.map(bostad => /*html*/`
      <div class="card mb-8" style="max-width: 700px;">
                                      <div class="row no-gutters">
                    <div class="col-md-4">
                      <img class="card-img" src="${bostad.picUrl}">
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title">${bostad.area}</h5>
                        <p class="card-text">Pris: ${bostad.price}kr <br> <strong> ${bostad.rooms}</strong> Rum
                     med kök lägnehet på <strong>${bostad.Kvm}</strong> Kvm  <br>Avgift på ${bostad.rent} kr</p>
                      </div>
                    </div>
                  </div>
                </div>
      `)}

      </div>
    </div>
      ` }

}