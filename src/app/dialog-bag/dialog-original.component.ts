import { Component, OnInit, Inject } from '@angular/core';
import { RestfulService } from '../services/restful.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, Form, FormArray,FormControl } from '@angular/forms';
import { keyframes } from '@angular/animations';


export interface DialogData {
  key: string;
}


@Component({
  selector: 'app-dialog-bag',
  templateUrl: './dialog-bag.component.html',
  styleUrls: ['./dialog-bag.component.css']
})
export class DialogBagComponent implements OnInit {
  info:any;
  bagForm:FormGroup;

  events: Array<any> = [
       {
        "bags":[
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

  constructor(private restService: RestfulService,
              private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    //this.loadBagForm();
    this.buildBagForm();
    // console.log("Key0: "+JSON.stringify(this.data))
    // console.log("Key1: "+JSON.stringify(this.data.key))
    this.loadBagForm(this.data.key)
  }

  buildBagForm(){
    this.bagForm = this.formBuilder.group({
      //Character stuff before
      bags: this.formBuilder.array([this.bags])
    });
   }
  
  
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
    // console.log("Adding Bag...");
    (this.bagForm.get("bags") as FormArray).push(this.bags);
  }
  removeBag(index){
    (this.bagForm.get("bags") as FormArray).removeAt(index);
  }
  addItem(bag){
    bag.get("items").push(this.items);
  }
  removeItem(bag, index){
    bag.get("items").removeAt(index);
  }
  
  loadBagForm(data: any){
    console.log("Results: "+JSON.stringify(data))
    data.forEach(result=>{
      result.bags.forEach(bag=>{
        console.log("Results: "+JSON.stringify(bag.bagName))
        const bagContent = this.formBuilder.group({
          'bagName': bag.bagName
        })
          
        })

    });

    
    // this.bagForm.patchValue({
    //   'bags':{
    //     'id': data.id,
    //     'bagName': data.bagName,
    //     'bagSize': data.bagSize,
    //     'charId': data.charId,
    //     'items':{
    //       'id': data.id,
    //       'name':data.name,
    //       'cost':data.cost,
    //       'desc':data.desc,
    //       'bagId':data.bagId
    //       }
    //   }
    // });
  }




  hello(){
    console.log("Bonjour");
  }

  update(){
    console.log("Bag/Items JSON Data: "+JSON.stringify(this.bagForm.value))
  }
}
