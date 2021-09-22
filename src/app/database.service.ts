import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AnyObject } from 'mongoose';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  result: any;
  getActors() {
    return this.http.get("/actors");
  }
  getActor(id: string) {
    let url = "/actors/" + id;
    return this.http.get(url);
  }
  createActor(data:AnyObject) {
    return this.http.post("/actors", data, httpOptions);
  }
  updateActor(id:string, data:AnyObject) {
    let url = "/actors/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteActor(id: string) {
    let url = "/actors/" + id;
    return this.http.delete(url, httpOptions);
  }

  getMovies() {
    return this.http.get("/movies");
  }
  getMovie(id: string) {
    let url = "/movies/" + id;
    return this.http.get(url);
  }
  createMovie(data:AnyObject) {
    return this.http.post("/movies", data, httpOptions);
  }
  updateMovie(id:string, data:AnyObject) {
    let url = "/movies/" + id;
    return this.http.put(url, data, httpOptions);
  }
  deleteMovie(id: String) {
    let url = "/movies/" + id ;
    return this.http.delete(url, httpOptions);
  }

  deleteByTitle(title:String) {
    let url = "/movies/deletebytitle/" + title;
    return this.http.delete(url, httpOptions);
  }

  deleteByYear(year1:Number,year2:Number) {
    let url = "/movies/deletebyYear/" + year1 +"/"+ year2;
    return this.http.delete(url, httpOptions);
  }

  addActorToMovie(mid:any,aid:any) {
    let url = "/movies/addActors/" + mid + "/" + aid;
    return this.http.post(url, httpOptions);
  }

}

