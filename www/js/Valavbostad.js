class Valavbostad extends Base {


  render() {

    return /*html*/`
       <div route="/Valavbostad" page-title="valavbostad">
        <h2>${this.streetName} + " " + ${this.streetNumber}</h2>
        
          <p> detta bostad finns på: ${this.streetName} </p>
          <p>${this.zip.code}</p>
            </div>
  `
  }
}