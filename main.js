document.addEventListener('DOMContentLoaded',function(){
    var canvas = document.querySelector('.canvas');

    var redMe = function(){
        event.target.classList.toggle('clicked-sucka');
    };

    canvas.addEventListener('click',redMe);

});