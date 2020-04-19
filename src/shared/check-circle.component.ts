import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-check-circle',
    templateUrl: 'check-circle.component.html',
    styleUrls: ['check-circle.component.css']
    
})
export class CheckCircleComponent {
    @Input() isChecked:boolean = false;
    
}