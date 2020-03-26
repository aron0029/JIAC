class NavBar extends Base {

  render() {
    return /*html*/`
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <img class="img-fluid" src="/images/drlogo13.png" style="width:123px; height:90px">
        <a class="navbar-brand" href="/">DHYR & RUMSON</a>
        <img src ="" style="width: 10rem;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="nav navbar-nav navbar-center">
            ${this.links.map(link => !link.dropdown ? /*html*/`
              <li class="nav-item">
                <a class="nav-link" href="${link.route}">
                  ${link.label}
                </a>
              </li>
          ` : /*html*/`
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="${link.route}"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  ${link.label}
                </a>
                <div class="dropdown-menu scrollable-menu" aria-labelledby="navbarDropdownMenuLink">
                  ${link.dropdown.map(item => /*html*/`
                    <a class="dropdown-item" href="${item.route}">${item.label}</a>
                  `)}
                </div>
              </li>
          `)}
          </ul>
        </div>
      </nav>
    `
  }

}