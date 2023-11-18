const x = document.getElementById('div');
x.addEventListener('click',function(){
    if(x.style.backgroundColor == 'aquamarine')
        x.style.backgroundColor = 'orange';
    else
    x.style.backgroundColor = 'aquamarine';
});