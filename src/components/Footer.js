import React from 'react'
import sapLogo from '../assets/sap-footer-logo.svg'

function Footer() {
  return (
    <footer className="footer">
      <h1 className="footer-heading text-2xl"> Contact us </h1>
      <div className="footer-container">
        <div className="footer-card">
          <p> INDIA </p>
          <h6 className="text-md font-bold"> 1800 419 4919 </h6>
        </div>
        <div className="footer-card">
          <p> OUTSIDE INDIA </p>
          <h6 className="text-md font-bold"> +91 - 8061799200 </h6>
        </div>
        <div className="footer-card">
          <p> GLOBAL INDIA </p>
          <h6 className="text-md font-bold"> info @kredx.com </h6>
        </div>
        <div className="footer-card">
          <p> FOR MEDIA ENQUIRIES </p>
          <h6 className="text-md font-bold"> pr @kredx.com </h6>
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
