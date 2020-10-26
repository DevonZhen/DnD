import { Component, OnInit, Inject } from '@angular/core';
import { RestfulService } from '../services/restful.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, Form, FormArray,FormControl } from '@angular/forms';
import { identifierModuleUrl } from '@angular/compiler';

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

  constructor(private restService: RestfulService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  content:any=this.data;
  ngOnInit(): void {
    //this.loadBagForm();
    this.buildBagForm();
    // console.log("Key0: "+JSON.stringify(this.data))
    console.log("Key1: "+JSON.stringify(this.data.key))
    // this.loadBagForm(this.data.key)
  }

  buildBagForm(){
    this.bagForm = this.fb.group({
      bags: this.fb.array([])
    });
    this.setBags();
   }
   
   get bags() {
    return this.bagForm.get('bags') as FormArray
   }

   setBags(){
    //aka get bags() Above
    //  let control = <FormArray> this.bagForm.controls.bags;
     this.content.key.forEach(key =>{
       key.bags.forEach(bag=>{
        //console.log("content: "+JSON.stringify(bag))
        this.bags.push(this.fb.group({
          id: bag.id,
          bagName: bag.bagName,
          charId: bag.charId,
          itemList: this.setItems(bag)
       }))
       })
     })
   }

   setItems(data:any){
    let itemArr = new FormArray([])
    data.itemList.forEach(item =>{
      //console.log("Item: " +JSON.stringify(item))
      itemArr.push(this.fb.group({
        id: item.id,
        name: item.name,
        cost: item.cost,
        desc: item.desc,
        bagId: item.bagId
      }))
    })
    return itemArr;
   }

    addBag(){
      let ctrl = <FormArray>this.bagForm.controls.bags;
      ctrl.push(
        this.fb.group({
          id: [''],
          bagName: [''],
          charId: [''],
          itemList: this.fb.array([])
        })
      )
    }

    removeBag(i){
      let ctrl = <FormArray>this.bagForm.controls.bags;
      ctrl.removeAt(i)
    }

    addItem(item){
      item.push(this.fb.group({
        name: [''],
        cost: [''],
        desc: ['']
      }))

    }
    removeItem(bag,i){
      bag.removeAt(i);
    }
 
    createData(){
      var bags = [];
      for(var i=0;i<this.bagForm.value.bags.length;i++){
          bags.push({
            "id":this.bagForm.value.bags[i].id,
            "bagName":this.bagForm.value.bags[i].bagName,
            "charId":this.bagForm.value.bags[i].charId,
            "itemList":this.bagForm.value.bags[i].itemList    
          })
      }
      var dynamicBags = {
        id: this.createCharacter(this.data.key),
        bags: bags
      };
      console.log("Created Data: "+JSON.stringify(dynamicBags))
      this.updateBags(dynamicBags)
    }

  updateBags(formValue:any){
    this.restService.updateBags(formValue).subscribe(
      data=>{
        if(data)
          console.log("Data Send!");
        // else 
          // alert("Data not send")
        console.log("UpdateBags() Successful!")
      }
    );
  }


  createCharacter(data: any){
    let characterKey:any;
    data.forEach(result =>{
      characterKey = result.id
     
    })
    return characterKey;
    
  }


  // onSubmit() {
  //   // var bagList = [this.bagForm.value];
  //   var bags = [];
  //   // var items = [];
  //   console.log("Printed Values:"+JSON.stringify(this.bagForm.value))
  //   console.log("#"+JSON.stringify(this.bagForm.value.bags.length))
  //   for(var i=0;i<this.bagForm.value.bags.length;i++){
  //     // for(var z=0; this.bagForm.value.length-1;z++){
  //       bags.push({
  //         "id":this.bagForm.value.bags[i].id,
  //         "bagName":this.bagForm.value.bags[i].bagName,
  //         "charId":this.bagForm.value.bags[i].charId,
  //         "itemList":this.bagForm.value.bags[i].itemList    
  //       })
  //     // }
  //   }
  //   var dynamicBags = {
  //     id: this.createCharacter(this.data.key),
  //     bags: bags
  //   };    
  //   console.log("Pushed Data: "+JSON.stringify(dynamicBags))
  //   // console.log("Bag/Items JSON Data: "+JSON.stringify(this.bagForm.value))
  //   // this.createCharacter(this.data.key)
  //   this.updateBags(dynamicBags)
  // }

}





// info:any;
// bagForm:FormGroup;


// constructor(private restService: RestfulService,
//             private formBuilder: FormBuilder,
//             @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

// ngOnInit(): void {
//   //this.loadBagForm();
//   this.buildBagForm();
//   // console.log("Key0: "+JSON.stringify(this.data))
//   // console.log("Key1: "+JSON.stringify(this.data.key))
//   this.loadBagForm(this.data.key)
// }

// buildBagForm(){
//   this.bagForm = this.formBuilder.group({
//     bags: this.constructBagsArray()
//   });
//  }

//  constructBagsArray(){
//    var bagArray = this.formBuilder.array([]);
   
//     bagArray.push(this.formBuilder.group({
//         id:'',
//         bagName:'',
//         bagSize:'',
//         charId: '',
//         itemList: this.constructItemsArray()
//      }));
  
//    return bagArray;
//  }

//  constructItemsArray(){
//   var itemArray = this.formBuilder.array([]);
  
//     itemArray.push(this.formBuilder.group({
//         id:"",
//         name:"",
//         cost:"",
//         desc:"",
//         bagId:""
//     }));
  
//   return itemArray;
//  }

// get bags() {
//   return this.bagForm.get('bags') as FormArray
// }

// get items(){
//   return this.bags.get('items') as FormArray
// }

// addBag(){
//   console.log("Adding Bag...");
//   const bag = this.formBuilder.group({ 
//     bagName: []
//   })
//   this.bags.push(bag);
// }
// removeBag(index){
//   console.log("Removing Bag...");
//   this.bags.removeAt(index)
// }
// addItem(bag){
//   console.log("Add Item")
// }
// removeItem(bag, index){
//   console.log("Remove Item")
// }

// loadBagForm(data:any){
//   data.forEach(result=>{
//     result.bags.forEach(bag=>{
//       console.log("Results: "+JSON.stringify(bag.bagName))
//       const bagContent = this.formBuilder.group({
//         'bagName': bag.bagName
//       })
//       this.bags.push(bagContent)
//     })
//   });   
// }

// update(){
//   console.log("Bag/Items JSON Data: "+JSON.stringify(this.bagForm.value))
// }


















