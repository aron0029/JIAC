class Kundomdomen extends Base {



  async collectFormData(e) {
    // Prevent the browser from reloading
    // the page when we submit the form
    e.preventDefault();
    // The form is the event target
    let form = e.target;
    // Create an object to collect form data in
    let formData = {};
    // Loop through the elements of the form
    for (let element of form.elements) {
      if (!element.name) { continue; }
      formData[element.name] = element.value;
    }
    console.log(formData);
    // Send the form data to the db
    await sql(/*sql*/`
      INSERT INTO Customer (firstName, lastName, phoneNr) VALUES($firstName, $lastName, $phoneNr)
    `, formData);
    // Update the "flag" formSent
    this.formSent = true;
    // Now render again so that the screen updates
    this.render();
  }


  render() {
    return /*html*/`
        <div class="row" route="/kundomdomen" page-title="Kundomdömen">
          <div class="col-12">
          <h1>Lämna gärna ditt omdöme på oss!</h1>
            <p></p>
          </div>

          ${this.formSent ? /*html*/`
            <div class="col-12">
              <h1>Tack för din återkoppling</h1>
            </div>
           ` :/*html*/`
           <div class="col-12">
            
            <form submit="collectFormData">
              <div class="form-group">
                <label class="w-100">Förnamn
                  <input name="firstName" type="text" class="form-control" placeholder="Ditt förnamn" required pattern=".{2,}">
                </label>
              </div>
               <div class="form-group">
                <label class="w-100">Efternamn
                  <input name="lastName" type="text" class="form-control" placeholder="Ditt efternamn" required>
                </label>
              </div>
              <div class="form-group">
                <label class="w-100">Telefon
                  <input name="phoneNr" type="text" class="form-control" placeholder="Telefon" required>
                </label>
              </div>


              <input class="btn btn-primary float-right" type="submit" value="Skicka info">
            </form>
          </div>
`}





  </div>
      `;
  }
}