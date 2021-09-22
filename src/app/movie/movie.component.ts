import { Component, OnInit } from '@angular/core';
import { AnyObject } from 'mongoose';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  moviesDB: any[] = [];
  actorsDB: any[] = [];

  section = 1;
  aTitle: string = "";
  fullName: string = "";
  aYear: number = 0;
  movieId: any = "";
  actorId: any = "";
  year1:number = 0;
  year2:number = 0;

  constructor(private dbService: DatabaseService) { }

   onGetMoives() {
    this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }
  //Create a new movie, POST request
  onSaveMoives() {
    let obj = { title: this.aTitle, year: this.aYear };
    this.dbService.createMovie(obj).subscribe(result => {
      this.onGetMoives();
    });
  }
  // Update an movie
  onSelectUpdate(item:AnyObject) {
    this.aTitle = item.title;
    this.aYear = item.year;
    this.movieId = item._id;
  }
  onUpdateMovie() {
    let obj = { title: this.aTitle, year: this.aYear };
    this.dbService.updateMovie(this.movieId, obj).subscribe(result => {
      this.onGetMoives();
    });
  }
  //Delete movie
  onDeleteMovie(item:AnyObject) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
      this.onGetMoives();
    });
  }

  onDeleteByTitle() {
    this.dbService.deleteByTitle(this.aTitle).subscribe(result => {
      this.onGetMoives();
    });
  }

  onDeleteByYear() {
    this.dbService.deleteByYear(this.year1,this.year2).subscribe(result => {
      this.onGetMoives();
    });
  }

  onGetActors() {
    this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  onSelectMovie(item:any) {
    this.movieId = item._id;
    this.aTitle = item.title;
  }

  onSelectActor(item:any) {
    this.actorId = item._id;
    this.fullName = item.name;
  }

  onAddActor() {
    this.dbService.addActorToMovie(this.movieId,this.actorId).subscribe(result => {
      this.onGetMoives();
    });
  }



  // This lifecycle callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetMoives();
    this.onGetActors()
  }
  changeSection(sectionId:number) {
    this.section = sectionId;
    this.resetValues();
  }
  resetValues() {
    this.aTitle = "";
    this.aYear = 0;
    this.movieId = "";
  }



}

