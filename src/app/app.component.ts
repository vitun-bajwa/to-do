import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do';
  Dialog: any;

  @Input()category:any;  
//   = [{
//     categoryname:'grocery',
//     items:[{
//       name:'kitchenitem',
//       color: 'red'
//     },
//     {
//       name:'chips',
//       color: 'green'
//     },
//     {
//       name:'candy',
//       color: 'brown'
//     }],

//   },
//   {
//     categoryname:'medical',
//     items:[{
//       name:'syringe',
//       color: 'grey'
//     },
//     {
//       name:'pcm',
//       color: 'blue'
//     },
//     {
//       name:'decold',
//       color: 'grey'
//     }],
//   }
// ];
  constructor(
    private _router: Router,
    public dialogModel: MatDialog,
    public cdr: ChangeDetectorRef,
  ) { }
  ngOnInit(): void {
    this.patch();
  }
  editUser(data: any) {
    this.Dialog = this.dialogModel.open(ModalComponent, {
      data: { data },
      // height: '100%',
      // width: '60%',
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '200ms',
      disableClose: true,
    });
    this.Dialog.afterClosed().subscribe((result: any) => {
      console.log(result);
      
    });
  }

  patch() {
   this.category = localStorage.getItem('register');
  }

  categorye(categoryies:any) {
    debugger
    console.log(categoryies);
    
  }
}
