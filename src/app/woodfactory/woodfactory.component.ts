import { Component, OnInit } from '@angular/core';
import { FactoryInput } from '../models/FactoryInput';
import { INPUTS } from '../configs/woodfactoryconfigs';
import { OUTPUTS } from '../configs/woodfactoryconfigs';

@Component({
  selector: 'app-woodfactory',
  templateUrl: './woodfactory.component.html',
  styleUrls: ['./woodfactory.component.less']
})
export class WoodfactoryComponent implements OnInit {

  inputs = INPUTS;
  outputs = OUTPUTS;

  constructor() { }

  ngOnInit(): void {
  }

}
