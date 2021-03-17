
function getRandom(min, max){

    var rnd = Math.floor(Math.random() * (max - min + 1) + min);

    return rnd
}

arrayBot = [];

while (arrayBot.length < 5){

    var localRnd = getRandom(1, 10);

    if (!arrayBot.includes(localRnd)){

        arrayBot.push(localRnd);
    }
}

function insertNum(){

    var arrayUser = [];

    while (arrayUser.length < 5){

        var numUser = parseInt(prompt('Inserisci un numero'));

        if (!arrayUser.includes(numUser)){

            arrayUser.push(numUser)
        }
    }

    console.log('Array User: ' + arrayUser);

    var numWinners = [];

    for (var i = 0; i < arrayUser.length; i++){

        if (arrayBot.includes(arrayUser[i])){
            
            numWinners.push(arrayUser[i])
        } 
    }

    console.log('Hai indovinato questi ' + numWinners.length + ' numeri: ' + numWinners);
}


alert(arrayBot);

var set = setTimeout(insertNum, 3000);

console.log('Array Bot: ' + arrayBot);




















