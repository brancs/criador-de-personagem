import {intRandom} from "./main_script.js";
//Random Origin
let prevOriginOption;
const generateRandomOrigin = () =>{
    //Generate random index for origin
    let actRandomOriginOption = intRandom(0, 6);
    /*While actual random origin is equal to previous origin it changes
    while(actRandomOriginOption == prevOriginOption){
        //Generate random index for origin
        actRandomOriginOption = intRandom(0, 6);
    }*/
    //Set selected value to the random option generated
    document.getElementById("origin").selectedIndex = actRandomOriginOption;
    //Set the previous options to actual option
    prevOriginOption = actRandomOriginOption;
}

//Random Class
let prevClassOption;
const generateRandomClass = () =>{
    //Generate random index for origin
    let actClassOption = intRandom(0, 6);
    /*While actual random origin is equal to previous origin it changes
    while(actRandomOriginOption == prevOriginOption){
        //Generate random index for origin
        actRandomOriginOption = intRandom(0, 6);
    }*/
    //Set selected value to the random option generated
    document.getElementById("rpgClass").selectedIndex = actClassOption;
    //Set the previous options to actual option
    prevClassOption = actClassOption;
    console.log(document.getElementById("rpgClass").value);
    return document.getElementById("rpgClass").value;
}


//Random Region
let prevRegionOption;
const generateRandomRegion = () =>{
    //Generate random index for origin
    let actRegionOption = intRandom(0, 6);
    /*While actual random origin is equal to previous origin it changes
    while(actRandomOriginOption == prevOriginOption){
        //Generate random index for origin
        actRandomOriginOption = intRandom(0, 6);
    }*/
    //Set selected value to the random option generated
    document.getElementById("region").selectedIndex = actRegionOption;
    //Set the previous options to actual option
    prevRegionOption = actRegionOption;
}

//Random Runic Pulse
let prevRunicPulseOption;
const generateRandomRunicPulse = (rpgClass) =>{
    let actRunicPulseOption;
    //If bodsativa set set runic pulse to "Barreira de Ki"
    if(rpgClass == "Bodsativa"){
        actRunicPulseOption = 5;
    }else{
        //Generate random index for origin
        actRunicPulseOption = intRandom(0, 6);
        /*While actual random origin is equal to previous origin it changes
        while(actRandomOriginOption == prevOriginOption){
            //Generate random index for origin
            actRandomOriginOption = intRandom(0, 6);
        }*/
        //Set selected value to the random option generated
        
    }
    document.getElementById("runicPulse").selectedIndex = actRunicPulseOption;
    //Set the previous options to actual option
    prevRunicPulseOption = actRunicPulseOption;
}

//Random Gender
const generateRandomGender = () =>{
    //Get all gender radio buttons
    let genderRadios = document.getElementsByName("gender");
    //Check a random radio button
    genderRadios[intRandom(0, 1)].checked = true;
}

export{generateRandomOrigin, generateRandomClass, generateRandomRegion, generateRandomRunicPulse, generateRandomGender}