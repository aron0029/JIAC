
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
      INSERT INTO saljFormular (email,phone, message) VALUES($email,$phone,
      $message) `, formData);
    this.formSent = true;
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
            <h2 class="headline">Jag önskar boka en värdering!</h2>

            <p>Vill du veta mer om hur vi kan hjälpa dig med din bostadsaffär? Fyll i formuläret, så kontaktar vi dig.</p>

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
              <input name="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Telefonnummer</label>
              <input name="phone" class="form-control" id="exampleFormControlInput1" placeholder="+46073000000">
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
              <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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
