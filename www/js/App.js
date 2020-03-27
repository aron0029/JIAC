class App extends Base {

  async mount() {

    this.navBarLinks = [
      { label: 'VÄLKOMMEN', route: '/' },
      { label: 'KÖPA BOSTAD', route: '/kopa-bostad' },
      { label: 'SÄLJA BOSTAD', route: '/salj' },
      { label: 'VÅRA MÄKLARE', route: '/varamaklare' },
      { label: 'KONTAKTA OSS', route: '/kontaktaoss' },
    ];

    this.navBar = new NavBar({ links: this.navBarLinks });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.tillSalu = new Tillsalu();
    this.missingPage = new MissingPage();
    this.salj = new Salj();
    this.realtors = new Realtors();
    this.objekt = new Objekt();
    this.kontaktaoss = new Kontaktaoss();


    await sql(/*sql*/`
          USE databas
        `);




    //  await sql(/*sql*/`
    //        USE databas
    //      `);
    //  this.tillSalu = await sql(Tillsalu,/*sql*/`
    //    SELECT * FROM Address 
    //    `);


  }

  render() {
    return /*html*/`
      <div base-title="Minimal: ">
        <header>
        
          ${this.navBar}

        </header>
        <main class="container my-4">
          ${this.startPage}
          ${this.tillSalu}
          ${this.missingPage}
          ${this.salj}
          ${this.realtors}
          ${this.valavbostad}
          ${this.objekt}
          ${this.kontaktaoss}
         

        </main>
        ${this.footer}

      </div>
      
    `;
  }

}