class Salj extends Base {

  render() {
    return /*html*/`
      <div class="row" route="/salj" page-title="Sälj">
        <div class="col-12">
          <h1>Sälj din bostad</h1>
          <p>Är du intresserad av att sälja din bostad? Boka en värdering!</p>
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
                <option>Min Villa</option>
                 
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Skriv en förklaring av din bostad.</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <br>
              <button>Skicka</button>
            

            </div>
          </form>
        </div>
      </div>
      `;
  }

}


