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
                  <textarea name="meddelande" id="meddelande" cols="45" rows="5"></textarea> <br /> 
          
                  <select name="kommun"> 
                  <option value="södermalm">Södermalm</option>   
                  <option value="vasastan">Vasastan</option>  
                  <option value="östermalm">Östermalm</option>  
                  </select>
          
                  <input type="submit " name="skicka " id="skicka "question="vilket nordisk land " />
                  <button type="button" class="btn btn-primary">Skicka</button>
              </form>
             

              <p> Observera att själva formuläret inte syns. </p>

              <p> Observera också att standardbredden för ett textinmatningsfält är 30 tecken. </p>
          
              <p>Telefon: 0046-12345678910</p>
              <br> <br/>
              <p>Adress: Centralplan 15, 111 20 Stockholm, Sverige.</p>
              
              <p>DHYR & RUMSON</p>
              
              <p>Upphovsrätt 2020</p>
          
          </body>
          
          
          
          </html>

        </div>
      `;
  }
}