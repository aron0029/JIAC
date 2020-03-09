class Valavbostad extends Base {

  async mount() {
    // Get basic info about the books in the category
    // (enough to list them)
    this.databas = await sql(/*sql*/`
      SELECT price, Kvm, rooms FROM Residence WHERE 
    `, {
      Residence: this.id
    });
  }
}