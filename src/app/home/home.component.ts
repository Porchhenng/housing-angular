import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { housingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="filter by city" #filter >
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class ="results">
     <app-housing-location *ngFor="let housingLocation of filteredLocationList" 
     [housingLocation]="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 housingLocationList: housingLocation[] = [];
 housingService: HousingService = inject(HousingService);
 filteredLocationList: housingLocation[] = [];
 constructor(){
  this.housingService.getAllHousingLocation().then((housingLocationList: housingLocation[]) =>{
    this.housingLocationList = housingLocationList;
    this.filteredLocationList = housingLocationList;
  });
 }
 filterResults(text: string) {
  if (!text) this.filteredLocationList = this.housingLocationList;

  this.filteredLocationList = this.housingLocationList.filter(
    housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
  );
 }
}
