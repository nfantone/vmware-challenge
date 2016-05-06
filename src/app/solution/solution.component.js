"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var container_service_1 = require('../containers/container.service');
var memoryFormat_pipe_1 = require('../util/memoryFormat.pipe');
var DEFAULT_CONTAINER_ID = 1;
var SolutionComponent = (function () {
    function SolutionComponent(containerService) {
        this.containerService = containerService;
    }
    SolutionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.containerService.getContainer(DEFAULT_CONTAINER_ID)
            .subscribe(function (c) { return _this.container = c; });
    };
    SolutionComponent = __decorate([
        core_1.Component({
            selector: 'my-solution',
            templateUrl: 'app/solution/solution.component.html',
            providers: [
                container_service_1.ContainerService
            ],
            pipes: [memoryFormat_pipe_1.MemoryFormatPipe]
        }), 
        __metadata('design:paramtypes', [container_service_1.ContainerService])
    ], SolutionComponent);
    return SolutionComponent;
}());
exports.SolutionComponent = SolutionComponent;
//# sourceMappingURL=solution.component.js.map