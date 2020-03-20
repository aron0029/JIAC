class Objekt extends Base {

  async mount() {

    //hör ska info från databasen hämtas
    let info = await sql(/*sql*/`
     SELECT * FROM Residence  WHERE residenceId = $id
      `, {
      id: params.id

    });
    Object.assign(this, info[0] || {});
    console.log(this)
    this.render();

  }





  render() {

    return /*html*/`
    <div route="/objekt/:id" page-Area="${this.Area}">
      <div class="row">
        <div class="col">
          <h5>
            Till salu: <a href="/databas/Address/${this.Residence}">${this.Area}</a>
            </h5>
        <h1>${this.title}</h1>
        <h4 class="mb-3">${this.Address}</h4>
        <div class="row mb-3">
          <div class="col-lg-3 mb-3 mb-lg-0 order-lg-last">
          </div>
          <div class="col-12 d-md-none pl-4 mb-3">
            <img class="" src="/images/södermal/${this.picid}.jpg">
              </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
              <span class="">Hus info: ${this.price}</span>
              <div class="col-lg-3 mb-3 mb-lg-0">
              <span class="">rum:${this.rooms}</span>
            </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
              <span class="b">området: ${this.area}</span>
            </div>
          </div>
          <div class="row mt-n4 mt-lg-0">
            <div class="col-md-12">
            </div>
`

  }
}