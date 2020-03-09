class valavbostad extends Base {

  async mount() {
    // Get basic info about the books in the category
    // (enough to list them)
    this.books = await sql(/*sql*/`
      SELECT id, title FROM books WHERE categoryId = $categoryId
    `, {
      categoryId: this.id
    });
  }
}