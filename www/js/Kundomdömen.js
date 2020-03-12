class Kundomdomen extends Base {

  render() {
    return /*html*/`
        <div class="row" route="/kundomdomen" page-title="Kundomdömen">
          <div class="col-12">
          <h1>Lämna gärna ditt omdöme på oss!</h1>
            <p></p>
          </div>


          
          
          <body>
              <form id="form" name="form" method="post" action=" ">
          
                  Förnamn:<br />
                  <input type="text" name="fnamn" id="fnamn" /> <br /> Efternamn:
          
                  <br />
                  <input type="text" name="enamn" id="enamn" /> <br /> E-postadress:
          
                  <br />
                  <input type="text" name="epost" id="epost" /> <br /> Meddelande:
          
                  <br />
                  <textarea name="meddelande" id="meddelande" cols="45" rows="5"></textarea> <br/> 
          
                  
                  <button type="button" class="btn btn-primary">Skicka</button>
              </form>
             

              <h2> Observera att standardbredden för ett textinmatningsfält är 30 tecken. </h2>
              <h3> Telefon: 0046-12345678910 </h3>
              <h4> Adress: Centralplan 15, 111 20 Stockholm, Sverige. </h4>
              <h5> Upphovsrätt 2020 </h5>  
              <br> DHYR & RUMSON <br/>
          </body>
          
          
          
          </html>

        </div>
      `;
  }
}