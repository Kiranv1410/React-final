import React from "react"

const Footer = () => <footer style={{border:'2px solid black',marginTop:'40px',borderRadius:'10px',background:'#20083c',color:'whitesmoke'}}  className="page-footer font-small blue pt-4">
    <div  className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 id="foot" className="text-uppercase"> <b>LAPSTORE</b> </h5>
                <p>One solution for All Your Laptops</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Follow us</h5>
                <ul className="list-unstyled">
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>LinkedIn</li>
                    <li>Twitter</li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Stay in touch</h5>
                <ul className="list-unstyled">
                    <li>sales@example.com</li>
                    <li>support@example.com</li>
                    <li>(123) 456-789</li>
                    
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2024 Copyright:LAPSTORE.com
    </div>

</footer>

export default Footer