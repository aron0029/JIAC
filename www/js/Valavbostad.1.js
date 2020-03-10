class Valavbostad extends Base {

  async sqlQueries() {
    // Which database to use
    await sql(/*sql*/`
      USE databas
    `);
    // Create category pages from a db query
    this.Resedence = await sql(this.Resedence, /*sql*/`
      SELECT * FROM Residence
    `);
  }

  render() {

    return /*html*/`
        <div class="row" route="/Valavbostad" page-title="valavbostad">
          <div class="col-12">
        <div route = "/${this.name}" >
            <h2>${this.address} + " " + ${this.streetName}</h2>
            <p>Mitt namn är: ${this.StreetName}</p>
            <h4>Mejla mig</h4>;
  `;
  }
}