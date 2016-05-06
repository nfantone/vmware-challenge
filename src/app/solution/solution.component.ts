import {Component} from '@angular/core';
import {ContainerService} from '../containers/container.service';
import {Container} from '../containers/container';
import {Vm} from '../vms/vm';
import {Observable} from 'rxJS/Observable';
import {ContainersListComponent} from './containers-list.component';
import {VmComponent} from './vm.component';
import { VmContainersPipe } from './vm-containers.pipe';
import {ToolbarComponent} from './toolbar.component';

@Component({
  selector: 'my-solution',
  templateUrl: 'app/solution/solution.html',
  providers: [ ContainerService ],
  directives: [ VmComponent, ContainersListComponent, ToolbarComponent ],
  pipes: [ VmContainersPipe ]
})
export class SolutionComponent {
  private static CRITITAL_MEMORY_THRESHOLD : number = 0.8;

  order: boolean;
  containers: Observable<Container[]>;
  memoryThreshold: number = SolutionComponent.CRITITAL_MEMORY_THRESHOLD;
  vmInstance: Vm;

  constructor(private containerService: ContainerService) { }

  onVmLoaded(evt: { vm: Vm }) {
    this.vmInstance = evt.vm;
    this.containers = this.containerService.getContainers();
  }

  toggleContainerState(evt : {container: Container}) : Observable<Container> {
    let c = evt.container;
    return c.state === 'STARTED' ? this.stopContainer(c) : this.startContainer(c);
  }

  stopContainer(c: Container) : Observable<Container> {
    return this.containerService.stopContainer(c);
  }

  startContainer(c: Container) : Observable<Container> {
    return this.containerService.startContainer(c);
  }

  toggleOrder(evt: {order: boolean}) {
    this.order = evt.order;
  }
}
