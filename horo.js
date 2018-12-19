document.getElementById('inner-header').onmouseover=function(event){
    var target = event.target;
    if(target.className == 'header_item headerButton'){
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display='block';
    }
}

document.onmouseover=function(event){
    var target = event.target;
    console.log(event.target);
    if(target.className!='header_item headerButton' && target.className!='submenu'){
        closeMenu();
    }
}

function closeMenu(){
    var menu = document.getElementById('inner-header');
    var subm = document.getElementsByClassName('submenu');
    for(var i=0;i<subm.length;i++){
        subm[i].style.display="none";
    }
}