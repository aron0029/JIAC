class Realtors extends Base {

  async mount() {

    this.realtors = await sql(Realtors, /*sql*/`
          SELECT * FROM Realtor
        `);
  }


  render() {

    return /*html*/`
      <div route="/varamaklare">
<br>
<div class="col-sm-12 text-center">
<div class="row"> 
${this.realtors.map(realtor => /*html*/`
    <div class="card m-4 bg-light" style="width: 18rem;">
    <img src ="${realtor.pic}" style="width: 18rem;" >
    <br>
  		<div class="card-body">
        <h5 class="card-title">${realtor.firstName} ${realtor.lastName}</h5>
        <h6 class="card-subtitle text-dark">${realtor.title}</h6>
        <br>
        
        
             <p>
  <a class="btn btn-secondary" data-toggle="collapse" href="#mail-${realtor.realtorId}" role="button" aria-expanded="false" aria-controls="collapseExample">
    Mejla
  </a>
  <a class="btn btn-secondary" data-toggle="collapse" href="#phone-${realtor.realtorId}" role="button" aria-expanded="false" aria-controls="collapseExample">
    Ring
  </a>
</p>
<div class="collapse" id="mail-${realtor.realtorId}">

  <div class="card card-body">
    <a href="mailto:${realtor.email}" style="color:black" class="card-link">${realtor.email} </a>
  </div>
</div>

<div class="collapse" id="phone-${realtor.realtorId}">
  <div class="card card-body">
     <a href="${realtor.phoneNr}" style="color:black" class="card-link">${realtor.phoneNr}</a>
  </div>
</div>



 
      


      </div>
	</div>
`)}


</div>
</div>
    `
  }


}