import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterByIdPipe } from './filter-by-id.pipe';
import { FilterNeighborhoodsPipe } from './filter-neighborhoods';
import { FilterStreetsPipe } from './filter-streets.pipe';
import {currencyCOP} from "./currencyCOP";

@NgModule({
    imports: [ 
        CommonModule 
    ],
    declarations: [
        FilterByIdPipe,
        FilterNeighborhoodsPipe,
        FilterStreetsPipe,
        currencyCOP
    ],
    exports: [
        FilterByIdPipe,
        FilterNeighborhoodsPipe,
        FilterStreetsPipe,
        currencyCOP
    ]
})
export class PipesModule { }
