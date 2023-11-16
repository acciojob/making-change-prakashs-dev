const makeChange = (c) => {
  // your name here
	let coin{
		q: 25,
		d: 10,
		n: 5,
		p: 1
	};
	let obj = {};
	for(let i in coin){
		let currentItem = coin[i];
		obj[i] = parseInt(c / currentItem);
		c = c % currentItem;
	}
	return obj;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
