import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAll_Cakes_Service(){
    console.log("Service at getAll_Cakes_service");
    return this._http.get('/cakes')
  }

  postNew_Cake_Service(new_cake){
    console.log("Service at postNew_cake",new_cake);

    return this._http.post('/new', new_cake)
  }

  postNew_Review_Service(new_review, cake_id){
    console.log("Service at postNew_Review", new_review);
    return this._http.post('/new/review/' + cake_id, new_review)
  }

  getOne_cake_Service(cake_id){
    console.log("cake_id", cake_id);
    return this._http.get('/detail/' + cake_id)
  }
}




