import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatChipInputEvent } from '@angular/material/chips';
import { Sort } from '@angular/material/sort';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hidden = false;

  constructor(private _matBottomSheet: MatBottomSheet){
    this.sortedData = this.desserts.slice();
  }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  // ===============================Code for BottomShit======================
  openBottomSheet(){
    // this._matBottomSheet.open(BottomSheetComponent,{
    //   data: {
    //     data: "Template for Bottom Sheet",
    //     message: "Template for botttom sheet"
    //   }
    // });
    let bottomSheet = this._matBottomSheet.open(BottomSheetComponent,
      {
        //-------------Passong Data to Bottom Sheet---------------------
        // data: "This is simple string passed"
        data: {
          title: 'Title Here',
          value: 1231244
        },
        disableClose: true,
        hasBackdrop: true
      });

      // ---------------------Data from bottomSheet comp to main comp----------------
      bottomSheet.afterDismissed().subscribe(
        // (result) => alert(result)
      )
  }

  // =======================BottomSheet Over=============================================

  title = 'MatModules';
  fontStyleControl = new FormControl();
  fontStyle?: string;


  //=======================For Check bOx to select all OR None
  checkBoxResult = true;
  task: any = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'},
    ],
  };

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every((t: { completed: any; }) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter((t: { completed: any; }) => t.completed).length > 0 && !this.allComplete;
  }
  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t: { completed: boolean; }) => (t.completed = completed));
  }
  SubmitCheckBox(){
    this.checkBoxResult = false;
  }

  // =================================Chips========================
  keywords = new Set(['angular', 'how-to', 'tutorial']);
  formControl = new FormControl(['angular']);

  addKeywordFromInput(event: MatChipInputEvent) {
    if (event.value) {
      this.keywords.add(event.value);
      event.chipInput!.clear();
    }
  }

  removeKeyword(keyword: string) {
    this.keywords.delete(keyword);
  }


  // ===============================================Sort Data using Header in Table======================
  desserts: any[] = [   //============Here Please specify your own object type
    {name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4},
  ];

  sortedData: any[] = [];

  // constructor() {
  //   this.sortedData = this.desserts.slice();
  // }

  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.calories, b.calories, isAsc);
        case 'fat':
          return compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
