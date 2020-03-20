class StartPage extends Base {

  render() {
    return /*html*/`
      <div class="row"  route="/" page-title="Start">
     <div class= "col-12">

  <div class="card-body;card bg-white text-black; col-12; card mb-3">
  <img class="card-img-top" src="/images/idasbild.png" alt="Card image cap">
   <h1 class="display-3"><center>Mäklarfirman Dhyr & Rumson </center></h1>
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
      
        <h5 class="display-4">Våra hem</h5>
        <p class="lead">Här listar vi våra bostäder som vill har till salu.
        <br></br>
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

