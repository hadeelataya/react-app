import React from 'react'
import img1 from '../../Assets/images/poert1.png';
import img2 from '../../Assets/images/port2.png';
import img3 from '../../Assets/images/port3.png';


export default function Portfolio() {
  return (
    <>
      <div
        class="text-center pt-4 py-5 my-5"
        style={{ color: "rgb(44, 62, 80)" }}
      >
        <h2 class="text-uppercase mb-3 fs-1 fw-bolder py-5">
          portfolio component
        </h2>
        <div class="d-flex align-items-center justify-content-center mb-2">
          <div
            class="line me-3"
            style={{ backgroundColor: "rgb(44, 62, 80)" }}
          ></div>
          <i class="fa-solid fa-star fs-2"></i>
          <div
            class="line ms-3"
            style={{ backgroundColor: "rgb(44, 62, 80)" }}
          ></div>
        </div>
      </div>

      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img
                alt=""
                class="w-100 rounded-3"
                src={img1}
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img
                alt=""
                class="w-100 rounded-3"
                src={img2}
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img
                alt=""
                class="w-100 rounded-3"
                src={img3}
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img
                alt=""
                class="w-100 rounded-3"
                src={img1}
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img
                alt=""
                class="w-100 rounded-3"
                src={img2}
              />
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="rounded-3 overflow-hidden position-relative">
              <img
                alt=""
                class="w-100 rounded-3"
                src={img3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
