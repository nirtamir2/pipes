import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'beforePipe'
})

export class BeforePipe implements PipeTransform{
    transform(value:any[], count:number):any[] {
        return value.slice(0, count);
    }

}
