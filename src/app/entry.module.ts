import {NgModule} from '@angular/core';
import {SystemDiagramComponent} from "./system-diagram/system-diagram.component";
import {RouterModule} from "@angular/router";
import {CombinatoricsComponent} from "./combinatorics/combinatorics.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [SystemDiagramComponent, CombinatoricsComponent],
    imports: [
        HttpClientModule,
        RouterModule.forChild([{
            path: "",
            component: CombinatoricsComponent,
        }]),
    ],
    providers: [],
})

export class RemoteEntryModule {
}
