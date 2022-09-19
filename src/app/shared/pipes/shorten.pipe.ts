import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})
export class ShortenPipe implements PipeTransform{

    transform(value: string): string {
        if(value.length<= 50){
            return value;
        }
        return value.substring(0,50) + '...';
    }
}