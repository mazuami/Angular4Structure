import { Component,Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import * as XLSX from 'xlsx';


@Component ({
    selector: 'home-component',
    templateUrl: '../app/home-component.html',
    styleUrls: ['../app/home-component.css']
})


export class homeComponent implements OnInit {
    constructor(){
        console.log("calling from inside the constructor");
    }

    onUpload(event: any) {
        console.log("I am being called");
        let file = event.target.files[0];
        console.log(file);

    }
    fileSelection(event: any){
        let file = event.target.files[0];
        console.log(file);
        console.log(file.name);

         var oReq = new FileReader();
         oReq.readAsArrayBuffer(event.target.files[0]);
        
         oReq.onload = function(e) {
                var data = new Uint8Array(oReq.result);
                var arr = new Array();
                for (var i = 0; i != data.length; ++i) 
                arr[i] = String.fromCharCode(data[i]);
                var bstr = arr.join("");
                var workbook = XLSX.read(bstr, {type: "binary"});
                var first_sheet_name = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[first_sheet_name];
                console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
                var dataLoad= XLSX.utils.sheet_to_json(workbook.Sheets[0],{ raw: true });
                console.log(JSON.stringify(dataLoad));
         }

    }

    ngOnInit(){
        console.log("calling from inside the ngOnInit()");

    }

    ngOnChanges(){
        console.log("calling from inside the ngOnChanges");
    }
}