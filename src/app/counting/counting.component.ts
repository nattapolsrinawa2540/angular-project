import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-counting',
 templateUrl: './counting.component.html',
 styleUrls: ['./counting.component.css']
})
export class CountingComponent {
    @Input()
    title: string;

    counting = 0;
    constructor() {}

    countingNumber(){
        this.counting = this.counting + 10;
    }
}
