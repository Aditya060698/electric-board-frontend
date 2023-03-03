import { Component, Input, OnInit } from '@angular/core';
import { DasboardModel } from './dasboard.model';
import { DasboardService } from './dasboard.service';
import { requestGraph } from './graph-request';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.css']
})
export class DasboardComponent implements OnInit{

 
  
  // dasboardService!:DasboardService;
  List!:Array<DasboardModel>;
  Status!:Array<String>;
  value:any = null;
  year:number=2021;
  public Total=0;
  public MaxHeight= 160;

  constructor(private dasboardService:DasboardService) { }

  ngOnInit(): void {
    this.getStatus();
    this.getGraphInfo();
    this.MontarGrafico();
  }
  getGraphInfo(): void {
    // console.log(this.searchForm.get('dateFrom')?.value);
    // let dateForm=new Date((this.searchForm.get('dateFrom')?.value));
    console.log(this.value);
    
    let graphRequest: requestGraph = {
      "year":this.year,
      "status":this.value

    };
    this.dasboardService.getGraphInfo(graphRequest)
      .subscribe({
        next: (response: any) => { console.log(response);this.List=response},
        error: (error: any) => console.log("error-->", error),
        complete: () => console.log("completed-->",this.List)
      });
  }
  getStatus():void{
    this.dasboardService.getStatus()
    .subscribe({
      next: (response: any) => { console.log(response);this.Status=response},
      error: (error: any) => console.log("error-->", error),
      complete: () => console.log("completed-->",this.Status)
    });
  }
  MontarGrafico(){
    console.log(this.List);
    
    this.List.forEach(element => {
      this.Total += element.value;
    });

    this.List.forEach(element => {
      element.size = Math.round((element.value*this.MaxHeight)/this.Total) + '%';
    });
  }
  



}
