import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MapDetail } from '../models/MapDetail';
import { MapService } from '../map.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.less']
})
export class MapDetailComponent implements OnInit {

  @Input() map: MapDetail;

  constructor(
    private route: ActivatedRoute,
    private mapService: MapService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getMap();
  }

  getMap(): void {
    const mapId = +this.route.snapshot.paramMap.get('mapid');
    this.mapService.getMap(mapId)
      .subscribe(map => this.map = map);
  }

}
