// /**
// * Template Name: DevFolio
// * Updated: Mar 10 2023 with Bootstrap v5.2.3
// * Template URL: https://bootstrapmade.com/devfolio-bootstrap-portfolio-html-template/
// * Author: BootstrapMade.com
// * License: https://bootstrapmade.com/license/
// */
// (function() {
//   "use strict";

//   /**
//    * Easy selector helper function
//    */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

//   /**
//    * Easy event listener function
//    */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

//   /**
//    * Easy on scroll event listener 
//    */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

//   /**
//    * Navbar links active state on scroll
//    */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)


//
//   /**
//    * Mobile nav toggle
//    */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

//   /**
//    * Mobile nav dropdowns activate
//    */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

//   /**
//    * Scrool with ofset on links with a class name .scrollto
//    */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)




// // me done here





  
// form



const form = document.getElementById('gform');
const username = document.getElementById('username');
const email = document.getElementById('email');
const mobile = document.getElementById('mobile');
const texts = document.getElementById('text-area');
const forminputs = document.querySelectorAll('.form-control');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();

});



function checkInputs() {
    
    username.value ? setSuccessFor(username) : setErrorFor(username, 'This field is required');
    texts.value ? setSuccessFor(texts) : setErrorFor(texts, 'This field is required');
    mobile.value ? setSuccessFor(mobile) : setErrorFor(mobile, 'This field is required');
   
    const emailValue = email.value.trim();
    if(emailValue === ''){
      setErrorFor(email, 'This field is required');
    }else if(!isEmail(emailValue)){
      setErrorFor(email, 'Please enter a valid email address!');
    }else{
      setSuccessFor(email);
    }


    var i = 0;
    for(i=0;i<forminputs.length;i++){
      var element = forminputs[i];
    
      var formclass = element.classList.contains('error');
      if(formclass){
    
      form.classList.add('error_found');
        break;
      }else {
    
        form.classList.remove('error_found');
      }
    }
    
    // success message and submit
    
    var abc = form.classList.contains('error_found');
    if(abc==false){
      document.myform.submit();
    }
    
  
  


}




// onchange


function changeInputs(e) {
  
    e.value ? setSuccessFor(e) : setErrorFor(e, 'This field is required');
    if(e.id=='email'){
      const emailValue = e.value.trim();
    if(emailValue === ''){
      setErrorFor(email, 'sdsThis field is required');
    }else if(!isEmail(emailValue)){
      setErrorFor(email, 'Please enter a valid email address!');
    }else{
      setSuccessFor(email);
    }
    }
  
}





function isEmail(email){
  return /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i.test(email);

}



function setErrorFor(input, message) {
  const formControl = input.parentElement;   //form-control
  const small = formControl.querySelector('small');
  // add error message inside small
  small.innerText = message;
  // add eror class
  formControl.className = 'form-control error';
  

}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}




