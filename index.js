const el = document.getElementById("h-1");
 
let parents=[];

function flex(el) {
     
    if (el.parentNode.className !== "flex") {
         console.log("stop")
        
    }else {
        flex(el.parentNode);
        parents.push(el.parentNode);
        console.log("its flex");
    }
    
}
flex(el);
 
console.log(parents)