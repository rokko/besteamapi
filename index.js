'use strict'

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ct = require("./controllers");
const md = require('./models');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());



app.get('/', function(req, res){
    res.send("Get ready for Web3.0");
})



//GET TOKEN METADATA FROM TOKENID
app.get('/api/asset/:token_id\.:ext?', function(req, res) {
    const tokenId = parseInt(req.params.token_id).toString();
    const tokenUri = ct.getTokenUri(tokenId);
    res.send(tokenUri);
})


//GENERATE METADATA FROM TOKENID AND INSERT INTO DB
app.post('/api/asset/:data', async function(req, res) {
    const data = req.params.data;
    const content = await ct.generateMetadata(JSON.parse(data));
    
    try{
        ct.writeTokenUri(content);
    } catch(err){
        console.log(err);
    }
    
    res.send(content);
})


//UPDATE METADATA ATTRIBUTE FROM TOKENID
app.post('/api/asset/change/:data', async function(req, res) {
    const data = req.params.data;
    const json_data = JSON.parse(data);
    console.log(json_data['attributes']);
    res.send(data);
})



//RETRIEVE ATTRIBUTES OF AN ITEM
app.get('/api/asset/attributes/:name', async function(req, res) {
    const atts = await md.getAttributes(req.params.name);
    return res.send(atts);
})


//RETRIEVE PALETTE COLOR
app.get('/api/colors', async function(req, res) {
    const colors = await md.getColors();
    return res.send(colors);
})

//RETIREVE RARITIES
app.get('/api/rarities', async function(req, res) {
    const rarities = await md.getRarities();
    return res.send(rarities);
})


//RETRIEVE BRANDS
app.get('/api/brands', async function(req, res) {
    const brands = await md.getBrands();
    return res.send(brands);
})


//RETRIEVE TIPOLOGIES
app.get('/api/tipologies', async function(req, res) {
    const tipologies = await md.getTipologies();
    return res.send(tipologies);
})


//RETRIEVE ZONE
app.get('/api/zones', async function(req, res) {
    const zones = await md.getZones();
    return res.send(zones);
})


//RETRIEVE LAND_TIPOLOGY
app.get('/api/lands', async function(req, res) {
    const lands = await md.getLands();
    return res.send(lands);
})


//RETRIEVE STRUCTURE
app.get('/api/lands_parcel', async function(req, res) {
    const parcels = await md.getLandParcel();
    return res.send(parcels);
})


//RETRIEVE APARTMENT_SIZE
app.get('/api/apartment_size', async function(req, res) {
    const ap_size = await md.getApartSize();
    return res.send(ap_size);
})


//RETRIEVE IMAGE FROM TOKENID
app.get('/api/image/:token_id\.:ext?', async function(req, res) {
    const token_id = parseInt(req.params.token_id).toString();
    if(ct.existTokenId(token_id)){
        return res.sendFile(__dirname + "/nft/"+token_id+".mp4");
    }else{
        return res.send({"Message": "tokenId doesn't exist"});
    }
})



app.listen(8080, () => console.log("App is listening..."));


