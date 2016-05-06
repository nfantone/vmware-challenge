import { Pipe, PipeTransform } from '@angular/core';
import { Container } from '../containers/container';

enum Order {
  ASC,
  DESC
}

@Pipe({ name: 'sortById' })
export class SortByIdPipe implements PipeTransform {
  transform(containers: Container[], order:any) {
    order = order ? Order.ASC : Order.DESC;
    return containers.sort((j, k) => {
      let sort = order === Order.ASC ? 1 : -1;
      return sort * (j.id - k.id);
    });
  }
}
