class Tillsalu extends Base {



  render() {

    return /*html*/`
<div route="/till-salu">

<div class="carousel-item">  

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="Södermalm" src="/images/Södermalm/bild5.2.png" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="östermalm" src="/images/Södermalm/bild3.2.png" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/Södermalm/bild4.3.png" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<img src="/images/Södermalm/bild3.3.png" alt="...">
  <div class="carousel-caption d-none d-md-block">  
  </div>
</div>
       <h2> Denna lägenhet finns på </h2>
<h1> ${this.streetName}${this.streetNumber} </h1>
  <h2> </h2>
  <p>  </p>
  <p>${this.zipCode}</p>
      </div >
      </div>

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
