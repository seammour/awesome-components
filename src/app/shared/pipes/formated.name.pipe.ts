import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formated-name'
})
export class FormatedNamePipe implements PipeTransform{

    transform(firstName: String, lastName: String): string {
        return lastName.toUpperCase() + ' ' + firstName;
    }

}