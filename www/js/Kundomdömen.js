class Kundomdomen extends Base {

  render() {
    return /*html*/`
        <div class="row" route="/kundomdomen" page-title="Kundomdömen">
          <div class="col-12">
          <h1>Lämna gärna ditt omdöme på oss!</h1>
            <p></p>
          </div>

          <!DOCTYPE html>
          <html lang="en">
          
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              <link rel="stylesheet" href="css/Style.css">
              <title>Formulär</title>
          
          </head>
          
          
          <body>
              <form id="form" name="form" method="post" action=" ">
          
                  Förnamn:<br />
                  <input type="text" name="fnamn" id="fnamn" /> <br /> Efternamn:
          
                  <br />
                  <input type="text" name="enamn" id="enamn" /> <br /> E-postadress:
          
                  <br />
                  <input type="text" name="epost" id="epost" /> <br /> Meddelande:
          
                  <br />
                  <textarea name="meddelande" id="meddelande" cols="45" rows="5"></textarea> <br /> Adress:
                  <br />
                  <textarea name="kommun" id="kommun" cols="60" rows="6"></textarea> <br />
          
                  <select name="kommun"> 
                  <option value="södermalm">Södermalm</option>   
                  <option value="vasastan">Vasastan</option>  
                  <option value="östermalm">Östermalm</option>  
                  <option value="mer">Mer</option>
                  </select>
          
                  <input type="submit " name="skicka " id="skicka " value="Skicka meddelandet " question="vilket nordisk land " />
          
              </form>

              <p> Observera att själva formuläret inte syns. </p>

              <p> Observera också att standardbredden för ett textinmatningsfält är 30 tecken. </p>
          
              <h1>Telefon: 0046-12345678910</h1>
              <h2>Adress: Centralplan 15, 111 20 Stockholm, Sverige.</h2>
              <h3>DHYR & RUMSON</h3>
              <h4>Upphovsrätt 2020</h4>
          
          </body>
          
          
          
          </html>

        </div>
      `;
  }
}