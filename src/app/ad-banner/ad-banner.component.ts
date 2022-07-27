import {
  Component, OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ElementRef,
  ViewContainerRef,
} from '@angular/core';
import { DynamicAdsComponent } from '../dynamic-ads/dynamic-ads.component';


@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.css']
})
export class AdBannerComponent implements OnInit {


  ngOnInit(): void {
  }

  @ViewChild('container', { read: ViewContainerRef })

  container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
  add(): void {
    // create the component factory  
    const dynamicComponentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicAdsComponent);
    // add the component to the view  
    const componentRef = this.container.createComponent(dynamicComponentFactory);
  }

}
