class Objekt extends Base {

  async mount() {

    //hör ska info från databasen hämtas
    let info = await sql(/*sql*/`
     SELECT * FROM Residence, Pics, Realtor, Area, Addres
      WHERE Residence.residenceId AND Pics.residenceId = $id 
      
     `, {
      id: params.id
    });
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
    this.render();

  }

  render() {
    return /*html*/`
        <div class="row" route="/objekt/:id" page-title="Objekt">
    <div page-Area="${this.Area}">
        <div class="col">
          <h5>
            Till salu: <br>
            <a href="/databas/Addres/${this.Residence}">${this.Area}</a>
            </h5>
        <h1>${this.title}</h1>
        <h4 class="mb-3">${this.Addres}</h4>
           <div class="row mb-3">
            <div class="col-lg-2 mb-2 mb-lg-0">
           <span class="b"> ${this.streetName}</span>
           <br>Med ${this.rooms} med och kök</span>
               
              <span class="">kvadratmeter:${this.Kvm}</span>
             <span class="">Avgift:${this.rent}</span>
          </div>
            <div class="col-lg-7 mb-7 mb-lg-1">
             <img class="card-img" src="${this.url}">
            </div>
            <br><div class="col-lg-5 mb-3 mb-lg-0">
            <div class="col-lg-5 mb-3 mb-lg-0">
            <strong><span  class=""> ${this.price} </strong> Kr</span> 
              <br>
            
            </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
              <span class="b">området: ${this.area}</span>
              <br> förening: <span class="c">${this.community}</span> 
             
              <span class="c"> Mäklare <Strong>${this.firstName} ${this.lastName} </strong>
              <p class="card-text">Kontakta mig nedan.</p>
                <a href="mailto:${this.email}" class="card-link">${this.email}</a>
                <img src ="${this.pic}" style="width: 18rem;">    
        </div>
          
          </div>
          <div class="row mt-n4 mt-lg-0">
            <div class="col-md-12">
            </div>
`

  }
}