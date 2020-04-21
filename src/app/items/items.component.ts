import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { RestfulService } from './../services/restful.service';

export interface PeriodicElement {
  item: string;
  cost: number;
  desc: string;
  bag:  number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {item: 'Sword', cost: 2, desc: 'A rusty sword' , bag: 1 },
  {item: 'HP Potion', cost: 3, desc: 'Heals ya' , bag: 1 },
  {item: 'Apple', cost: 4, desc: 'Restors Hunger' , bag: 2 },
  {item: 'Shield', cost: 5, desc: 'Protects ya' , bag: 2 },
  {item: 'Fishing Rod', cost: 6, desc: 'To catch fish' , bag: 3 },
  {item: 'Fishing Bait', cost: 7, desc: 'Bait for fish' , bag: 3 },

];

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  // displayedColumns: string[] = ['item', 'cost', 'desc', 'bag'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }


  displayedColumns: string[] = ['item', 'cost', 'desc', 'bag'];
}
