class App extends Base {

  mount() {
    this.navBarLinks = [
      { label: 'Välkommen', route: '/' },
      { label: 'About us', route: '/om oss' }
      , { label: 'Kontktaoss', route: '/kont' }
    ];
    this.navBar = new NavBar({ links: this.navBarLinks });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.aboutUsPage = new AboutUsPage();
    this.missingPage = new MissingPage();
    this.KOntaktaoss = new Kontaktaoss();
  }

  render() {
    return /*html*/`
      <div base-title="Minimal: ">
        <header>
          ${this.navBar}
        </header>
        <main class="container my-4">
          ${this.startPage}
          ${this.aboutUsPage}
          ${this.missingPage}
          ${this.Kontaktaoss}
        </main>
        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
  }

}