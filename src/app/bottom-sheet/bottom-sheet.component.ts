import { Component, OnInit, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(
    //--------------- Taking Data from main comp----------
    @Inject(MAT_BOTTOM_SHEET_DATA) public data : {title: string, value: number},
    //----------------Sending data to main comp------------------  SEE ngOnDestroy() method
    private matBottomSheetRef: MatBottomSheetRef
  ) { }

  ngOnInit(): void {
    // alert(this.data);
  }

  openLink(eve: any){
    alert(eve);
  }

  ngOnDestroy(){
    this.matBottomSheetRef.dismiss("Data from Bottom Sheet to main Comp")
  }

  closeBottomSheet(){
    this.matBottomSheetRef.dismiss();
  }


}
