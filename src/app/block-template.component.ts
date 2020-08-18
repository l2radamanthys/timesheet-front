import { Component } from '@angular/core';

@Component({
  selector: 'app-block-temp',
  styles: [`
    :host {
      text-align: center;
    }
  `],
  template: `
    <div class="block-ui-template">
      <img src="/assets/images/loading1.gif" class="h3">
    </div>
  `
})
export class BlockTemplateComponent { }
