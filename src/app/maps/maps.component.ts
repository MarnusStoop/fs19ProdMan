import { Component, OnInit } from '@angular/core';
import { MapDetail } from '../models/MapDetail';
import { MapService } from '../map.service';


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.less']
})
export class MapsComponent implements OnInit {

  maps: MapDetail[];

  constructor(private mapservice: MapService) { }

  ngOnInit(): void {
    this.getMaps();
  }

  getMaps(): void {
    this.mapservice.getMaps().subscribe(maps => this.maps = maps);
  }

}
