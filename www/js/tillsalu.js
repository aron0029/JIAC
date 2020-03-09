class Tillsalu extends Base {
  async mount() {
    sql(/*sql*/`USE databas`);
  }



  render() {
    return /*html*/`
        <div class="row" route="/till-salu" page-title="Till salu">
          <div class="col-12">
            <h1>Till salu</h1>
              <p>Här finner du alla våra bostäder som är till salu.</p>
        </div>
      </div>
        <img class="img-fluid" src="/images/Södermalm/bild1.1.png" alt="Responsive image"> 
    `;
  }

}