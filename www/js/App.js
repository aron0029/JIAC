class App extends Base {

  async mount() {


    this.navBarLinks = [
      { label: 'Välkommen', route: '/' },
      { label: 'Till salu', route: '/till-salu' },
      { label: 'Kontakta oss', route: '/kontaktaoss' },
      { label: 'Sälj', route: '/salj' },
      { label: 'Kundomdömen', route: '/kundomdomen' },
      { label: 'Våra mäklare', route: '/varamaklare' },
    ];

    this.navBar = new NavBar({ links: this.navBarLinks });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.tillSalu = new Tillsalu();
    this.missingPage = new MissingPage();
    this.kontaktaoss = new Kontaktaoss();
    this.salj = new Salj();
    this.kundomdomen = new Kundomdomen();
    this.realtors = new Realtors();


    await sql(/*sql*/`
          USE databas
        `);

    //get all hobbies
    this.realtors = await sql(Realtors, /*sql*/`
          SELECT * FROM Realtor
        `);





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
          ${this.kontaktaoss}
          ${this.salj}
          ${this.kundomdomen}
          ${this.realtors}
        </main>
        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
  }

}