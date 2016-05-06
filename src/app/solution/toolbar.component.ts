import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'vmw-toolbar',
  templateUrl: 'app/solution/toolbar.html',
  styleUrls: ['app/solution/toolbar.css']
})
export class ToolbarComponent {

  order: Boolean = true;

  @Output()
  filterChange: EventEmitter<any> = new EventEmitter();

  @Output()
  sortChange: EventEmitter<Object> = new EventEmitter();

  onSortChange() {
    this.sortChange.emit({order: this.order});
  }
  onFilterChange() {
    this.filterChange.emit(null);
  }
}
