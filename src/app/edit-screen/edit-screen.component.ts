import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DasboardService } from '../dasboard/dasboard.service';
import { EditScreenService } from '../edit-screen/edit-screen.service';

@Component({
  selector: 'app-edit-screen',
  templateUrl: './edit-screen.component.html',
  styleUrls: ['./edit-screen.component.css']
})
export class EditScreenComponent implements OnInit {
  id!:number;
  
  response!: any;
  status!: string;
  Status!: Array<String>;
  msg!: any;
  editForm: any;
  constructor(private route: ActivatedRoute,private editStatusService: EditScreenService,private dasboardService:DasboardService){ }
  ngOnInit() {
    this.id=0;
    this.msg=null;
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];console.log(params);
      
    });
    this.getApplicantsInfo();
    this.getStatus();
  }
  getApplicantsInfo():any{
    this.editStatusService.getApplicantsInfo(this.id)
      .subscribe({
        next: (response: any) => { this.response = response;console.log(response);
         },
        error: (error: any) => console.log("error-->", error),
        complete: () => console.log("completed")
      });
  }
  editStatus():any{
    this.editStatusService.editStatus(this.id,this.status)
      .subscribe({
        next: (response: any) => {console.log(response);this.msg=response;
         },
        error: (error: any) => console.log("error-->", error),
        complete: () => console.log("completed")
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
}
