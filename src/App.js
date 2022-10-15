import React from 'react'
import './style.css'
import { Navbar, Card, Footer } from './components'
import bannerImg from './assets/1.png'
import invoice1 from './assets/invoice1.svg'
import invoice2 from './assets/invoice2.svg'
import invoice3 from './assets/invoice3.svg'
import invoice4 from './assets/invoice4.svg'
import invoice5 from './assets/invoice5.svg'
import invoice6 from './assets/invoice6.svg'
export default function App() {
  const cardDetails = [
    {
      cardImage: invoice1,
      cardHeading: 'Quick Verification and Cash Flow',
      cardParagraph:
        'Verify your business instantly on the KredX platform and get funds in 24-72 hours*',
    },
    {
      cardImage: invoice2,
      cardHeading: 'Risk-free Assets',
      cardParagraph: `Get cash against your company's unpaid invoices, No need to pledge any assets`,
    },
    {
      cardImage: invoice3,
      cardHeading: 'Avoid New Debt',
      cardParagraph: `Grow your business without impacting your balance sheet`,
    },
    {
      cardImage: invoice4,
      cardHeading: 'Real-time Updates',
      cardParagraph: `Track your invoices status on the go through KredX self-serve module`,
    },
    {
      cardImage: invoice5,
      cardHeading: 'Paperless Process',
      cardParagraph: `Upload your documents and invoices easily on the KredX platform`,
    },
    {
      cardImage: invoice6,
      cardHeading: 'End-to-end Management',
      cardParagraph: `Smooth and transparent process from invoice listing to funds disbursal`,
    },
  ]

  return (
    <div>
      <Navbar></Navbar>
      <div className="banner"></div>
      <img src={bannerImg} alt="Banner Image" className="banner-img" />
      <div>
        <h1 className="home-heading">
          Why <span className="heading-primary text-primary">KredX</span> For
          Invoice Discounting?
        </h1>
        <div className="card-container">
          {cardDetails.map(cardDetail => (
            <Card cardDetail={cardDetail} />
          ))}
        </div>
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
      </div>
      <Footer />
    </div>
  )
}
