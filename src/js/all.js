"use strict";AOS.init({once:!0,disable:"mobile"});var header=document.querySelector(".js-header");window.addEventListener("scroll",function(){80<=window.pageYOffset?header.classList.add("fixed-menu"):header.classList.remove("fixed-menu")});