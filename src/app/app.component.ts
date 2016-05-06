import {Component, OnInit} from '@angular/core';
import {SolutionComponent} from './solution/solution.component';
import {SimulatorService} from './containers/simulator.service';

@Component({
    selector: 'my-app',
    template: `<my-solution></my-solution>`,
    directives: [SolutionComponent],
    providers: [SimulatorService],
})
export class AppComponent{}
