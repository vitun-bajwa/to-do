import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sub-item-modal',
  templateUrl: './sub-item-modal.component.html',
  styleUrls: ['./sub-item-modal.component.scss']
})
export class SubItemModalComponent implements OnInit {
  Dialog: MatDialogRef<SubItemModalComponent> | any;

  constructor(
    public dialogRef: MatDialogRef<SubItemModalComponent>,
  ) { }

  ngOnInit(): void {
  }

}
