import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {
  formData: any;
  downloadJsonHref: any;
  constructor(public dialogRef: MatDialogRef<ChildComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private sanitizer: DomSanitizer) {
    this.formData = data;
    this.generateDownloadJsonUri();
  }

  close(): void {
    this.dialogRef.close();
  }

  save() {
    this.dialogRef.close({});
  }

  generateDownloadJsonUri() {
    var theJSON = JSON.stringify(this.formData);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
  }
}




