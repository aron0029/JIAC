class Tillsalu extends Base {


  async mount() {

    this.tilSalu = await (Tillsalu, /*sql*/`
      SELECT * FROM Residence
    `);

  }






  render() {

    return /*html*/`
<div route="/till-salu">


        <h2> Denna lägenhet finns på </h2>
        <h1> ${this.streetName}${this.streetNumber} </h1>
        <h2> </h2>
        <p>  </p>
        <p>${this.zipCode}</p>
      </div>


      ` }

}

/*       <h2> Denna lägenhet finns på </h2>
<h1> ${this.streetName}${this.streetNumber} </h1>
  <h2> </h2>
  <p>  </p>
  <p>${this.zipCode}</p>
      </div >


      //*  this.searchResult = await sql(/*sql*/`

     //* SELECT * FROM residence
    //*  --JOIN Pics
    //*  --ON residence.residenceId = Pics.PicId
    //*  WHERE kvm >= $kvmMin
  //*  AND kvm <= $kvmMax
      //*  AND price >= $minPrice
  //*  AND price <= $maxPrice
      //*`
   //*      , {
   //*       kvmMin: 20,
   //*       kvmMax: 100,
   //*       minPrice: 200000,
   //*       maxPrice: 200000000
//*
   //*     }
   //*   );
  //*  }







 //* }
