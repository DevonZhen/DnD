import { Component, OnInit } from '@angular/core';
import { RestfulService } from './../services/restful.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {

  events: Array<any> = [
   {
    "bagList":[
        {
           "id":3,
           "bagName":"Green Bag",
           "bagSize":24,
           "charId":3,
           "itemList":[
              {
                 "id":6,
                 "name":"Bread",
                 "cost":5,
                 "desc":"Fresh Baked Deliciousness",
                 "bagId":3
              },
              {
                 "id":7,
                 "name":"Apple",
                 "cost":3,
                 "desc":"Right off the tree",
                 "bagId":3
              }
           ]
        },
        {
           "id":4,
           "bagName":"Red Bag",
           "bagSize":48,
           "charId":3,
           "itemList":[
              {
                 "id":8,
                 "name":"Clock",
                 "cost":16,
                 "desc":"Tells time",
                 "bagId":4
              },
              {
                 "id":9,
                 "name":"Dagger",
                 "cost":36,
                 "desc":"Quick and Silent",
                 "bagId":4
              }
           ]
        }
     ]
  }
]
  

 





  constructor(private restService: RestfulService) { }
  info:any;
  ngOnInit(): void {
   //  this.getBags();
    console.log("Local Display: "+JSON.stringify(this.events));
  }

  getBags(){
    this.restService.getCharacterBag().subscribe(
      data => { 
        this.info = data;
        console.log("Bags Variables: "+JSON.stringify(data));
        console.log("Bags Variables: "+JSON.stringify(data.bagName));
      },
      err => {
        console.log("Error occured: getBags() failed")
      }
    );
  }

}
