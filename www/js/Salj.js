
class Salj extends Base {

  async collectFormData(e) {
    e.preventDeFault();
    let form = e.target;
    let formData = {};
    for (let element of form.element) {
      if (!element.name) { continue; }
      formData[element.name] = element.value;
    }
    console.log(formData);
    await sql(/*sql*/`
      INSERT INTO saljFormular (adressemail, phoneNr, livingWhere, whatSell, explaint ) VALUES($adressemail,$phoneNr,$livingWhere,
      $whatSell, $explaint) `, formData);
    this.formSent = true;
    this.render();
  }

  render() {
    return /*html*/`
       <div class="row" route="/salj" page-title="Sälj">
        <div class="col-12">
          <h1>Sälj din bostad</h1>
          <p>Är du intresserad av att sälja din bostad? 
          <br>
            Boka en värdering!</p>
  

        ${this.formSent ? /*html*/`
            <div class="col-12">
              <h1 class="display-3">Tack för din återkoppling</h1>
            </div>
           `
        :
       /*html*/`
     
          <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Telefonnummer</label>
              <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="+46073000000">
              </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Vart bor du?</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>Östermalm</option>
                <option>Södermalm</option>
                <option>Vasastan</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect2">Vad vill du sälja?</label>
              <select class="form-control" id="exampleFormControlSelect2">
                <option>Min Lägenhet</option>

              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Skriv en förklaring av din bostad.</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <br>
              <button>Skicka</button>
            </div >
          </form >
        </div >
      </div >
        
        `}


      `;
  }
}