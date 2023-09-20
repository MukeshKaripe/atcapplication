



import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Calendar } from 'primeng/calendar';
import { MasterServiceService } from 'src/app/master-service.service';
import { RadioButtonModule } from 'primeng/radiobutton';


@Component({
  selector: 'app-home-m',
  templateUrl: './home-m.component.html',
  styleUrls: ['./home-m.component.scss'],
  providers: [DatePipe],
})


export class HomeMComponent  implements OnInit {
  public oneWayCheck: boolean = true;
  public returnWayCheck: boolean = false;
  public multiWayCheck: boolean = false;
  public travellersCheck: boolean = false;

  searchFormInit!: FormGroup;
  FormMultyWayInit!: FormGroup;
  minDate!: Date;
  currentDate: Date = new Date();
  multyWayDate: Date = new Date();
  returnDate: Date | null = null;
  fromCity!: string;
  toCity!: string;

  infantCounts: number = 0;
  infantCounts2!: number;
  childrenCounts: number = 0;
  childrenCounts2!: number;
  adultCounts: number = 1;
  adultCounts2: number = 1;
  travellClass: string = 'Economy';
  travellClass2: string = 'Economy';
  way: string = 'oneway';

  CountryList = [
    { name: 'Singapoor', code: 'SGP' },
    { name: 'Saudi Arabia', code: 'SA' },
    { name: 'Dubai', code: 'UAE' },
    { name: 'USA', code: 'USA' },
    { name: 'Australia', code: 'AUS' },
    { name: 'England', code: 'ENG' },
    { name: 'Hyderabad', code: 'HYD' },
    { name: 'Delhi', code: 'DEL' },
    { name: 'NewZeland', code: 'NZ' },
  ];
  seatingClass = [
    { class: 'Economy/Premium Economy' },
    { class: 'Premium Economy' },
    { class: 'Business' },
  ];

  constructor(private routrer:Router, private fb: FormBuilder, private myServ:MasterServiceService) {
    // this.day = this.datePipe.transform(this.currentDate, 'EEEE');
    // this.date = this.datePipe.transform(this.currentDate, 'dd');
    // this.month = this.datePipe.transform(this.currentDate, 'MMM');
    // this.year = this.datePipe.transform(this.currentDate, 'yy');
    // console.log(this.day, this.date, this.month, this.year);
  }

  ngOnInit(): void {
    this.formInit();
    this.totalTravellers =
      Number(this.adultCounts) +
      Number(this.childrenCounts) +
      Number(this.infantCounts);
  }

  // setting one date extra to current date.
  increaseDateByOneDay(): void {
    this.multyWayDate.setDate(this.multyWayDate.getDate() + 1);
  }
  roundtrip(data:any){
    console.log(data);

  }

  multiWayForm(){
    this.way = 'multiway'
    this.formInit()
  }
  formInit() {
    this.searchFormInit = this.fb.group({
      fromCity: [''],
      toCity: [''],
      initialDate: [this.currentDate],
      returnDate: [''],
      travellers:[''],
    });
    this.FormMultyWayInit = this.fb.group({
      formType:'multywayForm',
      initialDate: [this.currentDate],
      returnDate: [''],
      travellers:[''],
      multiWay: this.fb.array([this.forMultyWay('')]),
    });

  }

  get multywayArray():FormArray {
    return this.FormMultyWayInit.get('multiWay') as FormArray;
  }
  forMultyWay(city:string):FormGroup {
    return this.fb.group({
      fromCityMulty: [city],
      toCityMulty: [''],
      initialDateMulty: [this.currentDate],
    });
  }
  addMultyWay(){
    const cityName = this.multywayArray.controls[this.multywayArray.length - 1]?.get('toCityMulty')?.value || ''
    this.multywayArray.push(this.forMultyWay(cityName))
  }


  deleteMultyWay(index: number) {
    this.multywayArray.removeAt(index);
  }

  interchangeCities() {
    const fromCityValue = this.searchFormInit.value.fromCity;
    const toCityValue = this.searchFormInit.value.toCity;
    this.searchFormInit.patchValue({
      fromCity: toCityValue,
      toCity: fromCityValue,
    });
  }

  onDateChanged(newDate: any) {
    this.currentDate = newDate;
  }
  onMultyDateChanged(newDate: Date) {
    this.multyWayDate = newDate;
  }
  onReturnDateChanged(newDate: Date) {
    this.returnDate = newDate;
    this.oneWayCheck = false;
    this.returnWayCheck = true;
  }
  removeReturnDate() {
    this.returnDate = null;
    this.oneWayCheck = true;
    this.returnWayCheck = false;
  }
  adultCount(): number[] {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  getAdultCount(num: number) {
    this.adultCounts = num;
    this.totalTravellers =
      Number(this.adultCounts) +
      Number(this.childrenCounts) +
      Number(this.infantCounts);
  }
  childrenCount(): number[] {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }
  childrenCounta(): number[] {
    return [0, 1, 2, 3, 4, 5, 6];
  }

  getChildrenCount(num: number) {
    this.childrenCounts = num;
    this.totalTravellers =
      Number(this.adultCounts) +
      Number(this.childrenCounts) +
      Number(this.infantCounts);
  }
  infantCount(): number[] {
    return [0, 1, 2, 3, 4, 5, 6];
  }

  getInfantCount(num: number) {
    this.infantCounts = num;
    this.totalTravellers =
      Number(this.adultCounts) +
      Number(this.childrenCounts) +
      Number(this.infantCounts);
  }

  getSeatClass(str: string) {
    this.travellClass = str;
  }
  totalTravellers: number = 0;
  totalTravellers2: number = 1;

  travellerFun() {
    this.travellClass2 = this.travellClass;
    this.adultCounts2 = this.adultCounts;
    this.childrenCounts2 = this.childrenCounts;
    this.infantCounts2 = this.infantCounts;
    this.totalTravellers =
      Number(this.adultCounts) +
      Number(this.childrenCounts) +
      Number(this.infantCounts);
    this.totalTravellers2 = this.totalTravellers;
    this.travellersCheck = false;
  }
  formSubmit() {
    if(this.way === 'oneway'){
      this.myServ.searchFlightsData(this.searchFormInit.value)
    }
    else {
      this.myServ.searchFlightsData(this.FormMultyWayInit.value)

    }
    this.routrer.navigate(['/flights'])
  }
}
