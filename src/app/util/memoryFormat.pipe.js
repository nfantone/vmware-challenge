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
/**
 * Pretty formats a memory value given in Bytes to the corresponding value in the
 * 'most appropriate' memory unit. Returns a string with two decimal places and the
 * unit appended.
 */
var MemoryFormatPipe = (function () {
    function MemoryFormatPipe() {
        /**
         * Units for measuring storage, in magnitude order.
         */
        this._STORAGE_SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    }
    MemoryFormatPipe.prototype.transform = function (memoryValue) {
        return this._formatBytes(Number.parseInt(memoryValue, 10), 2);
    };
    /**
     * Pretty formats the given size to a string in the closest size unit.
     *
     * Note, lifted from: http://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
     *
     * @param bytes
     *    Number of bytes to format.
     *
     * @param decimals
     *    Max number of decimals to display.
     *
     * @returns {string}
     *    Pretty formatted size string.
     */
    MemoryFormatPipe.prototype._formatBytes = function (bytes, decimals) {
        if (bytes == 0)
            return '0 Bytes';
        var k = 1024;
        var i = this._nearestStorageUnitIndex(bytes);
        return (bytes / Math.pow(k, i)).toFixed(decimals) + ' ' + this._STORAGE_SIZES[i];
    };
    /**
     * Returns an index from STORAGE_SIZES for the storage unit most closely matching
     * the given number of bytes.
     *
     * @param bytes
     *    The bytes to find the storage unit index for.
     *
     * @returns {any}
     *    Index from STORAGE_SIZES
     */
    MemoryFormatPipe.prototype._nearestStorageUnitIndex = function (bytes) {
        if (bytes === 0) {
            return 0;
        }
        var k = 1024;
        return Math.floor(Math.log(bytes) / Math.log(k));
    };
    MemoryFormatPipe = __decorate([
        core_1.Pipe({ name: 'vmwMemoryFormat' }), 
        __metadata('design:paramtypes', [])
    ], MemoryFormatPipe);
    return MemoryFormatPipe;
}());
exports.MemoryFormatPipe = MemoryFormatPipe;
//# sourceMappingURL=memoryFormat.pipe.js.map