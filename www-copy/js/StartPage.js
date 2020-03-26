class StartPage extends Base {

  render() {
    return /*html*/`
      <div class="row"  route="/" page-title="Start">
     <div class= "col-12">

  <!--div class="card-body;card bg-light text-black; col-12; card mb-3"-->
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

    <div style= "height: 400px">
      <img class="d-block w-100 h-120" src="/images/Carousel/sodermalm.jpg" alt="First slide">
</div>



      <div class="carousel-caption d-none d-md-block">
    <h5 class="display-5">Södermalm</h5>
    <p>Stadsdelen som har allt. Från myllrande folkliv till stilla natur.</p>
  </div>
    </div>



    <div class="carousel-item">

<div style= "height: 400px">
      <img class="d-block w-100 h-120"  src="/images/Carousel/vasastan.jpg" alt="Second slide">
</div>


         <div class="carousel-caption d-none d-md-block">
    <h5 class="display-5">Vasastan</h5>
    <p>Stockholms Stadsbibliotek med ca 700 000 böcker, butiker och restauranger.</p>
  </div>
    </div>


    <div class="carousel-item">


    <div style= "height: 400px">
      <img class="d-block w-100 h-180"  style="height: 400px;" src="/images/Carousel/ostermalm.jpg" alt="Third slide">
</div>
         <div class="carousel-caption d-none d-md-block">
    <h5 class="display-5">Östermalm</h5>
    <p>Barerna och restaurangerna kring Stureplan, Östermalmshallen och Humlegården.</p>
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

   <h1 class="display-4 text-center">Mäklarfirman Dhyr & Rumson </h1>
  </!--div>

</div>
</div>
<div class="card-group">
 <br></br>
  
<div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
<a href="/till-salu">
      <button class="btn btn-default stretched-link">
     <img class="img-fluid" src="/images/minimalistiskt-mysigt-hem.jpg" 
     style="width: 800px; height: 300px">
      </button>
</a>
      
        <h5 class="display-4 text-center">Våra hem</h5>
        <p class="lead text-center">Här listar vi våra bostäder som vi har till salu.
        <br>
        </p>
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
<a href="/salj">
        <button class="btn btn-default stretched-link">
     <img class="img-fluid" src="/images/move.jpg"style="width: 800px; height: 300px">
      </button>
      </a>
        <h5 class="display-4 text-center">Boka värdering</h5>
        <p class="lead text-center">För en professionell utvärdering från våra mäklare.</p>
        
      </div>
    </div>
  </div>

  
      </div>
      </div>

          
    `;

  }

}

