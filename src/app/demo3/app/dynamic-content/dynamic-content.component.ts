import {Component, Input, OnInit, OnDestroy,
    ViewChild, ViewContainerRef,
    ComponentFactoryResolver, ComponentRef, AfterViewInit, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-dynamic-content',
  templateUrl: './dynamic-content.component.html',
  styleUrls: ['./dynamic-content.component.css']
})
export class DynamicContentComponent implements  AfterViewInit {

@ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    @Input()
    type: string;  // "sample1"

    @Input()
    context: any;

    private mappings = {
        'sample1': DynamicSample1Component,
        'sample2': DynamicSample2Component
    };

    // Represents a component created by a ComponentFactory. Provides access to the component instance and related objects, and provides the means of destroying the instance.
    private componentRef: ComponentRef<{}>;

    //ComponentFactoryResolver  maps Components to generated ComponentFactory classes that can be used to create instances of components.  (dynamic comp.)
    constructor(
        private componentFactoryResolver: ComponentFactoryResolver, private cdr: ChangeDetectorRef) {
    }

    getComponentType(typeName: string) {
        let type = this.mappings[typeName];
        return type || UnknownDynamicComponent;
    }

    ngAfterViewInit() {
        if (this.type) {
            let componentType = this.getComponentType(this.type);

            // note: componentType must be declared within module.entryComponents
            let factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
            this.componentRef = this.container.createComponent(factory);

            // set component context
            let instance = <DynamicComponent> this.componentRef.instance;
            instance.context = this.context;
            this.cdr.detectChanges();
        }
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }

}

export abstract class DynamicComponent {
    context: any;
}

@Component({
    selector: 'dynamic-sample-1',
    template: `<div>Dynamic sample 1 ({{context?.text}})</div>`
})
export class DynamicSample1Component extends DynamicComponent {}

@Component({
    selector: 'dynamic-sample-2',
    template: `<div>Dynamic sample 2 ({{context?.text}})</div>`
})
export class DynamicSample2Component extends DynamicComponent {}

@Component({
    selector: 'unknown-component',
    template: `<div>Unknown component ({{context?.text}})</div>`
})
export class UnknownDynamicComponent extends DynamicComponent {}
