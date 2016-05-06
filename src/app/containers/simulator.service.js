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
var SimulatorService = (function () {
    function SimulatorService() {
    }
    SimulatorService.prototype.simulateContainerRuntime = function (containers) {
        var _this = this;
        setInterval(function () { return containers.map(function (container) { return _this._updateContainerCPU(container); }); }, 1000);
        setInterval(function () { return containers.map(function (container) { return _this._updateContainerMemory(container); }); }, 4000);
        setInterval(function () { return containers.map(function (container) { return _this._updateContainerDisk(container); }); }, 7000);
    };
    SimulatorService.prototype._updateContainerCPU = function (container) {
        if (container.state === 'STOPPED') {
            // Stopped containers don't have live updates.
            return;
        }
        container.utilization.cpu = this._getNextCpuStat();
    };
    SimulatorService.prototype._updateContainerMemory = function (container) {
        if (container.state === 'STOPPED') {
            // Stopped containers don't have live updates.
            return;
        }
        container.utilization.memory = this._getNextMemoryStat(container);
    };
    SimulatorService.prototype._updateContainerDisk = function (container) {
        if (container.state === 'STOPPED') {
            // Stopped containers don't have live updates.
            return;
        }
        container.utilization.disk = this._getNextDiskStat(container);
    };
    SimulatorService.prototype._getNextCpuStat = function () {
        return this._getRandomInt(0, 101);
    };
    SimulatorService.prototype._getNextMemoryStat = function (container) {
        // .25 MB
        var MIN_INCREASE = 262144;
        // 10 MB
        var MAX_INCREASE = 10485760;
        var increase = this._getRandomInt(MIN_INCREASE, MAX_INCREASE);
        return Math.min(increase + container.utilization.memory, container.memory);
    };
    SimulatorService.prototype._getNextDiskStat = function (container) {
        // 10 MB
        var MIN_INCREASE = 10485760;
        // 250 MB
        var MAX_INCREASE = 262144000;
        var increase = this._getRandomInt(MIN_INCREASE, MAX_INCREASE);
        return increase + container.utilization.disk;
    };
    SimulatorService.prototype._getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    SimulatorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SimulatorService);
    return SimulatorService;
}());
exports.SimulatorService = SimulatorService;
//# sourceMappingURL=simulator.service.js.map