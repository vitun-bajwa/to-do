import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { SubItemModalComponent } from '../sub-item-modal/sub-item-modal.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  profileForm!: FormGroup
  Dialog: MatDialogRef<SubItemModalComponent> | any;
  changeBtn: boolean = false;
  myFormm!: any;
  @Output() categoryies = new EventEmitter<any>();
  constructor(
    public dialogRef: MatDialogRef<any>,
    public dialogModel: MatDialog,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      categoryName: ['', Validators.required]
    });
  }
  category: any = [];
  register() {
    if (this.profileForm.valid) {
     let value =  this.category.push(this.profileForm.value);
      this.categoryies.emit(value)
      this.dialogRef.close('jhkjhkjkj');
      console.log(this.category);
      // this.category = [...this.profileForm.value,];
      // console.log(this.profileForm.value);
      // for (let i = 0; i < this.profileForm.value.length; i++) {
      //   this.category.push(this.profileForm.value[i]);
      //   console.log(this.category);
      // }
    }
  }

  editUser(data: any) {
    this.Dialog = this.dialogModel.open(SubItemModalComponent, {
      data: { data },
      // height: '100%',
      // width: '60%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms',
      disableClose: true,
    });
    this.Dialog.afterClosed().subscribe((result: any) => {
    });
  }
}