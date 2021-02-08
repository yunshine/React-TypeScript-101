// Lesson 17: Rendering HTML in TypeScript-------------------------------------
import { HasFormat } from '../.interfaces/HasFormat.js';

export class ListTemplate {
    constructor(private container: HTMLUListElement) {
    }

    render(item: HasFormat, heading: string, position: 'start' | 'end') {
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = item.format();
        li.append(p);

        if (position === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li);
        }
    }
}