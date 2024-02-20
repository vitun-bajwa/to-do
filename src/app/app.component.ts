import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { AdditemComponent } from './additem/additem.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'to-do';
  Dialog: any;
  arr: any = [];
  category: any;
  addItem: any;
  sets: any = [];
  set:any = [];
  constructor(
    private _router: Router,
    public dialog: MatDialog,
  ) { }
  ngOnInit(): void {
    // const storedArr = localStorage.getItem('arr');
    // this.arr = storedArr ? JSON.parse(storedArr) : [];
  }

  openDialog(): any {
    debugger
    const dialogRef = this.dialog.open(ModalComponent, {
      disableClose: true,
      data: { category: this.category }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      // this.arr = this.arr.concat(result);
      this.arr.push({name : result});
      // this.arr = [...result];
      console.log(this.arr);
      // localStorage.setItem('arr', JSON.stringify(this.arr));
      // this.arr = [];
    });
  }
  onButtonClick(item:any) {
    const dialogRef = this.dialog.open(AdditemComponent, {
      disableClose: true,
      data: { addItem: this.addItem, color: '' }
    });
    dialogRef.afterClosed().subscribe((da: any) => {
      if (da) {
          debugger
          const index = this.arr.findIndex((itm: any) => itm.name === item.name);
          if (index !== -1) {
            this.arr[index].sets = this.arr[index].sets || [];
            let newSet = { name: da.data, color: da.color };
            if (da.position === 'top') {
              this.arr[index].sets = [newSet, ...this.arr[index].sets];
            } 
            else {
              this.arr[index].sets = [...this.arr[index].sets, newSet];
            }
          }
        }
    });
  }

  check() {
    let array = [1, 2, 1, 3, 1, 4, 3, 4];
    let uniqueArray = [...new Set(array)];
    console.log(uniqueArray);
    let arrays = [[1, 2, 1, 2], [2, 3, 2, 3], [4, 5, 5, 4], [6, 7, 6, 7]];
    let uniqueArrays = arrays.map(array => Array.from(new Set(array)));
    console.log(uniqueArrays);
  }
  checkTwo() {
    let array = [1,2,3,4,5,6]
    let uniqueArray = array.map(array => array + array);
    console.log(uniqueArray);
  }
   // if (da) {
      //   debugger
      //   const index = this.arr.findIndex((itm: any) => itm.name === item.name);
      //   if (index !== -1) {
      //     this.arr[index].sets = [...(this.arr[index].sets), { name: da }];
      //   }
      // }
      // })
      
      // if (da) {
      //   const index = this.arr.findIndex((itm:any) => itm.name === item.name);
      //   if (index !== -1) {
      //     this.arr[index].sets = this.arr[index].sets || [];
      //     this.arr[index].sets.push({ name: da.data, color: da.color });
      //   }
      // }
}

// if (da) {
//   const index = this.arr.findIndex((itm: any) => itm.name === item.name);
//   if (index !== -1) {
//     this.arr[index].sets = this.arr[index].sets || [];
//     let insertIndex = da.position === 'top' ? 0 : this.arr[index].sets.length;
//     this.arr[index].sets.splice(insertIndex, 0, { name: da.data, color: da.color });
//   }
// }
// });

// if (da) {
//   const index = this.arr.findIndex((itm: any) => itm.name === item.name);
//   if (index !== -1) {
//     this.arr[index].sets = this.arr[index].sets || [];
//     if (da.position === 'top') {
//       this.arr[index].sets.unshift({ name: da.data, color: da.color });
//     } else {
//       this.arr[index].sets.push({ name: da.data, color: da.color });
//     }
//   }
// }

// if (da) {
//   debugger
//   const index = this.arr.findIndex((itm: any) => itm.name === item.name);
//   if (index !== -1) {
//     this.arr[index].sets = this.arr[index].sets || [];
//     let newSet = { name: da.data, color: da.color };
//     if (da.position === 'top') {
//       this.arr[index].sets = [newSet, ...this.arr[index].sets];
//     } else {
//       this.arr[index].sets = [...this.arr[index].sets, newSet];
//     }
//   }
// }