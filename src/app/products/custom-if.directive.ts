import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appIf]'
})

export class CustomIfDirective {

  constructor(private template: TemplateRef<any>,
              private container: ViewContainerRef) {}

  @Input() set appIf(addToDOM: boolean) {
    if (addToDOM) {
      this.container.createEmbeddedView(this.template);
    } else {
      this.container.clear();
    }
  }

}
