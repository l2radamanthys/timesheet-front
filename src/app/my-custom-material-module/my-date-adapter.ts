import * as moment from 'moment';
import { NativeDateAdapter } from '@angular/material';
// import { MomentDateAdapter, MOMENT_DATE_FORMATS } from './moment-date-adapter';


export class MyDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    if (displayFormat === 'input') {
      return moment(date).format('DD/MM/YYYY');
    } else {
      return date.toDateString();
    }
  }
}
