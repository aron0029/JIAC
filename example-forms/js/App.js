class App extends Base {

  async mount() {
    await sql(/*sql*/`USE formDataExampleDb`);
  }

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
    // Send the form data to the db
    await sql(/*sql*/`
      INSERT INTO interests (name, email, interests) VALUES($name, $email,$interests)
    `, formData);
    // Update the "flag" formSent
    this.formSent = true;
    // Now render again so that the screen updates
    this.render();
  }

  render() {
    return /*html*/`
      <div class="container">
        <div class="row mt-5">



          ${this.formSent ? /*html*/`
            <div class="col-12">
              <h1>Tack för att du berättade!</h1>
            </div>
           ` :
           /*html*/`
           <div class="col-12">
            <h1>Berätta mer om dig själv!</h1>
            <form submit="collectFormData">
              <div class="form-group">
                <label class="w-100">Namn
                  <input name="name" type="text" class="form-control" placeholder="Ditt namn" required pattern=".{2,}">
                </label>
              </div>
              <div class="form-group">
                <label class="w-100">E-postadress
                  <input name="email" type="email" class="form-control" placeholder="Din e-postadress" required>
                </label>
              </div>
              <div class="form-group">
                <label class="w-100">Mina intressen
                  <textarea name="interests" class="form-control" placeholder="Berätta om dina intressen" required></textarea>
                </label>
              </div>
              <input class="btn btn-primary float-right" type="submit" value="Skicka info">
            </form>
          </div>
          `}




          
        </div>
      </div>
    `;
  }

}