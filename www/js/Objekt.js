class Objekt extends Base {

  async mount() {

    let info = await sql(/*sql*/`
    SELECT * FROM fullResidenceInfoAndPics
    WHERE residenceId = $id
  `, { id: params.id });
    Object.assign(this, info[0]);
    ;
    // FÖRST NÄR DEN HÄR CONSOLE.loggen säger 1 rad
    // har vi lyckats skriva vår databas fråga... (join)
    // Kanske börja jobba i databasen först?
    // Kanske skriv en färdig vy och spara i databasen
    // För då kan vi ställa frågan mot vyn här i vår JS.
    // Och slipper komplicerad kod i SQL här i denna fil
    // Istället så sparar vi vår JOIN som en vy i databasen.
    console.log("HUR MÅNGA RADER FRÅN DATABASEN?", info.length);
    Object.assign(this, info[0] || {});
    console.log("HEPP", this)
    //gör en list variabel som stopar in url eller 
    // turnery som frågar om det finns en eller 2 koma i texten  Filtrera efter om det finns ",""
    this.render();

  }

  render() {
    return /*html*/`
        <div class="row" route="/objekt/:id" page-title="Objekt">
    <div page-Area="${this.Area}">
        <div class="col-12">
         
          
                
              


        
        
        <h5>
            Till salu: <br>
            <a href="/databas/Addres/${this.Residence}">${this.Area}</a>
            </h5>
        <h1>${this.title}</h1>
       
            
              <script>
               this.pics = pics.split(',');
            console.log(this.pics);
            for (x of pics) {
              document.write(x + "<br >");
                 }
             
            var pics = <img  class="card-img" src= "${this.pics}">
            
             
        
           
             
            </div>

            
            <div role="tabpanel" class="tab-pane fade" id="profile">
            
            <img src ="${this.pic}" style="width: 18rem;" >
            
            
            </div>



            <div role="tabpanel" class="tab-pane fade" id="about">
            <br>
            
            <div class="col-lg-3 mb-3 mb-lg-0"> 
            <span class=""> ${this.price}Kr</span>
              <br>
            Rum: ${this.rooms}</span>
                <div class="col-lg-3 mb-3 mb-lg-0">
              <span class="">${this.Kvm} Kvadratmeter:</span>
             <span class="">Avgift:${this.rent}</span>
            </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
              <span class="b">Området: ${this.area}</span>
              <br> Förening: <span class="c">${this.community}</span> 
                  
              <br> <br><span class=""> Mäklare <Strong>${this.firstName}
              <span class=""> ${this.lastName} </strong>
              <p class="card-text">Kontakta mig nedan.</p>
             
                <a href="mailto:${this.email}" class="card-link">${this.email}</a>
      
              
                 <img class="card-img" src="/${this.realtorPic}"> 
             
            </div>
          
            </div>
`

  }
}