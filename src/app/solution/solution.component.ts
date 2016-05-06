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
  order: boolean;
  containers: Observable<Container[]>;
  warningCount: number = 0;
  vmInstance: Vm;

  constructor(private containerService: ContainerService) { }

  onVmLoaded(evt: { vm: Vm }) {
    this.vmInstance = evt.vm;
    this.containers = this.containerService.getContainers();
  }

  onWarning(evt : {containers: Container[]}) {
    if (evt.containers) {
      this.warningCount = evt.containers.length;
    }
  }


  toggleOrder(evt: {order: boolean}) {
    this.order = evt.order;
  }
}
