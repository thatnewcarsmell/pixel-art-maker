document.addEventListener('DOMContentLoaded',function(){
    var color = '';
    var toggler = false;
    var canvas = document.querySelector('#canvas');
    var palette = document.querySelector('#palette');

    palette.addEventListener('mousedown',paintSelect);
    canvas.addEventListener('mouseover',paintIt)

    document.body.onmousedown = function(){
        toggler = true;
    }

    document.body.onmouseup = function(){
        toggler = false;
    }

    function paintIt(){
        let target = event.target.classList;
        let currentColor = target.item(0);
        if(toggler === true){
            if(color !== ''){
                if(currentColor !== color){
                    target.remove(currentColor);
                    target.add(color);
                }
            }
        }
        return;
    }

    function paintSelect($selectedColor){
        color = event.target.classList.item(0);
        selectedColor();
        console.log(color)
        return;
    }

    function selectedColor(){
        let checkIt = Array.from(palette.children);
        let target = event.target.classList;
        console.log(checkIt)
        if(target.item(1) !== 'selected'){
            for(let i = 0; i < checkIt.length; i++){
                checkIt[i].classList.remove('selected');
            }
            target.add('selected');
            return;
        }
        else if(target.contains('selected')){
            target.remove('selected');
            color = '';
            return;
        }
    }

    console.log('ready!')
});