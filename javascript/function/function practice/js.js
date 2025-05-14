function callTwice(func){
    func();
    func();
}

function callTenTimes(f){
    for (let i = 0; i < 10; i++){
        f();
    }
}

function rollDie(){
    const diroll = Math.floor(Math.random() * 10) + 1;
    console.log(diroll);
}