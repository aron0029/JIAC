class App extends Base {

  mount() {
    this.navBarLinks = [
      { label: 'Välkommen', route: '/' },
      { label: 'Till salu', route: '/till-salu' },
      { label: 'Kontakta oss', route: '/kontaktaoss' },
      { label: 'Sälj', route: '/salj' },
      { label: 'Kundomdömen', route: '/kundomdomen' },
    ];
    this.navBar = new NavBar({ links: this.navBarLinks });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.tillSalu = new Tillsalu();
    this.missingPage = new MissingPage();
    this.kontaktaoss = new Kontaktaoss();
    this.salj = new Salj();
    this.kundomdomen = new Kundomdomen();
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
        </main>
        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
  }

}