import React from 'react'
import styles from "./Footer.module.css"
export default function Footer() {
  return (
    <>
      <section className={styles.foot}>
        <div className="container py-5">
          <div className="row text-white gy-4">
            <div className="col-md-4">
              <div className='text-center'>
                <h4 className='fw-bold text-white'>LOCATION</h4>
                <p className='fs-5 text-center fw-semibold mt-4'>2215 John Daniel Drive Clark, MO 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className='text-center'>
                <h4 className='fw-bold text-white'>AROUND THE WEB</h4>
                <div className='d-flex justify-content-center align-items-center mt-4'>
                  <div className={`${styles.ico} rounded-circle me-3`} >
                    <a href="https://www.facebook.com/MAHUA07/" target="_blank">
                    <i className='fa-brands fa-facebook-f text-white '></i>
                    </a>
                  </div>
                  <div className={`${styles.ico} rounded-circle me-3`}>
                    <a href="https://twitter.com/Mahmoua07" target="_blank">
                    <i className='fa-brands fa-twitter text-white'></i>
                    </a>
                  </div>
                  <div className={`${styles.ico} rounded-circle me-3`}>
                    <a href="https://www.linkedin.com/in/mahmouu" target="_blank" >
                      <i className='fa-brands fa-linkedin text-white'></i>
                    </a>
                  </div>
                  <div className={`${styles.ico} rounded-circle `}>
                    <a href="https://github.com/Arius02/" target="_blank">
                    <i className='fa-brands  fa-github text-white'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className='text-center'>
                <h4 className='fw-bold text-white'>ABOUT FREELANCER</h4>
                <p className='fs-5 text-center fw-semibold mt-4'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
              </div>
            </div>
          </div>
        </div>
        <footer className="container-fluid py-3 d-flex justify-content-center">
          <p className='text-muted m-0'>Copyright © Your Website 2021</p>
        </footer>
      </section>
    </>
    )
}
