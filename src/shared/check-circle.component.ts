import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-check-circle',
    templateUrl: 'check-circle.component.html',
    styleUrls: ['check-circle.component.css']
    
})
export class CheckCircleComponent implements OnChanges {
    @Input() isChecked = true;
    @Output() isCheckedClicked: EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges(): void{
        console.log('isCheckedValue: ' + this.isChecked);
    }

    onClick(): void{
     this.isCheckedClicked.emit( `The Got it value of: ${this.isChecked} was clicked!`);
    }
}