import React from 'react'
import styles from "./About.module.css";
export default function About() {
  return (
    <>
      <section className={`  ${styles.aboutContainer} py-5`}>
        <div className={`  ${styles.aboutContainer} container py-5 mt-5 `}>
          <h2 className= {`text-white fw-bold fs-1 text-center`}>About</h2>
          <div className= "d-flex justify-content-center mb-4  align-items-center">
              <div className='line me-3 bg-white'></div>
              <div>
                <i class= {` fa-solid fa-star text-white fa-2x`}></i>
              </div>
              <div className='line ms-3  bg-white'></div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div>
                      <p className='text-white lh-2 fs-5'>
                        Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius repellendus deleniti fuga, delectus fugit in possimus sed rerum hic facere consequuntur dignissimos omnis, nemo optio! Minus deleniti mollitia alias libero saepe illo at natus!
                      </p>
                </div>
            </div>
            <div className="col-md-6">
              <div>
                <p className='text-white lh-2 fs-5'>
                  You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut maxime temporibus in, dicta dignissimos iure obcaecati dolor tenetur ipsum?
                  </p>
              </div>
            </div>
      </div>
      </div>
      </section>
    </>
    )
}
