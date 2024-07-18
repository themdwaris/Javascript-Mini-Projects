const toastBtn = document.querySelector(".toastBtn");
const toastContainer = document.querySelector(".toastContainer");
const toastInput = document.querySelector(".toastInput");
const toastType = document.querySelector("#selectToast");
const horizentalPosition = document.querySelector("#horizentalPosition");
const verticalPosition = document.querySelector("#verticalPosition");
const duration = document.querySelector("#duration");

toastBtn.addEventListener("click", () => {
  const toast = document.createElement("div");

  if (horizentalPosition.value === "right") {
    toastContainer.classList.add("right");
  } else {
    toastContainer.classList.remove("right");
  }
  if (verticalPosition.value === "bottom") {
    toastContainer.classList.add("bottom");
  } else {
    toastContainer.classList.remove("bottom");
  }
  const closeToastBtn = document.createElement("span");
  closeToastBtn.innerText = ` ✖`;

  toast.classList.add(toastType.value);
  toast.innerText = ` ${toastInput.value}`;
  toastContainer.append(toast);
  toast.append(closeToastBtn);

  function removeToast() {
    
    if(toastContainer.classList.contains('right')){
        toast.classList.add("toRight");
    }else{
        toast.classList.add("toLeft");
    }
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 100);
  }
  closeToastBtn.addEventListener("click", () => {
    removeToast();
  });

  setTimeout(() => {
    removeToast();
  },(1000*parseInt(duration.value)));
  
});
