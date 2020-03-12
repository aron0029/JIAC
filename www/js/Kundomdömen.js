class Kundomdomen extends Base {

  render() {
    return /*html*/`
        <div class="row" route="/kundomdomen" page-title="Kundomdömen">
          <div class="col-12">
          <h1>Lämna gärna ditt omdöme på oss!</h1>
            <p></p>
          </div>
 
      <form>         

      Förnamn:<br />
      <input type="text" name="fnamn" id="fnamn" /> <br /> 
      Efternamn: <br />
      <input type="text" name="enamn" id="enamn" /> <br />

        <div class="form-group">
          <label for="exampleFormControlInput1">E-postadress:</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="namn@example.com">
        </div>

        <div class="form-group">
          <label for="exampleFormControlInput1">Telefon:</label>
          <input type="phone" class="form-control" id="exampleFormControlInput1" placeholder="+46073800000">
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Meddelande:</label>
          <textarea class="form-control" id="meddelande" cols="45" rows="5"></textarea> 
          
          <br>
          <button type="button" class="btn btn-primary">Skicka</button>

        </div>
      </form>
    </div>
  </div>
      `;
  }
}