let guns = ["lasers", "misseis","metralhadora", "bazuca", "granado"];

let ataques = [];

ataques.push("Robs");
ataques.push(guns[1]);
ataques.push(guns[0]);
ataques.push(guns[2]);
ataques.push(guns[4]);


for( let i = 0; i < ataques.length; i++) {
    if(i == 0){
        console.log("nome do robo " + ataques[i]);
        //console.log("nome do robo", $(ataques[i]));
    } else {
        console.log("Ataque " + i + ": " + ataques[i])
        //console.log("ataques" $)
    }
}