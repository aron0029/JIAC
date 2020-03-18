class Objekt extends Base {

  async mount() {
    //hör ska info från databasen hämtas
    let info = await sql(/*sql*/`
    SELECT * FROM Address *, Amenities *, Area
     *, Residence AND Pics 
     `, {
      addressId: this.title

    });
    Object.assign(this, Adress, Amenities, Area
      , Residence, Pics)
  }





  render() {

    return /*html*/`
    <div route="/objekt/"${ this.Address} page - title="${this.title}" >
      <div class="row">
        <div class="col">
          <h5>
            tillsalu: <a href="/databas/address/${this.Residence}">${this.Area}</a>
            </h5>
        <h1>${this.title}</h1>
        <h4 class="mb-3">${this.Address}</h4>
        <div class="row mb-3">
          <div class="col-lg-3 mb-3 mb-lg-0 order-lg-last">
          </div>
          <div class="col-12 d-md-none pl-4 mb-3">
            <img class="img-fluid w-100 bg-secondary book-image" src="/images/södermal/${this.picid}.jpg">
              </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
              <span class="badge badge-secondary p-3 w-100">Hus info: ${this.Residence}</span>
            </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
              <span class="badge badge-secondary p-3 w-100">området: ${this.Area}</span>
            </div>
          </div>
          <div class="row mt-n4 mt-lg-0">
            <div class="col-md-12">
`

  }
}