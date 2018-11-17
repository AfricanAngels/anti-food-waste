import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        FormsModule,
        Location
    ],
    declarations: []
})
export class SharedModule {

    constructor(private location: Location) {}
 }
