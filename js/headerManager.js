class specialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container">
        <a href="index.html" id="logo"
          ><img src="images/SSLogo.png" width="200" height="100" alt="" title=""
        /></a>
        <div id="menubar" class="container">
          <li class="active"><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li>  <a href="ourgirls.html">Our Girls</a></li>
          <li><a href="ourboys.html">Our Boys</a></li>
          <li><a href="kittens.html">Kittens</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="links.html">Links</a></li>
        </div>
      </div>`
}
}
customElements.define('special-header',specialHeader)