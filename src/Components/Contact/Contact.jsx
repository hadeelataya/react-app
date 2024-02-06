import React from 'react'

export default function Contact() {
  return (
    <>
      <form className="w-50 py-3 mx-auto mt-5">
        <h3 className="py-5 text-center fs-1 fw-bold" style={{ color: "#2C3E50" }}> CONTACT SECTION </h3>
        <div
          class="d-flex align-items-center justify-content-center mb-3">
          <i class="fa-solid fa-star px-3 fs-3" style={{ color: "#2C3E50" }}></i>
        </div>
        <label htmlFor="userName" className="position-relative top-0 __top p-3">
         
        </label>

        <input
          id="userName"
          type="text"
          placeholder="userName"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative"
        />
        <label htmlFor="userAge" className="position-relative top-0 __top p-3">
         
        </label>
        <input
          id="userAge"
          type="text"
          placeholder="userAge"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative"
       
        />
        <label
          htmlFor="userEmail"
          className="position-relative top-0 __top p-3"
        >
         
        </label>
        <input
          id="userEmail"
          type="text"
          placeholder="userEmail"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative"
        />
        <label
          htmlFor="userPassword"
          className="position-relative top-0 __top p-3"
        >
          
        </label>
        <input
          id="userPassword"
          type="text"
          placeholder="userPassword"
          name="userName"
          className="form-control border-0 border-bottom py-3 position-relative"
          
        />
        <button
          className="btn mt-4 text-white"
          style={{ backgroundColor: "#1abc9c" }}
          
        >
          {" "}
          send Message{" "}
        </button>
      </form>
    </>
  );
}
