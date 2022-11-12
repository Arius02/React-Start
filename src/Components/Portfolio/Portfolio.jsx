import React from 'react'
import styles from './Portfolio.module.css'
import cabin from '../../img/cabin.png'
import cake from '../../img/cake.png'
import circus from '../../img/circus.png'
import game from '../../img/game.png'
import safe from '../../img/safe.png'
import submarine from '../../img/submarine.png'
import $ from 'jquery'
export default function Portfolio() {
  return (
    <>
      <section className='portfolio p-5'>
        <div className='container py-5'>
          <h2 className= {`${styles.portColor} fw-bold fs-1 text-center`}>PORTFOLIO</h2>
          <div className= "d-flex justify-content-center mb-4  align-items-center">
              <div className='line me-3 dark-line'></div>
              <div>
                <i class= {`${styles.portColor} fa-solid fa-star  fa-2x`}></i>
              </div>
              <div className='line ms-3  dark-line'></div>
            </div>
          <div className="row gy-4 gx-5 mt-4">
          <div className="col-lg-4 col-md-6">
            <figure  className='position-relative'>
                <img src={cabin} className="w-100"  alt=""/>
                <figcaption data-bs-toggle="modal" data-bs-target="#cabin" className={`${styles.fig} position-absolute d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus fa-5x  text-white"></i>
                </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6">
            <figure  className='position-relative'>
                <img src={cake} className=" w-100 rounded " alt="mnbhjok" />
                <figcaption data-bs-toggle="modal" data-bs-target="#cake" className={`${styles.fig} position-absolute d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus fa-5x  text-white"></i>
                </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6">
            <figure  className='position-relative'>
                <img src={circus} className=" w-100 rounded " alt="" />
                <figcaption data-bs-toggle="modal" data-bs-target="#circus" className={`${styles.fig} position-absolute d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus fa-5x  text-white"></i>
                </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6">
            <figure  className='position-relative'>
                <img src={game} className=" w-100 rounded " alt="" />
                <figcaption data-bs-toggle="modal" data-bs-target="#game" className={`${styles.fig} position-absolute d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus fa-5x  text-white"></i>
                </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6">
            <figure  className='position-relative'>
                <img src={safe} className=" w-100 rounded " alt="" />
                <figcaption data-bs-toggle="modal" data-bs-target="#safe" className={`${styles.fig} position-absolute d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus fa-5x  text-white"></i>
                </figcaption>
            </figure>
          </div>
          <div className="col-lg-4 col-md-6">
            <figure  className='position-relative'>
                <img src={submarine} className=" w-100 rounded " alt="" />
                <figcaption data-bs-toggle="modal" data-bs-target="#submarine" className={`${styles.fig} position-absolute d-flex justify-content-center align-items-center`}>
                  <i class="fa-solid fa-plus fa-5x  text-white"></i>
                </figcaption>
            </figure>
          </div>
          </div>
        </div>
      </section>
<div>

  <div className="modal fade" id="cabin" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0">
          <i className={`${styles.xmark} ms-auto d-block me-2 fa-3x fa-solid fa-xmark`} data-bs-dismiss="modal" aria-label="Close"  ></i>
        </div>
          <h3 className="modal-title m-auto  fw-bold" id="exampleModalLabel" >LOG CABIN</h3>
         <div className= "d-flex justify-content-center mb-4  align-items-center">
              <div className='line me-3 portfolio-line'></div>
              <div>
                <i class= {`${styles.portColor} fa-solid fa-star  fa-2x`}></i>
              </div>
              <div className='line ms-3  portfolio-line'></div>
            </div>
        <div className="modal-body text-center">
          <img src={cabin} className="w-75 rounded mb-5" alt="" />
          <p className='w-75 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className="modal-footer border-0">
          <button type="button" className={`${styles.closing} btn  m-auto py-2 px-3 mb-4`} data-bs-dismiss="modal">
           <i className='fa-solid fa-xmark me-1 text-white'></i> Close Window</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="cake" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0">
          <i className={`${styles.xmark} ms-auto d-block me-2 fa-3x fa-solid fa-xmark`} data-bs-dismiss="modal" aria-label="Close"  ></i>
        </div>
          <h3 className="modal-title m-auto  fw-bold" id="exampleModalLabel" >TASTY CAKE</h3>
          <div className= "d-flex justify-content-center mb-4  align-items-center">
              <div className='line me-3 portfolio-line'></div>
              <div>
                <i class= {`${styles.portColor} fa-solid fa-star  fa-2x`}></i>
              </div>
              <div className='line ms-3  portfolio-line'></div>
            </div>
        <div className="modal-body text-center">
          <img src={cake} className="w-75 rounded mb-5" alt="" />
          <p className='w-75 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className="modal-footer border-0">
          <button type="button" className={`${styles.closing} btn  m-auto py-2 px-3 mb-4`} data-bs-dismiss="modal">
           <i className='fa-solid fa-xmark me-1 text-white'></i> Close Window</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="circus" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0">
          <i className={`${styles.xmark} ms-auto d-block me-2 fa-3x fa-solid fa-xmark`} data-bs-dismiss="modal" aria-label="Close"  ></i>
        </div>
          <h3 className="modal-title m-auto  fw-bold" id="exampleModalLabel" >CIRCUS TENT</h3>
          <div className= "d-flex justify-content-center mb-4  align-items-center">
              <div className='line me-3 portfolio-line'></div>
              <div>
                <i class= {`${styles.portColor} fa-solid fa-star  fa-2x`}></i>
              </div>
              <div className='line ms-3  portfolio-line'></div>
            </div>
        <div className="modal-body text-center">
          <img src={circus} className="w-75 rounded mb-5" alt="" />
          <p className='w-75 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className="modal-footer border-0">
          <button type="button" className={`${styles.closing} btn  m-auto py-2 px-3 mb-4`} data-bs-dismiss="modal">
           <i className='fa-solid fa-xmark me-1 text-white'></i> Close Window</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="game" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0">
          <i className={`${styles.xmark} ms-auto d-block me-2 fa-3x fa-solid fa-xmark`} data-bs-dismiss="modal" aria-label="Close"  ></i>
        </div>
          <h3 className="modal-title m-auto  fw-bold" id="exampleModalLabel" >CONTROLLER</h3>
          <div className= "d-flex justify-content-center mb-4  align-items-center">
              <div className='line me-3 portfolio-line'></div>
              <div>
                <i class= {`${styles.portColor} fa-solid fa-star  fa-2x`}></i>
              </div>
              <div className='line ms-3  portfolio-line'></div>
            </div>
        <div className="modal-body text-center">
          <img src={game} className="w-75 rounded mb-5" alt="" />
          <p className='w-75 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className="modal-footer border-0">
          <button type="button" className={`${styles.closing} btn  m-auto py-2 px-3 mb-4`} data-bs-dismiss="modal">
           <i className='fa-solid fa-xmark me-1 text-white'></i> Close Window</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="safe" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0">
          <i className={`${styles.xmark} ms-auto d-block me-2 fa-3x fa-solid fa-xmark`} data-bs-dismiss="modal" aria-label="Close"  ></i>
        </div>
          <h3 className="modal-title m-auto  fw-bold" id="exampleModalLabel" >LOCKED SAFE</h3>
          <div className= "d-flex justify-content-center mb-4  align-items-center">
              <div className='line me-3 portfolio-line'></div>
              <div>
                <i class= {`${styles.portColor} fa-solid fa-star  fa-2x`}></i>
              </div>
              <div className='line ms-3  portfolio-line'></div>
            </div>
        <div className="modal-body text-center">
          <img src={safe} className="w-75 rounded mb-5" alt="" />
          <p className='w-75 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className="modal-footer border-0">
          <button type="button" className={`${styles.closing} btn  m-auto py-2 px-3 mb-4`} data-bs-dismiss="modal">
           <i className='fa-solid fa-xmark me-1 text-white'></i> Close Window</button>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="submarine" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-header border-0">
          <i className={`${styles.xmark} ms-auto d-block me-2 fa-3x fa-solid fa-xmark`} data-bs-dismiss="modal" aria-label="Close"  ></i>
        </div>
          <h3 className="modal-title m-auto  fw-bold" id="exampleModalLabel" >SUBMARINE</h3>
          <div className= "d-flex justify-content-center mb-4  align-items-center">
              <div className='line me-3 portfolio-line'></div>
              <div>
                <i class= {`${styles.portColor} fa-solid fa-star  fa-2x`}></i>
              </div>
              <div className='line ms-3  portfolio-line'></div>
            </div>
        <div className="modal-body text-center">
          <img src={submarine} className="w-75 rounded mb-5" alt="" />
          <p className='w-75 m-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
        </div>
        <div className="modal-footer border-0">
          <button type="button" className={`${styles.closing} btn  m-auto py-2 px-3 mb-4`} data-bs-dismiss="modal">
           <i className='fa-solid fa-xmark me-1 text-white'></i> Close Window</button>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}
