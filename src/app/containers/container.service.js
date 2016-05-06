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
var Observable_1 = require('rxjs/Observable');
var containers_mock_1 = require('./containers.mock');
var simulator_service_1 = require('./simulator.service');
var ContainerService = (function () {
    function ContainerService(simulator) {
        simulator.simulateContainerRuntime(containers_mock_1.CONTAINERS);
    }
    ContainerService.prototype.getContainer = function (id) {
        var target = containers_mock_1.CONTAINERS.find(function (container) { return container.id === id; });
        return Observable_1.Observable.create(function (observer) {
            if (target) {
                observer.next(target);
            }
            else {
                observer.error("No such container with id " + id + ".");
            }
            observer.complete();
        });
    };
    ContainerService.prototype.startContainer = function (container) {
        container.state = 'STARTED';
        return Observable_1.Observable.create(function (observer) {
            observer.next(container);
            observer.complete();
        });
    };
    ContainerService.prototype.stopContainer = function (container) {
        container.state = 'STOPPED';
        container.utilization.cpu = 0;
        container.utilization.memory = 0;
        return Observable_1.Observable.create(function (observer) {
            observer.next(container);
            observer.complete();
        });
    };
    ContainerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [simulator_service_1.SimulatorService])
    ], ContainerService);
    return ContainerService;
}());
exports.ContainerService = ContainerService;
//# sourceMappingURL=container.service.js.map