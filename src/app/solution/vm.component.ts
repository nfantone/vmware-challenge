import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Container} from '../containers/container';
import {Vm} from '../vms/vm';
import {VmService} from '../vms/vm.service';

@Component({
  selector: 'vmw-vm',
  templateUrl: 'app/solution/vm.html',
  styleUrls: ['app/solution/vm.css'],
  providers: [ VmService ]
})
export class VmComponent implements OnInit {
  private static DEFAULT_VM_ID : number = 1;

  @Input()
  alerts: number = 0;

  @Output()
  vmLoaded = new EventEmitter<{ vm: Vm }>();
  vm: Vm;

  constructor(private vmService: VmService) { }

  ngOnInit() {
    this.vmService.getVm(VmComponent.DEFAULT_VM_ID)
      .subscribe((vm) => {
        this.vm = vm;
        this.vmLoaded.emit({ vm });
      });
  }
}
