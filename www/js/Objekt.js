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
    this.render();

  }

  render() {
    return /*html*/`
        <div class="row" route="/objekt/:id" page-title="Objekt">
        <div class="col-12">
         
          
                <img class ="card-img" src="${this.pics}">
              


        
          </div >
          
            </div >
      `

  }
}