import {AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {Feature} from "../../model/feature";

@Component({
  selector: 'app-feature-component',
  templateUrl: './feature-component.component.html',
  styleUrls: ['./feature-component.component.scss']
})
export class FeatureComponentComponent implements OnChanges, OnInit, DoCheck, AfterViewInit , OnDestroy{

  @Input() feature!: Feature;

  constructor() {
    console.log("Feature Component Created");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Feature Component Changed");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("Feature Component Initialized");
  }

  ngDoCheck(): void {
    console.log("Feature Component Checked");
  }

  ngAfterViewInit(): void {
    console.log("Feature Component View Initialized");
  }

  ngOnDestroy(): void {
    console.log("Feature Component Destroyed");
  }
}
