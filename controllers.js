const { json } = require('body-parser');
const jsonfile = require('jsonfile');
const md = require("./models");
const pathDB = './db.json';

const initJsonFile = () => {
    let varInit = {
        "token_uris":[]
    };
    jsonfile.writeFileSync(pathDB, varInit, {spaces:4});
}

const writeTokenUri = (uri) => {
    const tokensJson = jsonfile.readFileSync(pathDB);
    tokensJson['token_uris'].push(uri);
    jsonfile.writeFileSync(pathDB, tokensJson, {spaces:4});
}

const getTokenUri = (tokenId) => {
    const tokenJson = jsonfile.readFileSync(pathDB);
    return tokenJson["token_uris"][tokenId];
}

const existTokenId = (tokenId) => {
    const tokenJson = jsonfile.readFileSync(pathDB);
    if(tokenJson["token_uris"][tokenId] != null) return true;
    else return false;
}

const generateMetadata = async (data) => {
    const meta = {};
    
    meta['id'] = data['token_id'];
    meta['name'] = data['name'];
    meta['description'] = data['description'];
    meta['image'] = "https://www.beasteam.io/api/image/"+data['token_id']+".mp4";
    meta['external_link'] = "https://www.besteam.io/";
    meta['attributes'] = []

    const attributesList = await md.getAttributes(meta['name']);
    for(let i=0; i<attributesList.length; i++){
        let attribute = {};
     
        if(attributesList[i] == "stamina"){
            attribute['display_type'] = "Boost number";
        }
        attribute['trait_type'] = attributesList[i];
        attribute['value'] = data[attributesList[i]];
        
        meta['attributes'].push(attribute);
    }
    
    return meta;
}




module.exports.writeTokenUri = writeTokenUri;
module.exports.initJsonFile = initJsonFile;
module.exports.getTokenUri = getTokenUri;
module.exports.generateMetadata = generateMetadata;
module.exports.existTokenId = existTokenId;


