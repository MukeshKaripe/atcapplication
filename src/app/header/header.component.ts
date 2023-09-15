import { Component, OnInit } from '@angular/core';

// export interface Country {
//   name: string;
//   code: string;
//   image: string;
// }
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public showCountrylist = false;
  // public countries!: Country[];
  public currencies = ['INR'];

  showCountryListDiv() {
    
    this.showCountrylist = !this.showCountrylist;
  }
  onApply() {
    // Storing selected country in variable whcih is declared in service
    
    this.showCountrylist = !this.showCountrylist;

   
  }
  // countries!: any[];

  //   selectedCountry!: any ;

  //   ngOnInit() {
  //       this.countries = [
  //           { name: 'Australia', code: 'AU' },
  //           { name: 'Brazil', code: 'BR' },
  //           { name: 'China', code: 'CN' },
  //           { name: 'Egypt', code: 'EG' },
  //           { name: 'France', code: 'FR' },
  //           { name: 'Germany', code: 'DE' },
  //           { name: 'India', code: 'IN' },
  //           { name: 'Japan', code: 'JP' },
  //           { name: 'Spain', code: 'ES' },
  //           { name: 'United States', code: 'US' }
  //       ];
  //   }
    cities!: City[] ;

    selectedCity: City | undefined;

    ngOnInit() {
        this.cities = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
        ];
    }
}
