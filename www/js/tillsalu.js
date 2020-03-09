class Tillsalu extends Base {
  async mount() {
    sql(/*sql*/`USE databas`);
  }

  async search() {
    this.result = await sql(/*sql*/`

    SELECT * FROM Residence
    JOIN Pics
    ON Residence.residenceId = Pics.residenceId
    WHERE Kvm >= $minArea
    AND Kvm <= $maxArea
    AND price >= $minPrice
    AND price <= $maxPrice
  `, {
      minArea: 20,
      maxArea: 100,
      minPrice: 200000,
      maxPrice: 20000000

    });
  }

  render() {
    return /*html*/`
        <div class="row" route="/till-salu" page-title="Till salu">
          <div class="col-12">
            <h1>Till salu</h1>
              <p>Här finner du alla våra bostäder som är till salu.</p>
        </div>
      </div>
    `;
  }

}