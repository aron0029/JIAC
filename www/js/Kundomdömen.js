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
<<<<<<< HEAD
      INSERT INTO Customer (firstName, lastName, phoneNr) VALUES($firstName, $lastName, $phoneNr)
=======
      INSERT INTO Customer (firstName, lastName, phoneNr, email, message) VALUES($firstName, $lastName, $phoneNr, $email, $message)
>>>>>>> 24958e7e8f481c87d9438bb0e4a29898524af4ea
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
          <h1 class="display-5"> Dina åsikter är viktiga för oss</h1>
            <p>Lämna synpunkter på hur vi kan bli bättre</p>
          </div>

          ${this.formSent ? /*html*/`
            <div class="col-12">
<<<<<<< HEAD
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
=======
              <h1 class="display-3">Tack för din återkoppling</h1>
            </div>
           ` :/*html*/`

           
            <form submit="collectFormData">
            <div class="col-12">
            <div class="form-row">
            
              <div class="form-group col-md-6">
                <label class="w-100">Förnamn
                  <input name="firstName" type="text" class="form-control" placeholder="förnamn" required pattern=".{2,}">
                </label>
              </div>
               <div class="form-group col-md-6">
                <label class="w-100">Efternamn
                  <input name="lastName" type="text" class="form-control" placeholder="efternamn" required>
                </label>
              </div>
            </div>


       




              <div class="form-group">
                <label class="w-100">Telefon
                  <input name="phoneNr" type="text" class="form-control" placeholder="+46(0)76010101" required>
>>>>>>> 24958e7e8f481c87d9438bb0e4a29898524af4ea
                </label>
              </div>


<<<<<<< HEAD
              <input class="btn btn-primary float-right" type="submit" value="Skicka info">
            </form>
          </div>
`}





  </div>
=======

                <div class="form-group">
                <label class="w-100">E-postadress
                  <input name="email" type="email" class="form-control" placeholder="name@example.com" required>
                
                  </label>
                  </div>

          
            <div class="form-group">
                <label class="w-100">Meddelande
                  <textarea name="message" class="form-control" placeholder="Lämna dina synpunkter" required></textarea>
                </label>
              </div>
             

              <input class="btn btn-secondary float-left" type="submit" value="Skicka">
            </form>
          </div>
           </div>
          
`}


>>>>>>> 24958e7e8f481c87d9438bb0e4a29898524af4ea
      `;
  }
}