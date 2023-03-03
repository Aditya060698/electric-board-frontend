import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { request } from './applicants-info-request';
import { ApplicantsInfoService } from './applicants-info.service';

@Component({
  selector: 'app-applicants-info',
  templateUrl: './applicants-info.component.html',
  styleUrls: ['./applicants-info.component.css']
})
export class ApplicantsInfoComponent implements OnInit {
  applicantInfoRequest!: any;
  searchForm!: FormGroup;
  submitted!: boolean;
  response!: any;
  pageNo!: number;
  flag:boolean=false;

  constructor(private applicantsInfoService: ApplicantsInfoService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.pageNo = 1;
    this.searchForm = this.formBuilder.group({
      id: [null, Validators.required],
      dateFrom: [null, Validators.required],
      dateTo: [null, Validators.required]
    });
    this.getApplicantsInfo();
  }
  getApplicantsInfo(): void {
    console.log(this.searchForm.get('dateFrom')?.value);
    // let dateForm=new Date((this.searchForm.get('dateFrom')?.value));
    let applicantInfoRequest: request = {
      "pageNo": this.pageNo,
      "pageSize": 10,
      "id": this.searchForm.get('id')?.value,
      "dateOfApplicationFrom":this.searchForm.get('dateFrom')?.value,
      "dateOfApplicationTo":this.searchForm.get('dateTo')?.value

    };
    this.applicantsInfoService.getApplicantsInfo(applicantInfoRequest)
      .subscribe({
        next: (response: any) => { this.response = response },
        error: (error: any) => console.log("error-->", error),
        complete: () => console.log("completed")
      });
  }
  pageIncrement(): void {
    this.pageNo++;
    this.getApplicantsInfo();
  }
  pageDecrement(): void {
    this.pageNo--;
    this.getApplicantsInfo();
  }
  edit():void{
    this.flag=true;
  }
  save():void{
    this.flag=false
  }
};

