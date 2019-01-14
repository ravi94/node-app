
function add(a,b){
    console.log("Adding ",a , b);
    return a+b;
}


exports.add = add ;

exports.sub = function(a,b){
    console.log("Subtracting ", a,b);
    return a-b;
};
