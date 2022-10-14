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
          Why <span className="heading-primary">KredX</span> For Invoice
          Discounting?
        </h1>
        <div className="card-container">
          {cardDetails.map(cardDetail => (
            <Card cardDetail={cardDetail} />
          ))}
        </div>
        <section>
          <h5>HELPING BUSINESS OWNERS SINCE 2015</h5>

          <div>
            <p>1 Million</p>
            <p>Invoices Discounted</p>
          </div>
          <div>
            <p>$4 Billion</p>
            <p>Transaction Value Processed</p>
          </div>
          <div>
            <p>2 Million</p>
            <p>Transactions Processed till Date</p>
          </div>
          <div>
            <p>23,000+</p>
            <p>Business Helped</p>
          </div>
          <div>
            <p>70,000+</p>
            <p>New & Returning Investors</p>
          </div>
          <div>
            <p>225+</p>
            <p>Corporates on KredX Platform</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}
