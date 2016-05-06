import { Pipe, PipeTransform } from '@angular/core';
import { Container } from '../containers/container';
import { Vm } from '../vms/vm';

@Pipe({ name: 'vm' })
export class VmContainersPipe implements PipeTransform {
  transform(containers: Container[], vm: Vm) {
    return containers ? containers.filter(c => c.state === 'STARTED'
      && vm.containers.indexOf(c.id) > -1) : containers;
  }
}
