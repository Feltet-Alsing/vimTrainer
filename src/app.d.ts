// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	namespace App {
		interface Locals {
			user?: {
				id: string;
				username: string;
				created_at: string;
			};
		}
	}
}

export {};
