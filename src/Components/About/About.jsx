import React from 'react'

export default function About() {
  return (
    <>
    <div className="container-fluid py-5" style={{backgroundColor: '#1ABC9C'}}> 
      <div
        class="about text-white d-flex justify-content-center align-items-center py-5"
      >
        <div>
            <div
              class="text-center pt-4 py-5"
              style={{color: 'white'}}
            >
              <h2
                class="text-uppercase mb-3 fs-1 fw-bolder py-5"
              >
                about component
              </h2>
              <div
              
                class="d-flex align-items-center justify-content-center mb-3"
              >
             
                <i class="fa-solid fa-star fs-2"></i>
              </div>
            </div>
        
          <div class="container">
            <div class="row px-5">
              <div class="col-md-6 ps-md-5 " >
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div class="col-md-6 pe-5 ">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
