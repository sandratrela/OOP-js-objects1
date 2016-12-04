function Telephone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};
Telephone.prototype.printInfo = function() {
	console.log("Brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + " PLN.");
};

var iPhone6S = new Telephone("Apple", 2250, "silver"),
	SamsungG = new Telephone("Samsung", 945, "black"),
	GalaxyS = new Telephone("Galaxy", 565, "white");

iPhone6S.printInfo();
SamsungG.printInfo();
GalaxyS.printInfo();
