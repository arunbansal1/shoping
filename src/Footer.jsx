export default function Footer(){
    return <footer>
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-3 col-sm-6 mb-4">
          <h4>Quick Links</h4>
          <ul>
            <li>
              Top Categories
            </li>
            <li>
              Sale
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <h4>Programs</h4>
          <ul>
            <li>
              New Arrivals
            </li>
            <li>
              Top Sellers
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <h4>Resourses</h4>
          <ul>
            <li>
              FAQ
            </li>
            <li>
              Return Policy
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-sm-6 mb-4">
          <h4>Quick Support</h4>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              <a href="mailTo:Support@exampleCompany.com">Support@example.com</a>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
              <a href="tel:+917837291830">+91 7837291830</a>
            </li>
          </ul>
        </div>
      </div>

    </div>
    <div className="copyright text-center">
      Copyright © 2023. Example company private limited
    </div>
  </footer>
}