class Tillsalu extends Base {


  render() {

    return /*html*/`
       <div route="/Tillsalu">
        <h2>${this.area} +  ${this.streetName}</h2>
          <p> detta bostad finns på: ${this.streetNumber} </p>
          <p>${this.zipCode}</p>
            </div>
  `

  }


  render() {
    return /*html*/`
          ${console.log(this.searchResult)}
          <div class="row" route="/till-salu" page-title="Till salu">
            <div class="col-12">
              <h1>Till salu</h1>
                <p>Här finner du alla våra bostäder som är till salu.</p>
               <div class="row"> <div class="column"> <img class="img-fluid" 
                     src="/images/Södermalm/bild1.1.png" style="width:100%">
                </div>
                <div class="column">
                  <img src="/images/södermalm/bild1.5.png" alt="östermalm" style="width:100%">
                </div>
                <div class="column">
                  <img src="/images/södermalm/bild1.4.png" alt="vasastan" style="width:100%">
                </div>
                
              </div>
  
     
  
              <a href="#" class="list-group-item ">Södermalm</a>
              <a href="#" class="list-group-item">Vasastan</a>
              <a href="#" class="list-group-item ">Östermalm</a>
              
  </div>
          </div>
        
         
        </div>
  
    
        
      `;
  }

}