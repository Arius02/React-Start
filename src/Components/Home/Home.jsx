import React from 'react'
import styles from './Home.module.css'
import mainImg from '../../img/avataaars.svg'
export default function Home() {
  return (
    <>
      <section className={` py-5 ${styles.homeContainer}`}>
      <div className="container pt-5">
        <figure className='text-center mt-5'>
          <img src={mainImg} alt="" className={`${styles.mainImg}`}/>
          <figcaption>
            <h1 className='text-white mt-4 text-center mb-2 fw-bold'>START REACT</h1>
            <div className= "d-flex justify-content-center mb-4 mt-5 align-items-center">
              <div className='line me-3 bg-white'></div>
              <div>
                <i class="fa-solid fa-star  fa-2x text-white"></i>
              </div>
              <div className='line ms-3 bg-white'></div>
            </div>
            <p className='text-white '>Graphic Artist - Web Designer - Illustrator</p>
          </figcaption>
        </figure>
      </div>
      </section>
    
    
    </>
    )
}
