import React from "react";
import "./Teamslid.css";
import mukesh from "./Teamslid_img/my1.jpeg";
import rajesh from './Teamslid_img/RAJESH1.jpeg'

const Teamslid = () => {
  return (
    <div className="container">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner carousel-inner-img">
        <div class="carousel-item active d-sm-flex ">
          <img src={mukesh} class="d-block teamslid-img" alt="..." />
          <div className="teamslid-about w-50 ms-4">
            <h2 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error dolor nesciunt non, molestiae eveniet dignissimos sit enim tempore unde.</h2>
            <p className="text-white">GIRIJESH TRIPATHI, WEB DEVELOPER</p>
          </div>
        </div>
        <div class="carousel-item d-sm-flex">
          <img src={rajesh} class="d-block  teamslid-img" alt="..." />
          <div className="teamslid-about w-50 ms-4">
            <h2 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error dolor nesciunt non, molestiae eveniet dignissimos sit enim tempore unde.</h2>
            <p className="text-white">GIRIJESH TRIPATHI, WEB DEVELOPER</p>
          </div>
        </div>
        <div class="carousel-item d-sm-flex ">
          <img src={mukesh} class="d-block teamslid-img" alt="..." />
          <div className="teamslid-about w-50 ms-4">
            <h2 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error dolor nesciunt non, molestiae eveniet dignissimos sit enim tempore unde.</h2>
            <p className="text-white">GIRIJESH TRIPATHI, WEB DEVELOPER</p>
          </div>
        </div>
      </div>
      <div className="left-right-button text-center">
        <button class="carousel-control-prev  left-button" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next  right-button " type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Teamslid;
