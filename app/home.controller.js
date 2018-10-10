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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var XLSX = require("xlsx");
var homeComponent = /** @class */ (function () {
    function homeComponent() {
        console.log("calling from inside the constructor");
    }
    homeComponent.prototype.onUpload = function (event) {
        console.log("I am being called");
        var file = event.target.files[0];
        console.log(file);
    };
    homeComponent.prototype.fileSelection = function (event) {
        var file = event.target.files[0];
        console.log(file);
        console.log(file.name);
        var oReq = new FileReader();
        oReq.readAsArrayBuffer(event.target.files[0]);
        oReq.onload = function (e) {
            var data = new Uint8Array(oReq.result);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
            var dataLoad = XLSX.utils.sheet_to_json(workbook.Sheets[0], { raw: true });
            console.log(JSON.stringify(dataLoad));
        };
    };
    homeComponent.prototype.ngOnInit = function () {
        console.log("calling from inside the ngOnInit()");
    };
    homeComponent.prototype.ngOnChanges = function () {
        console.log("calling from inside the ngOnChanges");
    };
    homeComponent = __decorate([
        core_1.Component({
            selector: 'home-component',
            templateUrl: '../app/home-component.html',
            styleUrls: ['../app/home-component.css']
        }),
        __metadata("design:paramtypes", [])
    ], homeComponent);
    return homeComponent;
}());
exports.homeComponent = homeComponent;
//# sourceMappingURL=home.controller.js.map