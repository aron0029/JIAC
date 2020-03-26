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
       
          
       <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
        	<br />
        	
        	<ul class="nav nav-tabs nav-justified">
        		<li class="nav-item">
        			<a href="#home" class="nav-link active" role="tab" data-toggle="tab">Info</a>
        		</li>

        		<li class="nav-item">
        			<a href="#profile" class="nav-link" role="tab" data-toggle="tab">Bilder</a>
        		</li>

        		<li class="nav-item">
        			<a href="#about" class="nav-link" role="tab" data-toggle="tab">Kontakt</a>
        		</li>
        	</ul>

          <div class="tab-content">
          
            <div role="tabpanel" class="tab-pane fade in active" id="home">

            <br>
              <p><strong> &nbsp Pris: </strong>${this.price}</p>
              <p><strong> &nbsp Område: </strong>${this.area}</p>
              <p><strong> &nbsp Kvm: </strong>${this.Kvm}</p>
              <p><strong> &nbsp Rum: </strong>${this.rooms}</p>
              <p><strong> &nbsp Avgift: </strong>${this.rent}</p>
              <p><strong> &nbsp Adress: </strong>${this.streetName} ${this.streetNumber}</p>
              <p><strong> &nbsp Församling: </strong>${this.community}</p>
              <p><strong> &nbsp Förening: </strong>${this.association}</p>
              
            
            </div>

            
            <div role="tabpanel" class="tab-pane fade" id="profile">
            
            <img src ="${this.pic}" style="width: 18rem;" >
            
            
            </div>



            <div role="tabpanel" class="tab-pane fade" id="about">
            <br>
            <p><strong> &nbsp Ansvarig mäklare: </strong>${this.firstName} ${this.lastName} </p>
            <p><strong> &nbsp Mejl: </strong>${this.email} </p>
            <p><strong> &nbsp Telefon: </strong>${this.phoneNr} </p>
            <img src ="/${this.realtorPic}" style="width: 18rem;" >
            
            
            </div>
        	</div>
        </div>


        
      
            </div >
      `

  }
}