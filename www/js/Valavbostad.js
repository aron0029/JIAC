class Valavbostad extends Base {


  render() {

    return /*html*/`
        <div class="row" route="/Valavbostad" page-title="valavbostad">
        <h2>${this.streetName} + " " + ${this.streetNumber}</h2>
          <div class="col-12">
          <p> detta bostad finns på: ${this.streetName} </p>
          <p>${this.zip.code}</p>
            </div>
  `
  }
}