const mongoose = require('mongoose');

const PlayerSchema =  mongoose.Schema(
    {
        _id:{},
       
        name:{
            type: String,
    
        },
        rushing_yards:{
            type:String
        },

        touchdowns:{
            type:String
        },
        sacks:{
            type:String
        },
        made_goals:{
            type:String
        },
        missed_goals:{
            type:String
        },
        catches_made:{
            type:String
        }
    },{collection: 'players'}
)

const Players = mongoose.model('Players',PlayerSchema);

module.exports = Players;