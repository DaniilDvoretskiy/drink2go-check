var i=document.querySelectorAll(".slider__item"),a=document.querySelector(".slider__list"),s=document.querySelectorAll(".slider__button"),u=document.querySelectorAll(".slider__button-bullet"),n=document.querySelector(".slider__arrow-right"),o=document.querySelector(".slider__arrow-left"),e=0,r;n.addEventListener("click",f);o.addEventListener("click",h);window.addEventListener("resize",_);function _(){let t=document.querySelector(".slider");!t||i.length===0||(r=t.offsetWidth,a.style.width=`${r*i.length}px`,i.forEach(l=>{l.style.width=`${r}px`}),d())}_();function f(){o.disabled=!1,e++,e>=i.length-1&&(n.disabled=!0),d(),c(e)}function h(){n.disabled=!1,e--,e<=0&&(o.disabled=!0),d(),c(e)}function d(){a.style.transform=`translateX(${-e*r}px)`}function c(t){s.forEach(l=>l.classList.remove("slider__button--active")),u.forEach(l=>l.classList.remove("slider__button-bullet--active")),s[t].classList.add("slider__button--active"),u[t].classList.add("slider__button-bullet--active")}s.forEach((t,l)=>{t.addEventListener("click",()=>{e=l,d(),c(e)})});