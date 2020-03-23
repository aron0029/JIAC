
class Salj extends Base {

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
      INSERT INTO saljFormular (firstName, lastName, email, phoneNr, message, livingArea) VALUES($firstName, $lastName, $email, $phoneNr, $message, $livingArea)
    `, formData);
    // Update the "flag" formSent
    this.formSent = true;
    // Now render again so that the screen updates
    this.render();
  }

  render() {
    return /*html*/`
       <div class="row" route="/salj" page-title="Sälj">
        <div class="col-12">
          <h1>
          <span>Sälj din bostad med Dhyr och Rumson</span>
          </h1>
          <p>På Dhyr och Rumson vet vi vad som krävs för att göra en riktigt bra bostadsaffär. Förutom att vi har skickliga mäklare, mycket god lokalkännedom och vårt köparregister Boagenten, så prioriterar vi alltid kundens önskemål. Oavsett om du är redo att sälja nu eller i framtiden så kommer vi gärna hem till dig för att göra en värdering av din nuvarande bostad. Det är helt kostnadsfritt och du förbinder dig inte till något.
            <div class="myline"></div>




            <h2 class="headline">Jag önskar att boka en värdering!</h2>

            <p>Vill du veta mer om hur vi kan hjälpa dig med din bostadsaffär? Fyll i formuläret, så kontaktar vi dig.</p>

          <br>
            Boka en värdering!</p>
  

${this.formSent ? /*html*/`
            <div class="col-12" ><center>
              <h1 class="display-3">Tack för din återkoppling</h1>
            </div>
           ` :/*html*/`

           
            <form submit="collectFormData">

              <div class="form-group">


              <div class="form-group">
              <label for="exampleFormControlInput1">Namn</label>
              <input name="firstName" class="form-control" placeholder="Namn">
              </div>

              <div class="form-group">
              <label for="exampleFormControlInput1">EfterNamn</label>
              <input name="lastName" class="form-control" placeholder="Efternamn">
              </div>

              <label for="exampleFormControlInput1">Email address</label>
              <input name="email" class="form-control" placeholder="name@example.com">
            </div>

              <div class="form-group">
              <label for="exampleFormControlInput1">Telefonnummer</label>
              <input name="phoneNr" class="form-control" placeholder="+46073000000">
              </div>
          

              <div class="form-group">
              <label for="exampleFormControlSelect1">Vart bor du?</label>
              <select name="livingArea" class="form-control">
                <option>Östermalm</option>
                <option>Södermalm</option>
                <option>Vasastan</option>
              </select>
            </div>

               <div class="form-group">
              <label for="exampleFormControlTextarea1">Skriv en förklaring av din bostad.</label>
              <textarea name="message" class="form-control" rows="3"></textarea>
              <br>
            


              <input class="btn btn-secondary float-left" type="submit" value="Skicka">
            </form>
          </div>
           </div>
          
`}


      `;
  }
}
