import { Component, OnInit, Inject } from '@angular/core';
import { RestfulService } from '../services/restful.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators, Form, FormArray, } from '@angular/forms';
import { DialogBagComponent } from '../dialog-bag/dialog-bag.component';

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
  
   constructor(private restService: RestfulService,
               private formBuilder: FormBuilder,
               public dialog: MatDialog) { }

  
  ngOnInit(): void {
   //  this.getBags();
   //  console.log("Local Display: "+JSON.stringify(this.events));
   this.buildBagForm();
  }

//   getBags(){
//     this.restService.getCharacterBag().subscribe(
//       data => { 
//         this.info = data;
//         console.log("Bags Variables: "+JSON.stringify(data));
//         console.log("Bags Variables: "+JSON.stringify(data.bagName));
//       },
//       err => {
//         console.log("Error occured: getBags() failed")
//       }
//     );
//   }


  //Opens dialog after button press
  openDialog(): void {
   const dialogRef = this.dialog.open(DialogBagComponent, {
     width: '1000px', height: '700px',
     data: {name: this.name}
   });
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

 

}




// //DialogReference to Dialog Structure html
// @Component({
//    selector: 'app-dialog-bag',
//    templateUrl: '../dialog-bag/dialog-bag.component.html',
//  })
//  export class DialogExample {
//   bagForm:FormGroup;
//    constructor(
//    //   public dialogRef: MatDialogRef<dialogExample>,
//      @Inject(MAT_DIALOG_DATA) public data: DialogData,
//      private formBuilder: FormBuilder,) {}
 
//    onNoClick(): void {
//      this.dialogRef.close();
//    }
 
//    ngOnInit(): void {
//     this.buildBagForm();
//    }

//    buildBagForm(){
//     this.bagForm = this.formBuilder.group({
//       //Character stuff before
//       bags: this.formBuilder.array([this.items])
//     });
//    }
  
  
//    get bags(): FormGroup{
//     return this.formBuilder.group({
//         id:"",
//         bagName:"",
//         bagSize:"",
//         charId: "",
//         items: this.formBuilder.array([this.items])
//     })
//   }
//   get items(): FormGroup{
//     return this.formBuilder.group({
//         id:"",
//         name:"",
//         cost:"",
//         desc:"",
//         bagId:""
//     })
//   }
  
//     addBag(){
//       // console.log("Adding Bag...");
//       (this.bagForm.get("bags") as FormArray).push(this.bags);
//     }
//     removeBag(index){
//       (this.bagForm.get("bags") as FormArray).removeAt(index);
//     }
//     addItem(bag){
//       bag.get("items").push(this.items);
//     }
//     removeItem(bag, index){
//       bag.get("items").removeAt(index);
//     }
  
   




//    hello(){
//     console.log("Hello");
//   }
//  }