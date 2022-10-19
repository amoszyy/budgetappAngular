import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'budgetapp';
  public expense:string = ''
  public price:any = 0
  public duedate:any = ''
  public budgetarray:any=[]
  // public budgetindex:any = {}
  public totalprice:any = 0
  public budgetdetails:any = {expense:this.expense, price:this.price, duedate:this.duedate, totalprice:0}
  
  
  addbudget(){
    let budgetdetails = {expense:this.expense, price:this.price, duedate:this.duedate, totalprice:0}
    console.log(budgetdetails)
    this.totalprice= this.price + this.totalprice
    console.log(this.totalprice)
    this.budgetarray.push(budgetdetails)
    console.log(this.budgetarray)
    

  }
  delete(i:any){
    this.budgetarray=this.budgetarray.filter((item:any, index:any)=>index!=i)
    this.totalprice = this.totalprice - this.price
  }

}

