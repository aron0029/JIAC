class Valavbostad extends Base {


  render() {

    return /*html*/`
       <div route="/valavbostad" >
        <h2>${this.streetName} + " " + ${this.streetNumber}</h2>
          <p> detta bostad finns på: ${this.streetName} </p>
          <p>${this.zipcode}</p>
            </div>
  `
  }
}
