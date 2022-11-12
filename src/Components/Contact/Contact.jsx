import React, { useEffect } from 'react'

import styles from "./Contact.module.css"
import $ from 'jquery'


export default function Contact() {
  useEffect(()=>{
    ready()
  })
  return (
    <>
      <section className='contact py-5'>
        <div className='container mt-5 pt-5'>
          <h2 className= {` fw-bold fs-1 text-center `}>CONTACT ME</h2>
          <div className= "d-flex justify-content-center mb-4  align-items-center">
              <div className='line me-3 dark-line'></div>
              <div>
                <i class= {` fa-solid fa-star  fa-2x`}></i>
              </div>
              <div className='line ms-3  dark-line'></div>
            </div>
            <form className="">
                <div className="row gy-4 position-relative">
                  <div className="col-lg-8 mx-auto position-relative">
                    <input type="email" className="form-control px-3 border-0 border-bottom rounded-0" id="name" placeholder="Name"/>
                    <label htmlFor="name" className='mx-3 mt-3'>Name</label>
                  </div>
                  <div className="col-lg-8 mx-auto position-relative">
                    <input type="email" className="form-control px-3 border-0 border-bottom rounded-0" id="email" placeholder="Email Address"/>
                    <label htmlFor="email" className='mx-3 mt-3'>Email Address</label>
                    <p className='ms-3 text-danger warning d-none'><span className='me-2 fs-4'>•</span>Not a valid Email Address</p>
                  </div>
                  <div className="col-lg-8 mx-auto position-relative">
                    <input type="text" className="form-control px-3 border-0 border-bottom rounded-0" id="phone" placeholder="Phone Number"/>
                    <label htmlFor="phone" className='mx-3 mt-3'>Phone Number</label>
                    <p className='ms-3 text-danger warning d-none'><span className='me-2 fs-4'>•</span>Not a valid Number</p>
                  </div>
                  <div className="col-lg-8 mx-auto position-relative">
                    <textarea  id="message"  rows="10" className=' form-control px-3 border-0 border-bottom rounded-0' placeholder='Message '></textarea>
                    <label htmlFor="message" className='mx-3 mt-3'>Message</label>
                  </div>
                </div>
                <button id='submit' type='button' className='btn px-4 py-3 d-block mx-auto mt-4'>Send</button>
            </form>
            <div class={`${styles.success} alert alert-success position-absolute d-none`} role="alert">
              Your message have been sent thanks for connect us.
            </div>
        </div>
      </section>
          </>
    )
    
}

let emailFlag= false
let phoneFlag= false
let ready = ()=>{
  $("input").on("keyup", function(){
  if($(this).val() === "" ){
    $(this).siblings().removeClass("labelFloating")
    $(this).siblings(".warning").addClass("d-none")
    }else{
    $(this).siblings().addClass("labelFloating")
  $(this).siblings(".warning").removeClass("d-none");

}})
$("textarea").on("keyup", function(){
  if($(this).val() === "" ){
    $(this).siblings().removeClass("labelFloating")
  }  else{
    $(this).siblings().addClass("labelFloating")
}})

let emailReg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let phoneReg = /^01[0125][0-9]{8}$/gm

$("#email").on("keyup", function(){
  if($("#email").val().match(emailReg)){
  $(this).siblings(".warning").addClass("d-none")
  emailFlag= true
} else{
  $(this).siblings(".warning").removeClass("d-none")
  emailFlag= false
}
})
$("#phone").on("keyup", function(){
  if($("#phone").val().match(phoneReg)){
  $(this).siblings(".warning").addClass("d-none")
  phoneFlag = true
} else{
  $(this).siblings(".warning").removeClass("d-none");
  phoneFlag = false
}
})
$("#submit").on("click", function(e){
 if(emailFlag && phoneFlag === true){
    $(".alert").removeClass("d-none")
   let clear=  setTimeout(() => {
      $(".alert").addClass("d-none")
    }, 2000);
    clear()
 } else{
   e.preventDefault()

}
})
}

