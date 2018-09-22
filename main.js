document.addEventListener('DOMContentLoaded',function(event){
    var canvas = document.querySelector('.daddy');

    var redMe = function(event){
        event.target.classList.toggle('clicked-sucka');
    };

    canvas.addEventListener('click',redMe);

});


// document.addEventListener("DOMContentLoaded", function(event) {

//     var pants = document.getElementsByTagName("ul")[0];
//     var clickCount = 1;
    
//     console.log(pants)
    
//     var editPantssBabes = function(event) {
//           event.target.classList.toggle("selected");
//           clickCount++;  
//         document.querySelector('h1 span').innerText = "(" + clickCount + ")"
//     };
    
//     pants.addEventListener("click",editPantssBabes);
    
    
//     });