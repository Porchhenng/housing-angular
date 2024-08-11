import { Injectable } from '@angular/core';
import { housingLocation } from './housing-location';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

  url = 'http://localhost:3000/Location';
  constructor() { }

  async getAllHousingLocation(): Promise<housingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: Number): Promise<housingLocation | undefined>
  {
  const data = await fetch(`${this.url}/${id}`);
  return await data.json() ?? {};
  }
  submitApplication(firstName: string, lastName: string, email: string){
    console.log(firstName, lastName, email);
    
  }
}
