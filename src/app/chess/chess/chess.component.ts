import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list'
import { retry } from 'rxjs';

@Component({
  selector: 'app-chess',
  standalone: true,
  imports: [CommonModule,MatGridListModule],
  templateUrl: './chess.component.html',
  styleUrl: './chess.component.css'
})
export class ChessComponent {

   tasks :any = [];
   selectedTasks :any = [];
   bgColor:string | null = '';
   selectedIndex : number | null = null;

  constructor(){
    for(let i=0; i<=63 ; i++){
      this.tasks.push(i)
    }
  }

  /** @note change chackground color */
  changeBackgroundColor(index:number){
    let isSelect = this.selectedTasks.find((i:number)=>{
      return index == i;
    })
    
   if(isSelect){
    this.selectedIndex = null;

    /** filter index from selected index and remove it if alredy selected */
    this.selectedTasks = this.selectedTasks.filter((val:any)=>{
     return val != isSelect;
    })
   }else{
     this.selectedIndex = index; 
     this.selectedTasks.push(index)
   }   
  }

  /** @note find index exsist un selected index for change background color */
  filterIndex(index:number){
   let isSelect = this.selectedTasks.find((i:number)=>{
      return index == i;
    })
    
   if(isSelect){
    return true;
   }else{
    return false;
   }
  }

  /** @note check index background color */
  isBlack(index:number){
    let x =  index % 8;
    let y = Math.floor(index / 8);

    return (x + y) % 2 === 1;
  }
}
