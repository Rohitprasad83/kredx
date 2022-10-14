import React from 'react'
import sapLogo from '../assets/sap-footer-logo.svg'

function Footer() {
  return (
    <footer>
      <h1> Contact us </h1>
      <div>
        <div>
          <p> INDIA </p> <h6> 1800 419 4919 </h6>
        </div>
        <div>
          <p> OUTSIDE INDIA </p> <h6> +91 - 8061799200 </h6>
        </div>
        <div>
          <p> GLOBAL INDIA </p> <h6> info @kredx.com </h6>
        </div>
        <div>
          <p> FOR MEDIA ENQUIRIES </p> <h6> pr @kredx.com </h6>
        </div>
      </div>
      <div className="footer-end">
        <img src={sapLogo} alt="sap logo" />
        <p> ©2022 Minions Ventures Pvt Ltd </p>
      </div>
    </footer>
  )
}

export { Footer }
