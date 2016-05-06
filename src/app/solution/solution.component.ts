import {Component, OnInit} from '@angular/core';
import {ContainerService} from '../containers/container.service';
import {Container} from '../containers/container';
import {MemoryFormatPipe} from '../util/memoryFormat.pipe';
import {Observable} from 'rxJS/Observable';

const DEFAULT_CONTAINER_ID = 1;

@Component({
  selector: 'my-solution',
  templateUrl: 'app/solution/solution.component.html',
  styleUrls: ['app/solution/solution.css'],
  providers: [
    ContainerService
  ],
  pipes: [MemoryFormatPipe]
})
export class SolutionComponent implements OnInit {
  container: Container;
  constructor(private containerService: ContainerService) { }

  ngOnInit() {
    this.containerService.getContainer(DEFAULT_CONTAINER_ID)
      .subscribe((c: Container) => this.container = c);
  }
  toggleContainerState(evt : Event) {
    evt.preventDefault();
    evt.stopPropagation();
    return this.container.state === 'STARTED' ? this.stopContainer() : this.startContainer();
  }

  stopContainer() : Observable<Container> {
    return this.containerService.stopContainer(this.container);
  }

  startContainer() : Observable<Container> {
    return this.containerService.startContainer(this.container);
  }
}
