class StartPage extends Base {

  render() {
    return /*html*/`
      <div class="row"  route="/" page-title="Start">
     <div class= "col-12">

  <div class="card-body;card bg-light text-black; col-12; card mb-3">

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="/images/idasbild.png" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
    <h5>Södermalm</h5>
    <p>Den bästa stadsdelen</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/idasbild.png" alt="Second slide">
         <div class="carousel-caption d-none d-md-block">
    <h5>Vasastan</h5>
    <p>Den mysiga stadsdelen</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="/images/idasbild.png" alt="Third slide">

         <div class="carousel-caption d-none d-md-block">
    <h5>Östermalm</h5>
    <p>Den finaste stadsdelen</p>
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
      
        <h5 class="display-4">Våra hem</h5>
        <p class="lead">Här listar vi våra bostäder som vi har till salu.
        <br></br>
        </p>
        
        
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
        <h5 class="display-4">Boka värdering</h5>
        <p class="lead">För en professionell utvärdering från våra mäklare av hem som du vill sälja.</p>
        
      </div>
    </div>
  </div>

  
      </div>
      </div>

          
    `;

  }

}

