import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'im-root',
  template: '<im-impf-list></im-impf-list>',
  styles: []
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}
