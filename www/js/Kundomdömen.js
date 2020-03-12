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
                  <input type="text" name="telefon" id="telefon" /> <br /> Telefon:          
                         
                  <br />
                  <input type="text" name="epost" id="epost" /> <br /> 
                   Meddelande:
                  <br /> 
                  <textarea name="meddelande" id="meddelande" cols="45" rows="5"></textarea> 
                  <br /> 
          
                  
                  <button type="button" class="btn btn-primary">Skicka</button>
              </form>
             
          </body>
          
          
          
          </html>

        </div>
      `;
  }
}