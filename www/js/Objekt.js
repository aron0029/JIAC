class Objekt extends Base {

  async mount() {
    let info = await sql(/*sql*/`
    SELECT * FROM fullResidenceInfoAndPics
    WHERE residenceId = $id
  `, { id: params.id });
    Object.assign(this, info[0]);
    ;

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
       
            

            <img class="card-img" src="${this.pics}">
             
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
      
              
                 <img class="card-img" src="${this.realtorPic}"> 
             
            </div>
          
            </div>
`

  }
}