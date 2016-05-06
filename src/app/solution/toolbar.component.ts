import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'vmw-toolbar',
  templateUrl: 'app/solution/toolbar.html',
  styleUrls: ['app/solution/toolbar.css']
})
export class ToolbarComponent {
  private static DEFAULT_TITLE = 'Containers';
  order: boolean = true;

  @Input()
  title: string = ToolbarComponent.DEFAULT_TITLE;

  @Output()
  sortChange: EventEmitter<Object> = new EventEmitter();

  onSortChange() {
    this.sortChange.emit({order: this.order});
  }
}
