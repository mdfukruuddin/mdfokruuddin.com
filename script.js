
    // ===== This All Are Variable ====== //


let card = document.querySelector(".card");

let html = document.querySelector("body");

let btn = document.getElementById("contact");

let close = document.getElementById("cancel-icon");

let form = document.querySelector("form");

let box = document.querySelector(".box");

let p = document.querySelector("#pera");

let about = document.querySelectorAll(".about")[0];       

let about1 = document.querySelectorAll(".about")[1];       

let about2 = document.querySelectorAll(".about")[2];       

let about3 = document.querySelectorAll(".about")[3];       

let about4 = document.querySelectorAll(".about")[4];       

let about5 = document.querySelectorAll(".about")[5];       


  
      // ===== This Is Our Function ===== //


btn.addEventListener("click", anomor);

function anomor(){
    
    box.style.filter = "blur(6px)";  
    
    card.style.display = "block";  
    
    box.style.position = "fixed";
    
    card.style.visibility = "visible"; 
    
    card.style.transition = "0.5s";    
}

close.addEventListener("click", function(){
    
    card.style.display = "none";
    
    box.style.filter = "blur(0px)";
    
    box.style.position = "relative";
    
    card.style.visibility = "hidden";
   
})


     // ======= This Is About Number 1 ======= //


about.addEventListener("touchstart", function(){
    about.classList.add("across");
})

about.addEventListener("touchend", function(){
    about.classList.remove("across");
})


    // ======= This Is About Number 2 ======= //


about1.addEventListener("touchstart", function(){
    about1.classList.add("across");
})

about1.addEventListener("touchend", function(){
    about1.classList.remove("across");
})


   // ======= This Is About Number 3 ======= //


about2.addEventListener("touchstart", function(){
    about2.classList.add("across");
})

about2.addEventListener("touchend", function(){
    about2.classList.remove("across");
})


   // ======= This Is About Number 4 ======= //


about3.addEventListener("touchstart", function(){
    about3.classList.add("across");
})

about3.addEventListener("touchend", function(){
    about3.classList.remove("across");
})


   // ======= This Is About Number 5 ======= //


about4.addEventListener("touchstart", function(){
    about4.classList.add("across");
})

about4.addEventListener("touchend", function(){
    about4.classList.remove("across");
})


   // ======= This Is About Number 6 ======= //


about5.addEventListener("touchstart", function(){
    about5.classList.add("across");
})

about5.addEventListener("touchend", function(){
    about5.classList.remove("across");
})


  

    // ========= This Is Out Reveal part ======= //
    
        
   // ========== This Is Linked With window ====== //

 
   window.addEventListener("scroll", revealScroll);


   // ===== Now Create Our Function ====== //

   function revealScroll(){
           
           var reveal = document.querySelectorAll(".reveal");
           
           for(var i = 0;i < reveal.length; i++){
                     
                      let windowheight = window.innerHeight;
                      
                      var revealTop = reveal[i].getBoundingClientRect().top;                
                   
                      let revealPoint = 150;
                      
                      // Now Check The Conditions
                      
                      if(revealTop < windowheight - revealPoint){
                                 
                                 reveal[i].classList.add("active");
                      }
                      
                      else{
                                 
                                 reveal[i].classList.remove("active");
                      }
           }
}



      




