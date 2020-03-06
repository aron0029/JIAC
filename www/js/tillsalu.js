class Tillsalu extends Base {
  filterHousesByLocation(houses, keyword) {
    filteredHouses = houses.filter(a => a.location === keyword);
    return filteredHouses;
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