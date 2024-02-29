import React from "react";
import './Slid.css';
import slid1 from "./Imge/slid1.jpg";
import slid2 from "./Imge/slid2.jpg";
import slid3 from "./Imge/slid3.jpg";

const Slid = () => {
  return (
    <div className="container">
    <div id="carouselExampleCaptions" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={slid1} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-md-block">
          <button type="button" class="btn btn-outline-light rounded-0 m-4 btn-lg">Read More</button>
            <button type="button" className="btn btn-danger rounded-0 m-4 btn-lg">Apply Now</button>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slid2} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-md-block">
          <button type="button" class="btn btn-outline-light rounded-0 m-4 btn-lg">Read More</button>
            <button type="button" className="btn btn-danger rounded-0 m-4 btn-lg">Apply Now</button>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={slid3} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-md-block">
          <button type="button" class="btn btn-outline-light rounded-0 m-4 btn-lg">Read More</button>
            <button type="button" className="btn btn-danger rounded-0 m-4 btn-lg">Apply Now</button>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
  );
};

export default Slid;
