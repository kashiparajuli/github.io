

String.prototype.filter= function(...param){
    let str=this.toString();
    for(let i=0;i<param.length;i++){
        str=str.replace(param[i],"");
    }
    return str;
}

let str= "My name is narayan";
console.log(str.filter("is","My"));