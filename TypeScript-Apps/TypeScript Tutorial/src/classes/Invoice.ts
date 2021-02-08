// Lessons 14: TypeScript Modules----------------------------------------------

import { HasFormat } from '../interfaces/HasFormat.js';

// to implement the HasFormat interfaces, use the keyword 'implements'...
export class Invoice implements HasFormat {
    // readonly client: string;
    // private details: string;
    // public amount: number;

    // constructor(client: string, details: string, amount: number) {
    // a better way to build a constructor...
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ) { }

    // the method below follows the interface pattern from HasFormat...
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`;
    }
}