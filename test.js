for (i=0; i<10; i++){

    if (i === 5 || i === 3){

        continue;
    }
   
    console.log(i);

    if (i===7){
        console.log("Help me!")
        break;
    }

}

console.log("I have broken out of the loop!");