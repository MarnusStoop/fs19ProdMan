import { Injectable } from '@angular/core';
import { MapService } from './map.service';
import { Observable, of } from 'rxjs';
import { FactoryDetail } from './models/FactoryDetail';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  constructor(private mapService: MapService) { }

  // getFactory(mapId: number, factoryName: string): Observable<FactoryDetail> {
  //   return of(this.mapService.getMap(mapId).subscribe());
  // }
}
