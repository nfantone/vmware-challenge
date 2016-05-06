import {Component, OnInit} from '@angular/core';
import {ContainerService} from '../containers/container.service';
import {Container} from '../containers/container';
import {Observable} from 'rxJS/Observable';
import {ContainersListComponent} from './containers-list.component';
import {ToolbarComponent} from './toolbar.component';

@Component({
  selector: 'my-solution',
  templateUrl: 'app/solution/solution.html',
  providers: [ ContainerService ],
  directives: [ ContainersListComponent, ToolbarComponent ]
})
export class SolutionComponent implements OnInit {
  private static CRITITAL_MEMORY_THRESHOLD : number = 0.8;
  order: Boolean;
  containers: Observable<Container[]>;
  memoryThreshold: number = 0;

  constructor(private containerService: ContainerService) { }

  ngOnInit() {
    this.containers = this.containerService.getContainers();
  }

  toggleCriticalFilter(evt: Event) {
    this.memoryThreshold = this.memoryThreshold > 0 ? 0 : SolutionComponent.CRITITAL_MEMORY_THRESHOLD;
  }

  toggleContainerState(evt : Event) : Observable<Container> {
    let c = evt.container;
    return c.state === 'STARTED' ? this.stopContainer(c) : this.startContainer(c);
  }

  stopContainer(c: Container) : Observable<Container> {
    return this.containerService.stopContainer(c);
  }

  startContainer(c: Container) : Observable<Container> {
    return this.containerService.startContainer(c);
  }

  toggleOrder(evt: Event) {
    this.order = evt.order;
  }
}
