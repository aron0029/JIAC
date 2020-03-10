class Realtors extends Base {

  render() {

    return /*html*/`
      <div route="/${this.name}">
        <h2>${this.firstName} + " " + ${this.lastName}</h2>
        <p>Mitt namn är: ${this.firstName}</p>
        <h4>Mejla mig</h4>
        <p>${this.email}</p>
        <h4>Ring mig</h4>
        <p>${this.phoneNr}</p>
      </div>
    `


  }



}