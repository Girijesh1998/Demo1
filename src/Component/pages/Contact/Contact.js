import React from 'react'
import './Contact.css'
import location from './contact_img/location.png'
import contact from './contact_img/contact.png'
import watch from './contact_img/watch.png'

const Contact = () => {
  return (
    <div id='contact mt-5'>
      <div className="row">
        <div className="col-md-5 p-3 ms-5">
          <h1>Contact Us</h1>
          <p className='fw-normal text-secondary ms-2 fs-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, mollitia?</p>
          <p className='fw-normal ext-secondary '><img src={location} className='location_icon me-3' alt="" srcset="" />Loction</p>
          <p className='fw-normal  ext-secondary'><img src={contact} className='contact_icon me-3' alt="" srcset="" />contact</p>
          <p className='fw-normal ext-secondary '><img src={watch} className='watch_icon me-3' alt="" srcset="" />Mon - Sat 8.00 - 16.00</p>
        </div>
        <div className="col-md-5 p-3 mt-2 mx-4">
          <div class="row g-3">
            <div class="col">
              <input type="text" class="form-control rounded-0" placeholder="First name" aria-label="First name" />
            </div>
            <div class="col">
              <input type="text" class="form-control rounded-0" placeholder="Last name" aria-label="Last name" />
            </div>
            <div class="col-12">
              <input type="text" class="form-control rounded-0" id="inputAddress" placeholder="Subject" />
            </div>
            <div class="col-12">
            <textarea class="form-control rounded-0" placeholder="Message" id="floatingTextarea2"/>
            </div>
          </div>
          <button type="button" class="btn btn-danger rounded-0 btn-lg mt-3 mb-3">Danger</button>
        </div>
      </div>
    </div>
  )
}

export default Contact