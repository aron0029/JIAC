class StartPage extends Base {

  render() {
    return /*html*/`
      <div class="row"  route="/" page-title="Start">
     <div class= "col-12">

  <!--div class="card-body;card bg-light text-black; col-12; card mb-3"-->
<div class="card bg-light; col-12 bg-light">
<div class="card-body bg-light">
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" width ="200"height="500" src="/images/Carousel/sodermalm.jpg" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
    <h5>Södermalm</h5>
    <p><strong>Stadsdelen som har allt. Från myllrande folkliv till stilla natur.</strong></p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" width ="200" height="500"  src="/images/Carousel/vasastan.jpg" alt="Second slide">
         <div class="carousel-caption d-none d-md-block">
    <h5>Vasastan</h5>
    <p><strong>Stockholms Stadsbibliotek med ca 700 000 böcker, mängder med butiker och restauranger.</strong></p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100"  width ="200"height="500" src="/images/Carousel/ostermalm.jpg" alt="Third slide">

         <div class="carousel-caption d-none d-md-block">
    <h5>Östermalm</h5>
    <p><strong>Barerna och restaurangerna kring Stureplan, Östermalmshallen och Humlegården.</strong></p>
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


   <h1 class="display-3"><center>Mäklarfirman Dhyr & Rumson </center></h1>
  </!--div>

</div>
</div>




<div class="card-group">
 <br></br>
  
<div class="row">
  <div class="col-sm-6">
    <div class="card bg-light">
      <div class="card-body">
<a href="/till-salu">
      <button class="btn btn-default stretched-link">
     <img class="img-fluid" src="/images/minimalistiskt-mysigt-hem.jpg" 
     style="width: 800px; height: 300px">
      </button>
</a>
      
        <h5 class="display-4"><center>Våra hem</center></h5>
        <p class="lead"><center>Här listar vi våra bostäder som vi har till salu.
        <br></br>
        </center></p>
        
        
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-light">
      <div class="card-body">
<a href="/salj">
        <button class="btn btn-default stretched-link">
     <img class="img-fluid" src="/images/move.jpg"style="width: 800px; height: 300px">
      </button>
      </a>
        <h5 class="display-4"><center>Boka värdering</center></h5>
        <p class="lead"><center>För en professionell utvärdering från våra mäklare av hem som du vill sälja.</center></p>
        
      </div>
    </div>
  </div>

  
      </div>
      </div>

          
    `;

  }

}

