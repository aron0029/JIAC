class Objekt extends Base {

  async mount() {

    //hör ska info från databasen hämtas
    let info = await sql(/*sql*/`
     SELECT * FROM Residence, Pics, Realtor, Area
      WHERE Residence.residenceId AND Pics.residenceId = $id 
      
     `, {
      id: params.id

    });
    Object.assign(this, info[0] || {});
    console.log(this)
    this.render();

  }





  render() {

    return /*html*/`
    <div route="/objekt/:id" page-Area="${this.Area}">
      <div class="row">
        <div class="col">
          <h5>
            Till salu: <a href="/databas/Address/${this.Residence}">${this.Area}</a>
            </h5>
        <h1>${this.title}</h1>
        <h4 class="mb-3">${this.Address}</h4>
           <div class="row mb-3">
            <div class="col-lg-3 mb-3 mb-lg-0">
           </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
             <img class="card-img" src="${this.url}">
              </div>
               <div class="col-lg-3 mb-3 mb-lg-0">
              <span class=""> ${this.price} Kr</span> </div>
              

              
              <span class="">Rum:${this.rooms}</span>
                <div class="col-lg-3 mb-3 mb-lg-0">
              <span class="">kvadratmeter:${this.Kvm}</span>
             <span class="">Avgift:${this.rent}</span>
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