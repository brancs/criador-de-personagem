//Main Script
import Character from './character.js';
import {calculateStatus} from './statusCalculator.js';
import * as Generators from './generators.js';

let character;

window.onload = function(){
    document.getElementById("generateRandomBtn").addEventListener("click", generateRandomOptions);
}

window.validate = () =>{
    var vals = new Array();
    let name = getName();
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let origin = document.getElementById("origin").value;
    let rpgClass = document.getElementById("rpgClass").value;
    let rpgClassN = rpgClass.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let runicPulse = document.getElementById("runicPulse").value;
    let runicPulseN = runicPulse.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let region = document.getElementById("region").value;
    vals = [gender, origin, rpgClass, region];
    let basicSkillValues = {
        strength: document.getElementById("characterStrength").value,
        dexterity: document.getElementById("characterDexterity").value,
        constitution: document.getElementById("characterConstitution").value,
        intelligence: document.getElementById("characterIntelligence").value,
        wisdom: document.getElementById("characterWisdom").value,
        charisma: document.getElementById("characterCharisma").value
    }
    let skillSet = calculateSkillSet(basicSkillValues);
    if(!vals.every(isEmpty)){
        //inverter depois
        let status = calculateStatus(origin, rpgClassN, region, skillSet);
        character = new Character(name, gender, origin, rpgClass, rpgClassN, region, skillSet, status, runicPulse, runicPulseN);
        showActualCharacter(character);
        return false;
    }else{
        return true;
    }
}

const showActualCharacter = (character) =>{
    let charactersDescriptors = document.getElementById("myCharacter").childNodes;
    let charactersMoreDescriptors = document.getElementById("myCharacterMore").childNodes;
    let strenghtModifierSpan = document.getElementById("strengthMod");
    let dexterityModifierSpan = document.getElementById("dexterityMod");
    let constitutionModifierSpan = document.getElementById("constitutionMod");
    let intelligenceModifierSpan = document.getElementById("intelligenceMod");
    let wisdomModifierSpan = document.getElementById("wisdomMod");
    let charismaModifierSpan = document.getElementById("charismaMod");

    
    charactersDescriptors[1].textContent = `Nome: ${character.name}`;
    charactersDescriptors[3].textContent = `Origem: ${character.origin}`;
    charactersDescriptors[5].textContent = `Genêro: ${character.gender}`;
    charactersDescriptors[7].textContent = `Classe: ${character.rpgClass}`;
    charactersDescriptors[9].textContent = `Região: ${character.region}`;

    strenghtModifierSpan.textContent = character.skillSet.modStrength;
    dexterityModifierSpan.textContent = character.skillSet.modDexterity;
    constitutionModifierSpan.textContent = character.skillSet.modConstitution;
    intelligenceModifierSpan.textContent = character.skillSet.modIntelligence;
    wisdomModifierSpan.textContent = character.skillSet.modWisdom;
    charismaModifierSpan.textContent = character.skillSet.modCharisma;

    charactersMoreDescriptors[1].textContent = `Pontos de Vida: ${character.status.lifePoints}`;
    charactersMoreDescriptors[3].textContent = `Dados de Vida: ${character.status.lifeDices}`;
    if(character.status.iniciative > 0){
        charactersMoreDescriptors[5].textContent = `Iniciativa: +${character.status.iniciative}`;
    }else{
        charactersMoreDescriptors[5].textContent = `Iniciativa: ${character.status.iniciative}`;
    }
    if(character.status.perception > 0){
        charactersMoreDescriptors[7].textContent = `Percepção: +${character.status.perception}`;
    }else{
        charactersMoreDescriptors[7].textContent = `Percepção: ${character.status.perception}`;
    }
    charactersMoreDescriptors[9].textContent = `Pulso Rúnico: ${character.runicPulse}`;
}

const calculateSkillSet = (basicSkillValues) =>{
    let skillSet = {
        strength: basicSkillValues.strength,
        dexterity: basicSkillValues.dexterity,
        constitution: basicSkillValues.constitution,
        intelligence: basicSkillValues.intelligence,
        wisdom: basicSkillValues.wisdom,
        charisma: basicSkillValues.charisma
    };

    skillSet.modStrength = validateModifier(skillSet.strength);
    skillSet.modDexterity = validateModifier(skillSet.dexterity);
    skillSet.modConstitution = validateModifier(skillSet.constitution);
    skillSet.modIntelligence = validateModifier(skillSet.intelligence);
    skillSet.modWisdom = validateModifier(skillSet.wisdom);
    skillSet.modCharisma = validateModifier(skillSet.charisma);

    return skillSet;
}

const validateModifier = (skill) =>{
    let skillMod;
    if(skill < 2){
        skillMod = -5;
    }
    if(skill > 1 && skill < 4){
        skillMod = -4;
    }
    if(skill > 3 && skill < 6){
        skillMod = -3;
    }
    if(skill > 5 && skill < 8){
        skillMod = -2;
    }
    if(skill > 7 && skill < 10){
        skillMod = -1;
    }
    if(skill > 9 && skill < 12){
        skillMod = 0;
    }
    if(skill > 11 && skill < 14){
        skillMod = 1;
    }
    if(skill > 13 && skill < 16){
        skillMod = 2;
    }
    if(skill > 15 && skill < 18){
        skillMod = 3;
    }
    if(skill > 17 && skill < 20){
        skillMod = 4;
    }
    if(skill > 19 && skill < 22){
        skillMod = 5;
    }
    if(skill > 21 && skill < 24){
        skillMod = 6;
    }
    if(skill > 23 && skill < 26){
        skillMod = 7;
    }
    if(skill > 25 && skill < 28){
        skillMod = 8;
    }
    if(skill > 27 && skill < 30){
        skillMod = 9;
    }
    if(skill > 29){
        skillMod = 10;
    }

    return skillMod;
}

const generateRandomOptions = () =>{
    //Random Gender
    Generators.generateRandomGender();
    //Random Origin
    Generators.generateRandomOrigin();
    //Random Class
    let rpgClass = Generators.generateRandomClass();
    //Random Region
    Generators.generateRandomRegion();
    //Random Runic Pulse
    Generators.generateRandomRunicPulse(rpgClass);
}



//Random Name
const getName = () =>{
    let name = document.getElementById("characterName").value;
    if(name == ""){
        name = "Dafault";
    }

    return name;
}

//Generate integer random number between a min and max value
export var intRandom = (min, max) =>{
    return Math.round(Math.random() * (max - min)) + min;
}

//Check if is empty
var isEmpty = (val) => { return val == ""; }