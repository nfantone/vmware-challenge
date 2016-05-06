import {Component, OnInit} from '@angular/core';
import {ContainerService} from '../containers/container.service';
import {Container} from '../containers/container';
import {MemoryFormatPipe} from '../util/memoryFormat.pipe'

const DEFAULT_CONTAINER_ID = 1;

@Component({
  selector: 'my-solution',
  templateUrl: 'app/solution/solution.component.html',
  providers: [
    ContainerService
  ],
  pipes: [MemoryFormatPipe]
})
export class SolutionComponent implements OnInit {
  container: Container;
  constructor(private containerService: ContainerService) {}

  ngOnInit() {
    this.containerService.getContainer(DEFAULT_CONTAINER_ID)
      .subscribe((c: Container) => this.container = c);
  }
}
