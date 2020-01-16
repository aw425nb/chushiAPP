function rem(){
    const doce= document.documentElement;
    doce.style.fontSize= (doce.clientWidth/7.5)*2+"px"
}
addEventListener("load",rem)
addEventListener("resize",rem)