import { Pipe, PipeTransform } from '@angular/core';
import { Container } from '../containers/container';

@Pipe({ name: 'memoryAllocation' })
export class MemoryAllocationPipe implements PipeTransform {
  transform(containers: Container[], threshold: number = 0) {
    let c = containers.filter(c => c.utilization.memory >= (c.memory * threshold));
    return c;
  }
}
