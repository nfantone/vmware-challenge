import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import {Container} from '../containers/container';
import {MemoryFormatPipe} from '../util/memoryFormat.pipe';
import {SortByIdPipe} from './sort-by-id.pipe';

@Component({
    selector: 'vmw-containers-list',
    templateUrl: 'app/solution/containers-list.html',
    pipes: [MemoryFormatPipe, SortByIdPipe],
    styleUrls: ['app/solution/containers-list.css']
})
export class ContainersListComponent implements OnChanges {
  private static MEMORY_WARNING_THRESHOLD = 0.8;

  @Input()
  private containers: Container[];

  @Input()
  private idOrder: boolean;

  @Output()
  warning: EventEmitter<{ containers: Container[] }> = new EventEmitter();

  ngOnChanges(changes: {[key: string]: SimpleChange}) {
    if (changes['containers'] && changes['containers'].currentValue) {
      let warnings = this.containers.filter((c) => this.highMemory(c));
      this.warning.emit({ containers: warnings });
    }
  }

  highMemory(container: Container) {
    return container.utilization.memory > (container.memory * ContainersListComponent.MEMORY_WARNING_THRESHOLD);
  }
}
