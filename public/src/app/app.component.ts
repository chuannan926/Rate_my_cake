import { Component } from '@angular/core';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  all_cakes : any;
  new_cake : any;
  new_review: any;
  detail_cake_info :any;
  isClicked :any;
  one_cake: any;
  average_rate_of_cake : any;

  constructor(private _httpService: HttpService){}
  ngOnInit(){//在pageload的时候（刚去这个网页的时候）要把所有显示的东西都先显示出来。要不然会显示undefined
    this.new_cake = {name:"", image:""};
    this.new_review = {number:"", comment:""};
    let observable = this._httpService.getAll_Cakes_Service();
    observable.subscribe(data =>{
      console.log("show all cakes!", data);
      this.all_cakes = data;
    })

   console.log("ngOnInit working");
    
  }
  submitNewCake(){
    let observable = this._httpService.postNew_Cake_Service(this.new_cake);
    observable.subscribe(data=>{
      console.log("a new cake", data);
      
      this.ngOnInit();
      this.isClicked = false;
    })

  }

  submitNewReview(cake_id){
    console.log(`In Component! Going to Service next. cake_id = ${cake_id}`);
    let observable = this._httpService.postNew_Review_Service(this.new_review, cake_id);
    observable.subscribe(data=>{
      this.new_review={number:"", comment:""};
      console.log("a new review", data);
      
    });
  }
  showDetailCake(cake_id): void {
    console.log(`showing the number param" :${cake_id}`);
    let observable = this._httpService.getOne_cake_Service(cake_id);//把传进来的cake_id传到API去，通过HTTPservice
    observable.subscribe(data=>{//等API run完了，data就有了，在run subscribe
      this.one_cake = data;
      console.log("showing detail cake", data);
      var sum = 0;
      for( let review of this.one_cake.reviews){
        console.log("review", review.number)
        sum = review.number + sum;
      }
      console.log("Sum", sum);
      console.log("Length", this.one_cake.reviews.length)
      this.average_rate_of_cake = sum/ this.one_cake.reviews.length;
      console.log("rate", this.average_rate_of_cake)
    });
   
  }



} 

