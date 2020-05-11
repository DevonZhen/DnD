import { Component, OnInit, Inject } from '@angular/core';
import { RestfulService } from './../services/restful.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';

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
               public dialog: MatDialog) { }

  
  ngOnInit(): void {
   //  this.getBags();
   //  console.log("Local Display: "+JSON.stringify(this.events));
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
   const dialogRef = this.dialog.open(DialogExample, {
     width: '500px',
     data: {name: this.name}
   });
   //Subscribes Dialog Info after closure
   // dialogRef.afterClosed().subscribe(result => {
   //   console.log('The dialog was closed');
   // });
 }

}

//DialogReference to Dialog Strcuture html
@Component({
   selector: 'app-bag',
   templateUrl: 'dialog.html',
 })
 export class DialogExample {
   constructor(
   //   public dialogRef: MatDialogRef<dialogExample>,
     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
 
   // onNoClick(): void {
   //   this.dialogRef.close();
   // }
 
 }