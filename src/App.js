import React from 'react'
import './utils/reset.css'
import './style.css'
import { Navbar, Card, Footer, Form } from './components'
import bannerImg from './assets/1.png'
import { cardDetails } from './utils/data'
export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="banner"></div>
      <img src={bannerImg} alt="Banner Image" className="banner-img" />
      <main>
        <Form />
        <h1 className="home-heading">
          Why <span className="heading-primary text-primary">KredX</span> For
          Invoice Discounting?
        </h1>
        <section className="card-container">
          {cardDetails.map((cardDetail, index) => (
            <Card cardDetail={cardDetail} key={index} />
          ))}
        </section>
        <section className="mid-section">
          <h5 className="text-xl">HELPING BUSINESS OWNERS SINCE 2015</h5>

          <div className="mid-container">
            <div className="mid-card">
              <p className="text-xl">1 Million</p>
              <p className="text-primary text-md">Invoices Discounted</p>
            </div>
            <div className="mid-card">
              <p className="text-xl">$4 Billion</p>
              <p className="text-primary text-md">
                Transaction Value Processed
              </p>
            </div>
            <div className="mid-card">
              <p className="text-xl">2 Million</p>
              <p className="text-primary text-md">
                Transactions Processed till Date
              </p>
            </div>
            <div className="mid-card">
              <p className="text-xl">23,000+</p>
              <p className="text-primary text-md">Business Helped</p>
            </div>
            <div className="mid-card">
              <p className="text-xl">70,000+</p>
              <p className="text-primary text-md">New & Returning Investors</p>
            </div>
            <div className="mid-card">
              <p className="text-xl">225+</p>
              <p className="text-primary text-md">
                Corporates on KredX Platform
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
