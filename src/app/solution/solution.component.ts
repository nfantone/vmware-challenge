import {Component, OnInit} from '@angular/core';
import {ContainerService} from '../containers/container.service';
import {Container} from '../containers/container';
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

  constructor(private containerService: ContainerService) { }

  ngOnInit() {
    this.containers = this.containerService.getContainers();
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
    return c.state === 'STARTED' ? this.stopContainer(c) : this.startContainer(c);
  }

  stopContainer(c: Container) : Observable<Container> {
    return this.containerService.stopContainer(c);
  }

  startContainer(c: Container) : Observable<Container> {
    return this.containerService.startContainer(c);
  }
}
