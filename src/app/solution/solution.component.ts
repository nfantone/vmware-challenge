import {Component, OnInit} from '@angular/core';
import {ContainerService} from '../containers/container.service';
import {Container} from '../containers/container';
<<<<<<< HEAD
import {Observable} from 'rxJS/Observable';
import {ContainersListComponent} from './containers-list.component';

@Component({
  selector: 'my-solution',
  templateUrl: 'app/solution/solution.html',
  providers: [ ContainerService ],
  directives: [ ContainersListComponent ]
})
export class SolutionComponent implements OnInit {
  private static CRITITAL_MEMORY_THRESHOLD : number = 0.8;

  containers: Observable<Container[]>;
  memoryThreshold: number = 0;
=======
import {MemoryFormatPipe} from '../util/memoryFormat.pipe';
import {SortByIdPipe} from './sort-by-id.pipe';
import {MemoryAllocationPipe} from './memory-allocation.pipe';
import {Observable} from 'rxJS/Observable';

@Component({
  selector: 'my-solution',
  templateUrl: 'app/solution/solution.component.html',
  styleUrls: ['app/solution/solution.css'],
  providers: [
    ContainerService
  ],
  pipes: [MemoryFormatPipe, SortByIdPipe, MemoryAllocationPipe]
})
export class SolutionComponent implements OnInit {
  private static CRITITAL_MEMORY_THRESHOLD : number = 80;

  memoryThreshold: number = 0;
  order: boolean;
  containers: Observable<Container[]>;
>>>>>>> df066835fe636b417831433df4ab91114725c419

  constructor(private containerService: ContainerService) { }

  ngOnInit() {
    this.containers = this.containerService.getContainers();
<<<<<<< HEAD
  }

  toggleCriticalFilter(evt: Event) {
    this.memoryThreshold = this.memoryThreshold > 0 ? 0 : SolutionComponent.CRITITAL_MEMORY_THRESHOLD;
  }

  toggleContainerState(evt : Event) : Observable<Container> {
    let c = evt.container;
=======
  }

  toggleCriticalFilter(evt: Event) {
    evt.preventDefault();
    evt.stopPropagation();
    let elem: HTMLInputElement = <HTMLInputElement>evt.srcElement;
    if (elem.checked) {
      this.memoryThreshold = SolutionComponent.CRITITAL_MEMORY_THRESHOLD;
    } else {
      this.memoryThreshold = 0;
    }
  }

  toggleContainerState(evt : Event, c: Container) : Observable<Container> {
    evt.preventDefault();
    evt.stopPropagation();
>>>>>>> df066835fe636b417831433df4ab91114725c419
    return c.state === 'STARTED' ? this.stopContainer(c) : this.startContainer(c);
  }

  stopContainer(c: Container) : Observable<Container> {
    return this.containerService.stopContainer(c);
  }

  startContainer(c: Container) : Observable<Container> {
    return this.containerService.startContainer(c);
  }
}
