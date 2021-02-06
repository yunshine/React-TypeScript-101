// Lessons 14: TypeScript Modules----------------------------------------------

export class Invoice {
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

    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`;
    }
}