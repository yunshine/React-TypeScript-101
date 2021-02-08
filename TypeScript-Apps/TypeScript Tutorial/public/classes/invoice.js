// Lessons 14: TypeScript Modules----------------------------------------------
// to implement the HasFormat interfaces, use the keyword 'implements'...
export class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(client: string, details: string, amount: number) {
    // a better way to build a constructor...
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // the method below follows the interface pattern from HasFormat...
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}.`;
    }
}
