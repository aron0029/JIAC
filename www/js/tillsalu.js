class Tillsalu extends Base {
  async mount() {


  }

  async mount() {
    window.addEventListener("click", () => {
      app.objekt.mount();
      //detta får att params att funka 

    });

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
     SELECT Area.community, Residence.*, Pics.url AS picUrl
      FROM Residence, Pics, Area
      WHERE Residence.residenceId = Pics.residenceId
      AND Area.district = Residence.area
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

    
<form>
    <legend></legend>
    <p>
      <label><font size="5">Sortera på:</font></label>
      <select id="myList">
        <option value="1">Nyast</option>
        <option value="2">Äldst</option>
        <option value="3">Nyproduktion</option>
      </select>
    </p>
</form>



<div class="col-12"><center>
<div class="row"> 

      ${this.searchResult && this.searchResult.map(bostad => /*html*/`
   
    
    <div class="card m-4" style="width: 18rem;">
  <img src="${bostad.picUrl}" class="card-img-top; h-30; img-thumbnail" style="height:200px" >
  <div class="card-body">

  <a href="/objekt/${bostad.residenceId}" style="color:black">
   <button class="btn btn-default stretched-link">
    <h5 class="card-title">${bostad.area}</h5>
    
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item"><strong>${bostad.community} </strong></li>
    <li class="list-group-item"><strong>${bostad.price} </strong> kr</li>
    <li class="list-group-item"><strong>${bostad.rooms}</strong> rum</li>
  </ul>
 </a>
  </button>
</div>

      
      `)}


      </div>
       </div>
       
      ` }
}
