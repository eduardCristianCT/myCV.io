let cv = document.getElementById('cv-btn');
let home = document.getElementById('home-btn')
let homeCont = document.getElementById('home-container')
let cvCont = document.getElementById('cv-container')

 
        cv.onclick = function() {
            if(cvCont.classList.contains('deleted')){
                cvCont.classList.remove("deleted");
            } else {
                cvCont.classList.add("deleted");
            }
        }

        home.onclick = function() {
            if(homeCont.classList.contains('deleted')){
                homeCont.classList.remove('deleted');
            }else {

                homeCont.classList.add('deleted');
                cvCont.classList.remove("deleted");
            }

            
        }
