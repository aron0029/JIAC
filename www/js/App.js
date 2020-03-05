class App extends Base {

  mount() {
    this.navBarLinks = [
      { label: 'Välkommen', route: '/' },
      { label: 'About us', route: '/About-Us' },
      { label: 'Kontakta oss', route: '/kontaktaoss' },
    ];
    this.navBar = new NavBar({ links: this.navBarLinks });
    this.footer = new Footer();
    this.startPage = new StartPage();
    this.aboutUsPage = new AboutUsPage();
    this.missingPage = new MissingPage();
    this.kontaktaoss = new Kontaktaoss();
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
          ${this.kontaktaoss}
        </main>
        ${this.footer}
        ${this.shoppingCart}
      </div>
    `;
  }

}