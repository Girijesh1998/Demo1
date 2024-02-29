import React from 'react';
import course1 from './Course-iomg/1.jpg'
import course2 from './Course-iomg/3.png'
import course3 from './Course-iomg/4.png'
import './Course.css'

const Course = () => {
  return (
    <>
      <div className="container text-center">
        <div className="row d-md-flex">
          <div className="col-md-4">
            <div class="card bordered-2">
              <img src={course1} class="card-img-top w-75 mt-3 ms-5" alt="..." />
              <div class="card-body text-center">
                <p className='fw-bold'>Python Full Stack course</p>
                <p className='text-bold'> Price : 12000 <span className='ms-4 text-decoration-line-through'> 20000</span></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card bordered-2">
              <img src={course2} class="card-img-top mt-3 " alt="..." />
              <div class="card-body text-center">
                <p className='fw-bold'>Java Full Stack course</p>
                <p className='text-bold'> Price : 12000 <span className='ms-4 text-decoration-line-through'> 20000</span></p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="card bordered-2">
              <img src={course3} class="card-img-top mt-3 me-3" alt="..." />
              <div class="card-body text-center">
                <p className='fw-bold'>React.js course</p>
                <p className='text-bold'> Price : 12000 <span className='ms-4 text-decoration-line-through'> 20000</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Course