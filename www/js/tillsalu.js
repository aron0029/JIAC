class Tillsalu extends Base {


  async mount() {

    this.tillSalu = await sql(Tillsalu,/*sql*/`
      SELECT * FROM Address 
      `);
  }


  render() {
    return/*html*/` <div route="/till-salu">

<div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="/images/carousel/östermalm.jpg" class="d-block w-75" style="height: 500px">
    </div>
    <div class="carousel-item">
      <img src="/images/carousel/vasastan.jpg" class="d-block w-75" style="height: 500px">
    </div>
    <div class="carousel-item">
      <img src="/images/carousel/södermalm.jpg" class="d-block w-75" style="height: 500px">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</div>

   
    `;
  }



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
