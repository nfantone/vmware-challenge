import { Pipe, PipeTransform } from '@angular/core';
import { Container } from '../containers/container';

@Pipe({ name: 'memoryAllocation' })
export class MemoryAllocationPipe implements PipeTransform {
<<<<<<< HEAD
  transform(containers: Container[], threshold: number = 0) {
    let c = containers.filter(c => c.utilization.memory >= (c.memory * threshold));
=======
  transform(containers: Container[], threshold: number) {
    let c = containers.filter(c => 100 * c.utilization.memory / c.memory > threshold);
>>>>>>> df066835fe636b417831433df4ab91114725c419
    return c;
  }
}
