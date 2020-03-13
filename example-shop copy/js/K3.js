class Kundomdomen extends Base {

    render() {
      return /*html*/`
          <div class="row" route="/kundomdomen" page-title="Kundomdömen">
            <div class="col-12">
            <h1>Lämna gärna ditt omdöme på oss!</h1>
              <p></p>
            </div>
           
          <div class="form-group">
          <label for="exampleFormControlSelect1">Förnamn:</label>
          <select class="form-control" id="exampleFormControlSelect1">
            <option>Östermalm</option>
            <option>Södermalm</option>
            <option>Vasastan</option>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Efternamn:</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option>Östermalm</option>
              <option>Södermalm</option>
              <option>Vasastan</option>         
          <div class="form-group">
            <label for="exampleFormControlInput1">E-postadress:</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="form-group">
            <label for="exampleFormControlInput1">Telefon:</label>
            <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="+46073000000">
          </div>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Meddelande:</label>
            <textarea class="form-control" id="meddelande" cols="45" rows="5"></textarea> 
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <br>
            <button type="button" class="btn btn-primary">Skicka</button>
          
  
          </div>
        </form>
      </div>
    </div>
        `;
    }
  }