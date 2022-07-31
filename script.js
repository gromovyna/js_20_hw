const root = document.querySelector(`.root`);
const Setlevel =(level,element) => {
    level--;
    if(element.children && level>0){
        let children =[...element.children];
        children.forEach(child => Setlevel(level,child));
    }else{
        if (element.children.length){
            element.children[0].classList.add(`firstItem`);
            element.children[element.children.length-1].classList.add(`lastItem`)
        }
    }
}
Setlevel(1,root)



