import { Component, OnInit } from "@angular/core";
import { IGrocery } from './grocery';
import { GroceryService } from './grocery.service';

@Component({
    selector:'app-groceries',
    templateUrl: 'groceries-list.component.html',
    styleUrls: ['grocery-list.component.css']
})
export class GroceryListComponent {
    pageTitle: string = 'Grocery List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    
    groceries: IGrocery[] = [];
    
    constructor(private groceryService: GroceryService){
    }
    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void{
        console.log('OnInit: LifeCycle Hook');
        this.groceries = this.groceryService.getGroceries();
    }

    onCheckCircleClicked(message:string): void{
        this.pageTitle = 'Grocery List: ' + message;
    }
}