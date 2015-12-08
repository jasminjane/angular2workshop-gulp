export abstract class Factory {
	create(properties: any): any {}
}

export abstract class Person {
	constructor(public first_name: string, public last_name: string) {}
	getDisplayName():string {
		return `${this.first_name[0].toUpperCase()}. ${this.last_name}`;
	}
}
