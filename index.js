let isModalOpen = false;
let contrastToggle = false;


function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle){
    document.body.classList += " dark-theme";
  }
  else {
    document.body.classList.remove("dark-theme");
  }
}

//template_20h3knk
//service_7d8yt5s
//Q6x-iDHQJ-PT5sXW8

function contact(event) {
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");

  loading.classList += " modal__overlay--visible";

  event.preventDefault();
  emailjs
    .sendForm(
      "service_7d8yt5s",
      "template_20h3knk",
      event.target,
      "Q6x-iDHQJ-PT5sXW8"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
      console.log("completed");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly on gobindsingh2004@gmail.com"
      );
    });
}

function toggleModal(key) {
  //  toggle modal
  if (!isModalOpen) {
    document.body.classList += " modal--open";
  } else {
    document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen; 
}
