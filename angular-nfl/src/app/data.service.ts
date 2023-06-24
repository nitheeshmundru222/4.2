import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Players } from './players';

@Injectable({
  providedIn: 'root'
})
export class DataService {
url : string = 'http://127.0.0.1:3000';
  constructor(private http: HttpClient) { }

getAllPlayers():Observable<Players[]>{
  return this.http.get<Players[]>(this.url);
}


getPlayerById(id:string):Observable<Players>{
  return this.http.get<Players>(this.url+'/'+id);
}


deletePlayerById(id:string):Observable<Players>{
  return this.http.delete<Players>(this.url+'/'+id);
}


updatePlayerById(player:Players):Observable<Players>{
  return this.http.put<Players>(this.url+'/'+player._id,player);
}

createPlayer(player:Players):Observable<Players> {
 let url1 = `${this.url}/create`;
  return this.http.post<Players>(url1,player);
}


getMostTouchDowns():Observable<Players[]>{
  return this.http.get<Players[]>('http://127.0.0.1:3000/touchdowns');
}


}
