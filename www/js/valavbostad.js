class Valavbostad extends Base {

  async mount() {
    // Get basic info about the books in the category
    // (enough to list them)
    this.databas = await sql(/*sql*/`
      SELECT id, title FROM books WHERE categoryId = $categoryId
    `, {
      categoryId: this.id
    });
  }
}