class Realtors extends Base {

  render() {

    return /*html*/`
      <div route="/varamaklare">
        <h5>${this.firstName} ${this.lastName}</h5>
        <p>Kontakta mig</p>
        <h4>Mejla mig</h4>
        <p>${this.email}</p>
        <h4>Ring mig</h4>
        <p>${this.phoneNr}</p>
      </div>
    `


  }



}