import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { regex } from '../regex';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit {
  data: any;
  inputColor = {
    color: '#000000',
    position: ''
  }
  constructor(
    // @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<any>,
  ) { }

  ngOnInit(): void {
  }
  register() {
    this.dialogRef.close({data:this.data,color:this.inputColor.color, position:this.inputColor.position});
  }
}

