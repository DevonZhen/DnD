import { Component, OnInit, Inject } from '@angular/core';
import { RestfulService } from '../services/restful.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, Form, FormArray, } from '@angular/forms';

export interface DialogData {
   name: string;
 }

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent implements OnInit {
   info:any;
   name:string;
   bagForm:FormGroup;
//    events: Array<any> = [
//    {
//     "bagList":[
//         {
//            "id":3,
//            "bagName":"Green Bag",
//            "bagSize":24,
//            "charId":3,
//            "itemList":[
//               {
//                  "id":6,
//                  "name":"Bread",
//                  "cost":5,
//                  "desc":"Fresh Baked Deliciousness",
//                  "bagId":3
//               },
//               {
//                  "id":7,
//                  "name":"Apple",
//                  "cost":3,
//                  "desc":"Right off the tree",
//                  "bagId":3
//               }
//            ]
//         },
//         {
//            "id":4,
//            "bagName":"Red Bag",
//            "bagSize":48,
//            "charId":3,
//            "itemList":[
//               {
//                  "id":8,
//                  "name":"Clock",
//                  "cost":16,
//                  "desc":"Tells time",
//                  "bagId":4
//               },
//               {
//                  "id":9,
//                  "name":"Dagger",
//                  "cost":36,
//                  "desc":"Quick and Silent",
//                  "bagId":4
//               }
//            ]
//         }
//      ]
//   }
// ]
  
   constructor(private restService: RestfulService,
               private formBuilder: FormBuilder,
               ) { }

  
  ngOnInit(): void {
    this.buildBagForm();
  }

 buildBagForm(){
  this.bagForm = this.formBuilder.group({
    //Character stuff before
    bags: this.formBuilder.array([this.items])
  });
 }

//  loadBagForm(data:any){
//     data.bags.forEach(bag => {
//       const Bag = this.formBuilder.group({
//         'id':bag.id,
//         'bagName':bag.bagName,
//         'bagSize':bag.bagSize,
//         'charId': bag.charId,
//         //Items inside the bag
//         // bag.items.forEach(item =>{
//         //   const Item = this.formBuilder.group({
//         //     'id': item.id,
//         //     'name': item.name,
//         //     'cost': item.cost,
//         //     'desc': item.desc,
//         //     'bagId': item.bagId
//         //   })
//         //   this.items.push(item);
//         // })
//       })
//       this.bags.push(bag);
//     });
//  }

 get bags(): FormGroup{
    return this.formBuilder.group({
        id:"",
        bagName:"",
        bagSize:"",
        charId: "",
        items: this.formBuilder.array([this.items])
    })
 }
 get items(): FormGroup{
    return this.formBuilder.group({
        id:"",
        name:"",
        cost:"",
        desc:"",
        bagId:""
    })
 }

  addBag(){
    (this.bagForm.get("bags") as FormArray).push(this.bags);
  }
  removeBag(){

  }
  addItem(bag){
    bag.get("items").push(this.items);
  }
  removeItem(){

  }

}














/*

buildBagForm(){
  this.bagForm = this.formBuilder.group({
    //Characte stuff before
    bags: this.constructBagArray()
  });
 }

 loadBagForm(data:any){
    data.bags.forEach(bag => {
      const Bag = this.formBuilder.group({
        'id':bag.id,
        'bagName':bag.bagName,
        'bagSize':bag.bagSize,
        'charId': bag.charId,
        //Items inside the bag
        // bag.items.forEach(item =>{
        //   const Item = this.formBuilder.group({
        //     'id': item.id,
        //     'name': item.name,
        //     'cost': item.cost,
        //     'desc': item.desc,
        //     'bagId': item.bagId
        //   })
        //   this.items.push(item);
        // })
      })
      this.bags.push(bag);
    });
 }

 //Bags Array
 constructBagArray(){
   var bagArray = this.formBuilder.array([]);
   bagArray.push(this.formBuilder.group({
      id:[''],
      bagName:[''],
      bagSize:[''],
      charId: [''],
      itemList: this.constructItemArray()
   }));
   return bagArray;
 }
 //Items Array
 constructItemArray(){
   var itemArray = this.formBuilder.array([]);
   itemArray.push(this.formBuilder.group({
      id: [''],
      name: [''],
      cost: [''],
      desc: [''],
      bagId: ['']
   }));
   return itemArray;
 }

 get bags(){
   return this.bagForm.get('bags') as FormArray;
 }
 get items(){
   return this.bagForm.get('bags').get('itemList') as FormArray;
 }

  addBag(){
    const bag = this.formBuilder.group({
      id:[''],
      bagName:[''],
      bagSize:[''],
      charId: [''],
      
    })
    this.bags.push(bag);
  }
  removeBag(){

  }
  addItem(){

  }
  removeItem(){

  }
  */