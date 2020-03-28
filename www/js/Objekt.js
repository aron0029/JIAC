class Objekt extends Base {

  async mount() {
    let info = await sql(/*sql*/`
    SELECT * FROM fullResidenceInfoAndPics
    WHERE residenceId = $id
  `, { id: params.id });
    Object.assign(this, info[0] || {});
    this.render();

    this.tabs = ['Info', 'Bilder', 'Kontakt'];
    this.activeTab = 'Info';
  }

  changeTab(e) {
    this.activeTab = e.target.innerHTML;
    this.render();
  }

  render() {
    return /*html*/`
      <div route="/objekt/:id" page-title="Objekt">

        <div class="row mt-4">
          <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10">
            <ul class="nav nav-tabs nav-justified" click="changeTab">
              ${this.tabs.map(tab => /*html*/`
                <li class="nav-item">
                  <a href="#" class="nav-link ${this.activeTab === tab ? 'active' : ''}" role="tab" data-toggle="tab">${tab}${tab === 'Bilder' ? ' (' + this.pics.split(',').length + ')' : ''}</a>
                </li>
              `)}
            </ul>
          </div>
        </div>  

        <div class="&nbsp row mt-4">

 
      
           ${this.activeTab !== 'Info' ? '' : /*html*/`
           
          


              <!-- Om ni vill ha den första bilden här också -->
              <div class="col-sm-3">
              <p><strong>  Pris: </strong>${this.price}</p>
              <p><strong>  Område: </strong>${this.area}</p>
              <p><strong>  Kvm: </strong>${this.Kvm}</p>
              <p><strong>  Rum: </strong>${this.rooms}</p>
              <p><strong>  Avgift: </strong>${this.rent}</p>
              <p><strong>  Adress: </strong>${this.streetName} ${this.streetNumber}</p>
              <p><strong> Församling: </strong>${this.community}</p>
              </div>

              <div class="col-sm-7">
             <img class="w-100"  src="${this.pics.split(',')[0]}">

        <br>
        <br>
      <p><strong>Området: </strong>${this.association}</p>
       <div>
      
          `}
    </div>

       
      



      
   

          ${this.activeTab !== 'Kontakt' ? '' : `
            <div>
              <p><strong>  Ansvarig mäklare: </strong>${this.firstName} ${this.lastName} </p>
              <p><strong>  Mejl: </strong>${this.email} </p>
              <p><strong>  Telefon: </strong>${this.phoneNr} </p>
              <img src ="/${this.realtorPic}" style="width: 18rem;">
            </div>
          `}



         ${!this.activeTab.includes('Bilder') ? '' : `
            <div>
              ${this.pics.split(',').map(pic => `
                <img class="w-100 mt-4" src="${pic}">
              `)}
            </div>
          `}


        </div>






   

      </div>
      

    </div>
    `
  }

}