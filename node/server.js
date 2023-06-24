const express = require('express');
const server = express();
const Players = require('./models/playerModels');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.set("strictQuery",false)
const cors = require('cors');


mongoose.connect("mongodb://localhost:27017/Players").then(() =>{
    console.log('connected to db')

}).catch(()=>{

    console.log('error');
}) 
const mongotypes = require('mongoose').Types;

server.use(bodyParser.json());
server.use(cors());

server.use(express.json())

server.get('/players',async(req,res)=>{
    try {
        const players = await Players.find();
        res.status(200).json(players);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
})

server.get('/players/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const player = await Players.findById(id);
        res.status(200).json(player);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
})

server.put('/players/:id',async(req,res)=>{
    try {
        if(mongotypes.ObjectId.isValid(id)){
        const {id} = req.params;
        const player = await Players.findByIdAndUpdate(id,req.body);
        if(!player){
            return res.status(404).json({message:`cannot find player ${id}`});
        }
        const updated = await Players.findById(id);
        res.status(200).json(updated);
    }
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
})


server.delete('/players/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const player = await Players.findByIdAndDelete(id);
        if(!player){
            return res.status(404).json({message:`cannot find player ${id}`});
        }
        const updated = await Players.findById(id);
        res.status(200).json(updated);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
}) 

server.post('/create',async(req,res)=>{
    try{
        const players = await Players.create(req.body)
       
        res.status(200).json(players);

    }catch(error){
        console.log(error.mesaage)
        res.status(500).json({message:error.mesaage});
    }
   
});



server.get('/made_goals',async(req,res)=>{
    try {
        var query1 ={"made_goals:-1":''};
        const players = await Players.find({}).sort(query1).limit(1);
        res.status(200).json(players);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
});

server.get('/mostsacks',async(req,res)=>{
    try {
        var query2 ={"sacks":-1};
        const players = await Players.find({}).sort(query2).limit(1);
        res.status(200).json(players);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
});

server.get('/touchdowns',async(req,res)=>{
    try {
        var query2 ={"touchdowns":-1};
        const players = await Players.find({}).sort(query2).limit(1);
        res.status(200).json(players);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
});

server.get('/mostrushing',async(req,res)=>{
    try {
        var query2 ={"rushing_yards":-1};
        const players = await Players.find({}).sort(query2).limit(1);
        res.status(200).json(players);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
});

server.get('/leastrushing',async(req,res)=>{
    try {
        var query2 ={"rushing_yards":-1};
        const players = await Players.find({}).sort(query2).limit(1);
        res.status(200).json(players);
        } catch (error) {
        res.status(500).json({message:error.mesaage});
    }
});








server.listen(3000,() =>{console.log(`server running on 3000`)});


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              

