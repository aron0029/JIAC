class Tillsalu extends Base {

  async mount() {
    this.anvandarensVal = {
      kvmMin: 20,
      kvmMax: 100,
      minPrice: 200000,
      maxPrice: 200000000,
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
  }

  chooseDistrict(e) {
    this.anvandarensVal.chosenDistrict = e.target.innerText;
    this.search();
  }

  fangaUpp() {

  }

  render() {
    return /*html*/`
       <div route="/till-salu">
         <h1 class="mb-3"> Här finner du alla våra bostäder som är till salu </h1>
         <form>
           ${this.districtButtons.map(label => /*html*/`
             <button click="chooseDistrict" type="button" class="btn ${this.anvandarensVal.chosenDistrict === label ? 'btn-primary' : 'btn-secondary'} btn-lg">${label}</button>
           `)}
          <div class="form-group mt-3">
             <input type="text" placeholder="Sök" class="form-control">
           </div>
         </form>

         <div class="row">
         ${this.searchResult && this.searchResult.map(bostad => /*html*/`
                    <div class="col-6">
                     ${bostad.area} Pris: ${bostad.price}kr
                    </div>  
                  `)}
         <!--${JSON.stringify(this.searchResult)}-->
          <!-- <h2>${this.area} +  ${this.streetName}</h2>
              <p> detta bostad finns på: ${this.streetNumber} </p>
              <p>${this.zipCode}</p>-->
          </div>
        </div>
    ` }

}