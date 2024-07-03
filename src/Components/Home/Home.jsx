import React from 'react'
import './Home.css'
import logo from "../../asset/nubl-removebg-preview.png";

export default function Home() {
  return (
    <>
      <div className="containerr">
        <div className="head">
          <div className="domain">
            <p>nublksa.com</p>
          </div>
          <div className="soon">
            <p>..قـريباً</p>
          </div>
        </div>
        <div className="content">
          <div className="logo">
            <img src={logo} alt="logo" className="" />
          </div>
          <h2>
            <span>nubl</span> نُـبـــل
          </h2>
          <p>نُبل ... من فكرة إلى كيان</p>
        </div>
      </div>
    </>
  );
}
