// Functions marked with @pure
export /* @pure */ function add(a: number, b: number) {
	return a + b;
}

export /* @pure */ function multiply(x: number, y: number) {
	return x * y;
}

// Regular function without the flag
export function log(message: string) {
	console.log(message);
}

// Usage of the functions - this should have pure calls marked with /*#__PURE__*/
export function calculate() {
	const sum = add(5, 3);
	const product = multiply(sum, 2);
	log('Result: ' + product);
	return product;
}
