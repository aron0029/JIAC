class StartPage extends Base {

  render() {
    return /*html*/`
      <div class="row"  route="/" page-title="Start">
     <div class= "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">

  <!--div class="card-body;card bg-light text-black; col-12; card mb-3"-->

<h1 class="display-sm-3 text-center">DHYR & RUMSON</h1>
<div class="card; col-12">
<div class="card-body">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    
  <div class="carousel-item active">

    <div> 
      <img class="d-block w-100 h-120" src="/images/Carousel/sodermalm-CROPPED.jpg" alt="First slide">
</div>




      <div class="carousel-caption d-none d-sm-block">
    <h5 ><strong>Södermalm</strong></h5>
    <h4 class ="text-sm center">Stadsdelen som har allt. Från myllrande folkliv till stilla natur.</h4>
  </div>
    </div>

    

    <div class="carousel-item">

<div>
      <img class="d-block w-100 h-120"  src="/images/Carousel/vasa2-CROPPED.jpg" alt="Second slide">
</div>


         <div class="carousel-caption d-none d-sm-block">
    <h5 class="display-sm-4"><strong>Vasastan</strong></h5>
    <h4 class ="text-sm center">Stockholms Stadsbibliotek med ca 700 000 böcker, butiker och restauranger.</h4>
  </div>
    </div>


    <div class="carousel-item">


    <div>
      <img class="d-block w-100 h-120" src="/images/Carousel/ostermalm-CROPPED.jpg" alt="Third slide">
</div>
         <div class="carousel-caption d-none d-sm-block">
    <h5 class="display-sm-4"><strong>Östermalm</strong></h5>
    <h4 class ="text-sm center">Barerna och restaurangerna kring Stureplan, Östermalmshallen och Humlegården.</h4>
  </div>
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
 <br>

   <h1 class="display-3 text-center"> </h1>
  </!--div>

</div>
</div>
<div class="card-group text-center">
 <br>
  
<div class="row">
  <div class="col-sm-6">
  
    <div class="card">
      <div class="card-body-sm p-5">
<a href="/kopa-bostad">
      <button class="btn btn-default stretched-link">
     <img class="img-fluid" src="/images/varahem.jpg">
      </button>
</a>
      
        <h1 class="text-sm center"><strong>Våra hem</strong></h1>
        <p class="lead-sm text-center">Här listar vi våra bostäder som vi har till salu.
        </p>
        
        
      </div>
    </div>
  </div>


  <!--div class="col-sm-10 col-lg 6"-->
   <div class="col-sm-6">
    <div class="card">
      <div class="card-body-sm p-5">
        <a href="/salj">
        <button class="btn btn-default stretched-link">
     <img class="img-fluid" src="/images/move4.jpg">
      </button>
      </a>
        <h1 class="text-sm center"><strong>Boka värdering</strong></h1>
        <p class="lead-sm text-center">För en professionell utvärdering från våra mäklare.</p>
        
      </div>
    </div>
    </div>
  </!--div>


      </div>
      </div>
    <br>
    <br>
          
    `;

  }

}

