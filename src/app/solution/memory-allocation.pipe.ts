import { Pipe, PipeTransform } from '@angular/core';
import { Container } from '../containers/container';

@Pipe({ name: 'memoryAllocation' })
export class MemoryAllocationPipe implements PipeTransform {
  transform(containers: Container[], threshold: number = 0) {
    return containers ? containers.filter(c => c.utilization.memory >= (c.memory * threshold)) : containers;
  }
}
