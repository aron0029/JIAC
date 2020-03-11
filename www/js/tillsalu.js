class Tillsalu extends Base {

  render() {

    return /*html*/`
       <div route="/till-salu">
      <h1> Här finner du alla våra bostäder som är till salu </h1>
        <h2>${this.area} +  ${this.streetName}</h2>
          <p> Denna bostad finns på: ${this.streetNumber} </p>
          <p>${this.zipCode}</p>
            </div>
    ` }

}

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
