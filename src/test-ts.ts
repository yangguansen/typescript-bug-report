export namespace RuntimeStatus {

	export namespace Progress {
		export interface Quantity {
		  total?: number;
		  completed?: number;
		  unit?: string;
		}
		// export const a = '1';
	}

	export enum Severity {
		UNSPECIFIED = 0,
		NOTICE = 1,
		WARNING = 2,
		ERROR = 3,
		CRITICAL = 4,
	}
}


