import { Component, OnInit, Input } from '@angular/core';
import { FactoryDetail } from '../models/FactoryDetail';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MapService } from '../map.service';

@Component({
  selector: 'app-factory-detail',
  templateUrl: './factory-detail.component.html',
  styleUrls: ['./factory-detail.component.less']
})
export class FactoryDetailComponent implements OnInit {

  @Input() factory: FactoryDetail;

  constructor(
    private route: ActivatedRoute,
    private mapService: MapService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFactory();
  }

  getFactory(): void {
    const mapId = +this.route.snapshot.paramMap.get('mapid');
    console.log(+this.route.snapshot.paramMap.keys);
    const factoryId = +this.route.snapshot.paramMap.get('factoryId');
    this.mapService.getFactory(mapId, factoryId).subscribe(factory => this.factory = factory);
  }

}
