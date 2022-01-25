const CATEGORY = [
    "look",
    "able",
    "team look",
    "team able"
]



const CLASS = {
    //LOOK
    "CA":"Casual",
    "AC": "Accessories",
    "ST": "Somatic traits",
    "FK": "Footbl Kit",

    //ABLE
    "TT": "Ticket",
    "AD": "Advertise",
    "SM": "Stamina",
    "BU": "Building",

    //TEAM LOOK
    "ST": "Stadium",
    "TK": "Team kit",
    "TR": "Trophy",

    //TEAM ABLE
    "CH": "Coach"
}



//These are the names in the metadata uri
const TIPOLOGY = [

    //LOOK
    "Shoe",
    "Sock",
    "Pants",
    "Shorts",
    "Skirt",
    "Undershit",
    "T-shirt",
    "Sweater",
    "Plush",
    "Cap",
    "Belt",
    "Glasses",
    "Tattoo",
    "Glove",
    "Wristwatch",
    "Smartphone",
    "Earring",
    "necklace",
    "Bracelet",
    "Piercing",
    "Expander",
    "Hair clip",
    "Mask",
    "Scarf",
    "Cuff",
    "Profile card",
    "Personal trophy",
    "Hair",
    "Football boots",
    "Shin guard",
    "Football sock",
    "GK gloves",
    "Football shorts",
    "Undershit",
    "Football Jersey",
    "Ball",

    //ABLE
    "Ticket Casinò",
    "Advertising panel",
    "Energy drink",
    "Land",
    "Apartment",


    //TEAM LOOK
    "Coverage",
    "Stadium sector",
    "Child seats",
    "Goal posts",
    "Goal nets",
    "Turf",
    "Pitch lines",
    "Football bench",
    "Choreography",
    "Corner kick flag",
    "Stadium choir",
    "Jerseys",
    "Shorts",
    "Team card",
    "Captain's armband",
    "Tournament trophy",
    "Competition medals",

    //TEAM ABLE
    "Stadium display",
    "Stadium adv panel",
    "Slot bench",
    "Coach Brooch"
];



const ATTRIBUTE = {
    //LOOK
    "0" : ["rarity", "brand", "design", "first_color", "second_color", "shoelaces_color"],
    "1" : ["rarity", "brand", "design", "first_color", "second_color"],
    "2" : ["rarity", "brand", "design", "first_color", "second_color"],
    "3" : ["rarity", "brand", "design", "first_color", "second_color", "Length"],
    "4" : ["rarity", "brand", "design", "first_color", "second_color", "Length"],
    "5" : ["rarity", "brand", "design", "first_color", "neck", "sleeve"],
    "6" : ["rarity", "brand", "design", "first_color", "second_color", "neck", "sleeve"],
    "7" : ["rarity", "brand", "design", "first_color", "second_color", "neck"],
    "8" : ["rarity", "brand", "design", "first_color", "second_color", "neck"],
    "9" : ["rarity", "brand", "design", "first_color", "second_color"],
    "10" : ["rarity", "brand", "design", "first_color", "second_color"],
    "11" : ["rarity", "brand", "design", "first_color", "second_color"],
    "12" : ["rarity", "brand", "design", "first_color", "second_color"],
    "13" : ["rarity", "brand", "design", "first_color", "second_color"],
    "14" : ["rarity", "brand", "design", "first_color", "second_color"],
    "15" : ["rarity", "brand", "design", "first_color", "second_color"],
    "16" : ["rarity", "brand", "design", "first_color", "second_color"],
    "17" : ["rarity", "brand", "design", "first_color", "second_color"],
    "18" : ["rarity", "brand", "design", "first_color", "second_color"],
    "19" : ["rarity", "brand", "design", "first_color", "second_color"],
    "20" : ["rarity", "brand", "design", "first_color", "second_color"],
    "21" : ["rarity", "brand", "design", "first_color", "second_color"],
    "22" : ["rarity", "brand", "design", "first_color", "second_color"],
    "23" : ["rarity", "brand", "design", "first_color", "second_color"],
    "24" : ["rarity", "brand", "design", "first_color", "second_color"],
    "25" : ["rarity", "brand", "design", "first_color", "second_color", "background"],
    "26" : ["rarity", "brand", "design"],
    "27" : ["rarity", "haircut", "first_color", "second_color", "Length"],
    "28" : ["rarity", "brand", "design", "first_color", "second_color", "shoelaces_color"],
    "29" : ["rarity", "brand", "design", "first_color", "second_color"],
    "30" : ["rarity", "brand", "design", "first_color", "second_color"],
    "31" : ["rarity", "brand", "design", "first_color", "second_color"],
    "32" : ["rarity", "brand", "design", "first_color", "second_color"],
    "33" : ["rarity", "brand", "design", "first_color", "second_color", "neck", "sleeve"],
    "34" : ["rarity", "brand", "design", "first_color", "second_color", "neck", "sleeve"],
    "35" : ["rarity", "brand", "design", "first_color", "second_color"],

    //ABLE
    "36" : ["rarity", "design", "first_color"],
    "37" : ["rarity", "design", "first_color"],
    "38" : ["rarity", "brand", "design", "first_color", "second_color", "stamina"],
    "39" : ["rarity", "zone", "size", "parcel"],
    "40" : ["rarity", "zone", "structure", "size", "floor", "condition"],

}


const BRAND = [
    "Besteam"
]


const RARITY = [
    "Basic",
    "Rare",
    "Premium"
]


const COLOR = [
    "White",
    "Black",
    "Light grey",
    "Navy blue",
    "Red",
    "Violet",
    "Coffe",
    "Yellow",
    "Carrot orange",
    "Purple",
    "Platinum",
    "Gold",
    "Blue jeans",
    "Pink",
    "Salmon",
    "Key lime",
    "Aquamarine",
    "Melon",
    "Forest green",
    "Electric lime",
    "Green wheel",
    "Android green",
    "Lincoln green",
    "Olive",
    "Citron",
    "Old gold",
    "Ruby red"
] 


const ZONE = [
    "A",
    "B",
    "C",
    "D"
]


const LAND_TIPOLOGY = [
    "1x1",
    "1x2",
    "2x2",
    "2x3"
]


const LAND_PARCEL = [
    1,
    2,
    3,
    4
]

const STRUCTURE = [
    "Skyscraper",
    "Palace",
    "Villa"
]

const APARTMENT_SIZE = [
    80,
    100,
    120,
    160,
    200
]


const getCategories = async () => {
    return CATEGORY;
}

const getClasses = async () => {
    return CLASS;
}

const getTipologies = async () => {
    return TIPOLOGY;
}

const getAttributes = async (name) => {
    return await ATTRIBUTE[TIPOLOGY.indexOf(name)];
}

const getBrands = async () => {
    return BRAND;
}

const getColors = async () => {
    return COLOR;
}

const getRarities = async () => {
    return RARITY;
}

const getZones = async () => {
    return ZONE;
}

const getLands = async () => {
    return LAND_TIPOLOGY;
}

const getLandParcel = async () => {
    return LAND_PARCEL;
}

const getApartSize = async () => {
    return APARTMENT_SIZE;
}





module.exports.getCategories = getCategories;
module.exports.getClasses = getClasses;
module.exports.getTipologies = getTipologies;
module.exports.getAttributes = getAttributes;
module.exports.getColors = getColors;
module.exports.getBrands = getBrands;
module.exports.getRarities = getRarities;
module.exports.getZones = getZones;
module.exports.getLands = getLands;
module.exports.getLandParcel = getLandParcel;
module.exports.getApartSize = getApartSize;