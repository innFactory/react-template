export interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

export const demoTodos: Todo[] = [
	{ id: '1', title: 'Buy a cyling helmet', completed: false },
	{ id: '2', title: 'Pay electric bill', completed: true },
	{ id: '3', title: 'Make a dentist appointment', completed: false },
];
