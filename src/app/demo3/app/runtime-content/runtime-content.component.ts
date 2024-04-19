import {
    Component,
    ViewChild, ViewContainerRef, ComponentRef,
    Compiler, ComponentFactory, NgModule, ModuleWithComponentFactories, ComponentFactoryResolver
} from '@angular/core';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-runtime-content',
  templateUrl: './runtime-content.component.html',
  styleUrls: ['./runtime-content.component.css']
})
export class RuntimeContentComponent {

    template: string = '<div>\nHello, {{name}}\n</div>';

    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    private componentRef: ComponentRef<{}>;

    constructor(
        private compiler: Compiler) {
    }

    compileTemplate() {

        let metadata = {
            selector: `runtime-component-sample`,
            template: this.template
        };

        // let factory = this.createComponentFactorySync(metadata, null);

        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
        // this.componentRef = this.container.createComponent(factory);
    }

    // private createComponentFactorySync(metadata: Component, componentClass: any): ComponentFactory<any> {
    //   // decorated Component
    //     const cmpClass = componentClass || class RuntimeComponent { name: string = 'Denys' };
    //     const decoratedCmp = Component(metadata)(cmpClass);

    //     // decorated module update
    //     @NgModule({ imports: [CommonModule], declarations: [decoratedCmp] })
    //     class RuntimeComponentModule { }

    //     let module: ModuleWithComponentFactories<any> = this.compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);

    //     return module.componentFactories.find(f => f.componentType === decoratedCmp);
    // }



}
