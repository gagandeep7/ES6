let obj = {
    name : "gag",
    "classs" : 7,
    "function" : ()=>{

    }
};

// cls here is alias
let {name ,"classs":cls} = obj; 
console.log(name,cls)