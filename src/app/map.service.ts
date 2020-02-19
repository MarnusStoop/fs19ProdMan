import { Injectable } from '@angular/core';
import { MapDetail } from './models/MapDetail';
import { Observable, of } from 'rxjs';
import { FactoryDetail } from './models/FactoryDetail';
import { FactoryIOType } from './models/Enums';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  maps: MapDetail[] = [
    {
      Id: 1,
      Name: 'DonDiego',
      Factories: [
        {
          Id: 1,
          Name: 'Wood factory',
          Inputs: [
            {
              Name: 'Logs',
              Amount: 1,
              IOType: FactoryIOType.Trailer
            }
          ],
          Outputs: [
            {
              Name: 'Boards',
              Amount: 0.8,
              IOType: FactoryIOType.Pallet,
              NeededPerPallet: 4000
            },
            {
              Name: 'Wood chips',
              Amount: 0.2,
              IOType: FactoryIOType.Trailer,
              NeededPerPallet: 0
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  getMaps(): Observable<MapDetail[]> {
    return of(this.maps);
  }

  getMap(id: number): Observable<MapDetail> {
    return of(this.maps.find(map => map.Id === id));
  }

  getFactory(mapId: number, factoryId: number): Observable<FactoryDetail> {
    return of(this.maps.find(map => map.Id === mapId).Factories.find(factory => factory.Id === factoryId));
  }
}
