//Atributes
let lifePoints, iniciative;
let lifeDices;
let perception;

//Methods
export let calculateStatus = (origin, rpgClass, region, skillSet) =>{
    lifePoints = 10;
    lifeDices = "d10";
    iniciative = skillSet.modDexterity;
    perception = skillSet.modWisdom;

    let life = classes[rpgClass]();

    lifePoints = life.lifePoints + skillSet.modConstitution;
    lifeDices = life.lifeDices;

    let status = {
        lifePoints: lifePoints,
        lifeDices: lifeDices,
        perception: perception,
        iniciative: iniciative
    }

    return status;
}

var classes = {
    Acolito: function(){
        var obj = {
            lifePoints: 8,
            lifeDices: "d8"
        };
        return obj;
     },
    Arcano: function(){
       var obj = {
           lifePoints: 6,
           lifeDices: "d6"
       };
       return obj;
    },
    Atirador: function(){
        var obj = {
            lifePoints: 6,
            lifeDices: "d6"
        };
        return obj;
     },
     Bodsativa: function(){
        var obj = {
            lifePoints: 6,
            lifeDices: "d6"
        };
        return obj;
     },
     Bruto: function(){
        var obj = {
            lifePoints: 6,
            lifeDices: "d6"
        };
        return obj;
     },
     Cacador: function(){
        var obj = {
            lifePoints: 6,
            lifeDices: "d6"
        };
        return obj;
     },
    Combatente: function(){
        var obj = {
            lifePoints: 10,
            lifeDices: "d10"
        };
        return obj;
    },
    Mercurial: function(){
        var obj = {
            lifePoints: 6,
            lifeDices: "d6"
        };
        return obj;
     },
     Ninja: function(){
        var obj = {
            lifePoints: 6,
            lifeDices: "d6"
        };
        return obj;
     },
     Peregrino: function(){
        var obj = {
            lifePoints: 6,
            lifeDices: "d6"
        };
        return obj;
     },
     Tecmaturgo: function(){
        var obj = {
            lifePoints: 6,
            lifeDices: "d6"
        };
        return obj;
     }
};