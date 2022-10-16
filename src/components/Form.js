import React, { useState } from 'react'
import logo from '../assets/sticky-logo.svg'
function Form() {
  const [next, setNext] = useState(false)
  return (
    <form id="form">
      {!next ? (
        <>
          <p className="text-xl font-bold">Lorem Ipsum is simply dummy</p>
          <p>text of the printing and typesetting industry.</p>
          <div className="form-part1">
            <select name="" id="" className="form-input">
              <option value="industryName">Industry Name</option>
              <option value="industryName">Industry Name 2</option>
              <option value="industryName">Industry Name 3</option>
              <option value="industryName">Industry Name4</option>
            </select>
            <div className="form-input-group">
              <input
                type="text"
                placeholder="Invoice Value"
                name="invoice-value"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Tenure"
                name="invoice-tenure"
                className="form-input"
              />
            </div>
          </div>
          <button
            type="button"
            className="btn-primary"
            onClick={() => setNext(true)}>
            Next →
          </button>
        </>
      ) : (
        <>
          <div className="form-part2">
            <img src={logo} alt="Logo" className="form-logo" />
            <input
              type="text"
              placeholder="Name of the industry"
              className="form-input bg-grey"
            />
            <input
              type="text"
              placeholder="Name of the individual"
              className="form-input bg-grey"
            />
            <input
              type="email"
              placeholder="Email"
              className="form-input bg-grey"
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="form-input bg-grey"
            />
          </div>
          <div className="btn-group">
            <button
              type="button"
              onClick={() => setNext(false)}
              className="btn-previous">
              {'<'} Previous
            </button>
            <button type="submit" className="btn-submit">
              SUBMIT →
            </button>
          </div>
        </>
      )}
    </form>
  )
}

export { Form }
