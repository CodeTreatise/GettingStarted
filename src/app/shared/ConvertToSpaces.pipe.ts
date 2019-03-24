import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toSpaces'
})
export class ConvertToSpaces implements PipeTransform {

    transform(value: string, character: string): string {
        return value.replace(character, ' ');;
    }

}