class Kontaktaoss extends Base {

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
      INSERT INTO Customer (firstName, lastName, phoneNr, email, message) VALUES($firstName, $lastName, $phoneNr, $email, $message)
    `, formData);
    // Update the "flag" formSent
    this.formSent = true;
    // Now render again so that the screen updates
    this.render();
  }





  render() {
    return /*html*/`
      <div class="row" route="/kontaktaOss" page-title="kontakt">
        <div class="col-8">
          <h1 class="display-4">Kontakta oss</h1>
          <p></p>
          <h6> 
          Kundtjänst via email: <a href style="color:black">support@dhyr-rumson.com</a> eller via kontaktformuläret.
          <br>
          <br>
        Kontakta oss gärna om du har några frågor! Vi försöker alltid svara så snabbt vi kan. 
        <br>
        <br>

          Om din fråga rör några av våra mäklare, se gärna vår mäklarlänk där mer information finns.
          <br>
          <br>

Dhyr & Rumson Sverige AB
<br>
Box 4678
<br>
114 28 Stockholm 
<br>
Sverige
<br>
Org.nr: 556444-4593
          
          <br>
        <br>
          
        </h6>
</div>

<div class="col-4; p-3 mb-2 bg-light">


${this.formSent ? /*html*/`

            <div class="float-right">
              <br>
               <br>
              <h3>Tack för din återkoppling</h3>
              <br>
              <br>
              <h5>Vi hör av oss inom kort till dig.</h5>
            </div>
           ` :/*html*/`

            <form submit="collectFormData" >
            
              <br>
              <strong>Har du några frågor?</strong>
              <br>
              <br>
              <a href ="support@dhyr-rumson.com" style="color:black">support@dhyr-rumson.com</span></a> 
              <br>
              <br>
              <strong>Eller kontakta oss via formuläret nedan</strong>
              <br>
              <br>
              <div class="form-group">
                <label class="w-100">Namn
                  <input name="firstName" type="text" class="form-control" placeholder="Carl" required pattern=".{2,}">
                </label>
              </div>
               <div class="form-group">
                <label class="w-100">Efternamn
                  <input name="lastName" type="text" class="form-control" placeholder="Carlson" required>
                </label>
              </div>
              <div class="form-group">
                <label class="w-100">Telefon
                  <input name="phoneNr" type="text" class="form-control" placeholder="+46(0)76010101" required>
                </label>
              </div>
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
            
      
`}


     
      </div> 
    
      
    `;
  }

}