class ShoppingCart extends Base {

  mount() {
    // Remember if the modal is to be shown or not
    this.shown = false;
  }

  show() {
    this.shown = true;
    this.render();
  }

  hide() {
    this.shown = false;
    this.render();
  }

  checkout() {
    this.shown = false;
    this.render();
    // actually going to the checkout page
    // is done by the fact that this button is a link...
  }

  empty() {
    store.cart = [];
    store.save();
    this.render();
    this.show();
  }
  

  render() {
    // Needed to stop scrolling when the modal is shown
    setTimeout(() => $('body')[this.shown ? 'addClass' : 'removeClass']('modal-open'), 0);
    // Render the cart
    return /*html*/`
        <div class="row" route="/shoppingCart" page-title="ShoppingCart">
        <div class="col text-right text-right">
        <div class="card">
        <div class="card-body">
        <img class="card-img-top" src="/images/Logo/HUS logo.jpg" style="width: 60px; height: 60px"></h1>
        <a href="https://twitter.com/?lang=sv" class="fa fa-twitter" style="width: 20px; height: 20px"></a>    
        <img class="card-img-top" src="/images/Logo/shopping cart.png" style="width: 80px; height: 60px"></a>
        </div>

        <div not-route="/checkout">
        <div class="cart-in-menu" click="show">
          <h1>
            <i class="icofont-shopping-cart"></i>
        </div>
        <div class="modal-backdrop ${this.shown ? 'show' : 'd-none'}"></div>
        <div class="modal shopping-cart ${this.shown ? 'd-block open' : ''}" tabindex="-1" role="dialog">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">
                  <span><i class="icofont-shopping-cart"></i></span>
                  Your shopping cart 
                </h5>
                <button type="button" class="close" click="hide">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
              <h6 class="modal-title">
              <span><i class="icofont-shopping-cart"></i></span>
              Your shopping cart is empty
            </h6>
              </div>
              <div class="modal-footer">
                 <button type="button" class="btn btn-secondary" click="hide">Continue shopping</button>
      
                 <button type="button" class="btn btn-secondary" click="empty">Empty cart</button>
                  <a role="button" class="btn btn-primary" href="/checkout" click="checkout">Checkout</a>
                  

                  `;
            }
          }