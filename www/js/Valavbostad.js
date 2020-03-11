class Valavbostad extends Base {


  render() {

    return /*html*/`
       <div route="/Valavbostad">
        <h2>${this.region} ${this.areaId} ${this.community}</h2>
          <p> detta bostad finns på: ${this.county} </p>
          <p>${this.association}</p>
            </div>
  `

  }





}
