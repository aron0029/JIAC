class Realtors extends Base {

  async mount() {

    this.realtors = await sql(Realtors, /*sql*/`
          SELECT * FROM Realtor
        `);
  }


  render() {

    return /*html*/`
      <div route="/varamaklare">
<div class="row">
${this.realtors.map(realtor => /*html*/`
  	<div class="card" style="width: 20rem;">

  		<div class="card-body">
    		<h5 class="card-title">${realtor.firstName} ${realtor.lastName}</h5>
    		<h6 class="card-subtitle mb-2 text-muted">Mäklare</h6>
    		<p class="card-text">Kontakta mig nedan.</p>
    		<a href="#" class="card-link">${realtor.email}</a>
    		<a href="#" class="card-link">${realtor.phoneNr}</a>



  		</div>
	</div>
`)}
</div>
    `
  }


}