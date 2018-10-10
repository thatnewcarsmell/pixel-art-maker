document.addEventListener('DOMContentLoaded',function(){
    var canvas = document.querySelector('.canvas');
    var palette = document.querySelector('.palette');
    var color = '';

    var paintIt = function(){
        let target = event.target.classList;
        let currentColor = target.item(0);
        if(currentColor === color){
            target.remove(currentColor);
        }
        else if(target.item(0) !== color){
            target.remove(currentColor);
            target.add(color)
        }
        return;
    }

    var paintSelect = function(){
        color = event.target.classList.item(0);
        console.log(color)
        return;
    }

    canvas.addEventListener('click',paintIt);
    palette.addEventListener('click',paintSelect)

});