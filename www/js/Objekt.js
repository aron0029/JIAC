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
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <ul class="nav nav-tabs nav-justified" click="changeTab">
              ${this.tabs.map(tab => /*html*/`
                <li class="nav-item">
                  <a href="#" class="nav-link ${this.activeTab === tab ? 'active' : ''}" role="tab" data-toggle="tab">${tab}${tab === 'Bilder' ? ' (' + this.pics.split(',').length + ')' : ''}</a>
                </li>
              `)}
            </ul>
          </div>
        </div>  


      
      <div class="row mt-4">
        <div class="col-sm-10">
      
           ${this.activeTab !== 'Info' ? '' : /*html*/`
            <div>

              <!-- Om ni vill ha den första bilden här också -->
              <div class="float-right"><div class="col-sm-4">  <img class=" w-100" src="${this.pics.split(',')[0]}">
                  </div>
              <p><strong> &nbsp Pris: </strong>${this.price}</p>
              <p><strong> &nbsp Område: </strong>${this.area}</p>
              <p><strong> &nbsp Kvm: </strong>${this.Kvm}</p>
              <p><strong> &nbsp Rum: </strong>${this.rooms}</p>
              <p><strong> &nbsp Avgift: </strong>${this.rent}</p>
              <p><strong> &nbsp Adress: </strong>${this.streetName} ${this.streetNumber}</p>
              <p><strong> &nbsp Församling: </strong>${this.community}</p>
              <p><strong>Förening: </strong>${this.association}</p>
              <div> <div class="col-sm-8">

      
          `}

   

          ${this.activeTab !== 'Kontakt' ? '' : `
            <div>
              <p><strong> &nbsp Ansvarig mäklare: </strong>${this.firstName} ${this.lastName} </p>
              <p><strong> &nbsp Mejl: </strong>${this.email} </p>
              <p><strong> &nbsp Telefon: </strong>${this.phoneNr} </p>
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

    </div>
    `
  }

}