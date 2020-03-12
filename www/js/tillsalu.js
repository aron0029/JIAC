class Tillsalu extends Base {

  async mount() {
    this.anvandarensVal = {
      kvmMin: 20,
      kvmMax: 100,
      minPrice: 200000,
      maxPrice: 200000000
    };
    this.search();
  }

  async search() {
    this.searchResult = await sql(/*sql*/`
      SELECT * 
      FROM Residence
      /*JOIN Pics
      ON Residence.residenceId = Pics.PicId*/
      WHERE kvm >= $kvmMin
      AND kvm <= $kvmMax
      AND price >= $minPrice
      AND price <= $maxPrice
    `
      , {
        kvmMin: 20,
        kvmMax: 100,
        minPrice: 200000,
        maxPrice: 200000000
      });
  }

  fangaUpp() {

  }

  render() {
    !this.searchResult ? this.search() : '';
    return /*html*/`
    ${console.log(this.searchResult)}
       <div route="/till-salu">
         <h1> Här finner du alla våra bostäder som är till salu </h1>

         <div class="row">Här ska en form ligga</div> 

         <div class="row">
         ${this.searchResult && this.searchResult.map(bostad => /*html*/`
                    <div class="col-6">
                    Område: ${bostad.area} Pris: ${bostad.price}kr
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