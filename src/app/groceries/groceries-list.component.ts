import { Component } from "@angular/core";
import {IGrocery} from './grocery';
import { GroceryService } from './grocery.service';
@Component({
    selector:'app-groceries',
    templateUrl: 'groceries-list.component.html',
    styleUrls: ['grocery-list.component.css']
})
export class GroceryListComponent {
    pageTitle: string = 'Grocery List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean = false;
    listFilter:string = 'cart';

    groceries:IGrocery[] = [];

    constructor(private groceryService:GroceryService){}

    ngOnInit():void{
        this.groceries =this.groceryService.getGroceries()
    }

    toggleImage():void{
        this.showImage =! this.showImage; 
    }
}