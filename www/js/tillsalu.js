class Tillsalu extends Base {

  async mount() {
    this.currencyFormatter = new Intl.NumberFormat('sv-SV', { style: 'currency', currency: 'SEK' });
    this.anvandarensVal = {
      kvmMin: 10,
      kvmMax: 300,
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
      WHERE kvm >= $kvmMin
      AND kvm <= $kvmMax
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

  changeMaxPrice(e) {
    let av = this.anvandarensVal;
    av.maxPrice = e.target.value;
    if (av.maxPrice < av.minPrice) {
      av.minPrice = av.maxPrice;
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
          <div class="form-group mt-3">
             <input type="text" placeholder="Sök" class="form-control">
           </div>
         </form>
            
            <form>
            <div class="search-input__label push-half--left">KVM</div>
            <div>
            <div class="form-group">
            <input type="range" class="form-control-range" id="formControlRange" value="0">
            <div class="search-input__label push-left">
            LÄGSTA PRIS ${this.currencyFormatter.format(this.anvandarensVal.minPrice)}</div >
      <input type="range" class="form-control-range" id="formControlRange" input="changeMinPrice" value="${this.anvandarensVal.minPrice}" min="100000" max="100000000" step="50000">
<br><br>
        HÖGSTA PRIS ${this.currencyFormatter.format(this.anvandarensVal.maxPrice)}</div >
      <input type="range" class="form-control-range" id="formControlRange" input="changeMaxPrice" value="${this.anvandarensVal.maxPrice}" min="100000" max="100000000" step="50000">
            </div>
            </form >


      <div class="row">
        ${this.searchResult && this.searchResult.map(bostad => /*html*/`
                    <div class="card" style="width: 50rem;"> <div class="card" style="hight: 220rem;">
                     ${bostad.area} Pris: ${bostad.price}kr <br> ${bostad.rooms} Rum
                     men kök lägnehet på ${bostad.Kvm} Kvm  <br>Avgift på ${bostad.rent} kr<br>${bostad.residenceId}
                     <br>
                    </div>  
                  `)}
        <!{JSON.stringify(this.searchResult)}-->
          <!-- <h2>${this.area} +  ${this.streetName}</h2>
        <p> detta bostad finns på: ${this.streetNumber} </p>
        <p>${this.zipCode}</p>-->
          </div>
        </div >
      ` }

}