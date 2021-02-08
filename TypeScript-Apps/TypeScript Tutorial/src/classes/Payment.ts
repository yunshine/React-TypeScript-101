// this file created in lesson 16...
import { HasFormat } from '../interfaces/HasFormat.js';

export class Payment implements HasFormat {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ) { }

    format() {
        return `${this.recipient} is owed $${this.amount} for ${this.details}.`;
    }
}