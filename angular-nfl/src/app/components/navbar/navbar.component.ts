

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Players } from 'src/app/players';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

player : Players = {
  // _id: '',
  name: '',
  rushing_yards: '',
  touchdowns: '',
  sacks: '',
  made_goals: '',
  missed_goals: '',
  catches_made: '',
  _id: ''
};

_id:string='';
name: string='';
rushing_yards:string='';
touchdowns: string='';
sacks: string='';
made_goals: string='';
missed_goals: string='';
catches_made: string='';

allPlayers : Players[] = [];

selectedQuery: string = '';

constructor(private dataService:DataService){}

ngOnInit(): void {
   this._id='';
   this.name='';
   this.rushing_yards='';
   this.touchdowns='';
   this.sacks='';
   this.made_goals='';
   this.missed_goals='';
   this.catches_made='';
   this.allPlayers = [];
   this.getAllPlayers();

  }

  selectQuery(event:any){

    if (this.selectedQuery ='1') {
      getMostTouchDowns(){
        this.dataService.getMostTouchDowns().subscribe(res => {
         
        },err =>{
        console.log(err);
        })

      }
    }
  this.selectedQuery = event.target.value;
  }

  getAllPlayers(){
    this.dataService.getAllPlayers().subscribe(res => {
      this.allPlayers = res;
    },err =>{
    console.log(err);
    })

  }

  getPlayerById(player:Players){
    this.dataService.getPlayerById(player._id).subscribe(res => {
      player = res;
    },err =>{
    console.log(err);
    })
  }

   deletePlayerById(player:Players){
    this.dataService.deletePlayerById(player._id).subscribe(res => {
      this.allPlayers = [];
      this.getAllPlayers();
    },err =>{
    console.log(err);
    })
   }

   createPlayer(){
    this.player.name = this.name;
    this.player.rushing_yards = this.rushing_yards;
    this.player.touchdowns = this.touchdowns;
    this.player.sacks = this.sacks;
    this.player.made_goals = this.made_goals;
    this.player.missed_goals = this.missed_goals;
    this.player.catches_made= this.catches_made;

    this.dataService.createPlayer(this.player).subscribe(res => {

      this.ngOnInit();

    },err =>{
    //console.log(err);
    })
   }

   editPlayer(player:Players){
    this.getPlayerById(player);
    this._id = player._id;
    //console.log(this._id);

    this.name = player.name;
    this.touchdowns = player.touchdowns;
    this.sacks = player.sacks;
    this.rushing_yards = player.rushing_yards;
    this.catches_made = player.catches_made;
    this.made_goals = player.made_goals;
    this.missed_goals = player.missed_goals;
    //console.error(player);
   }


    updatePlayer(){
      if(this.name == '' || this.touchdowns == '' || this.sacks == '' || this.rushing_yards =='' || this.catches_made== '' || this.missed_goals =='',this.made_goals ==''){

       }
      this.player._id = this._id;
      this.player.name = this.name;
      this.player.rushing_yards = this.rushing_yards;
    this.player.touchdowns = this.touchdowns;
    this.player.sacks = this.sacks;
    this.player.made_goals = this.made_goals;
    this.player.missed_goals = this.missed_goals;
    this.player.catches_made = this.catches_made;


    this.dataService.updatePlayerById(this.player).subscribe(res => {
     this.ngOnInit();
    },err =>{
    console.log(err);
    })
    }




}
