function printName(name: string = "Anonymous"): void {
  console.log(name);
}

printName(); // This will print 'Anonymous'
printName(undefined); // This will also print 'Anonymous'
printName("John Doe"); //This will print John Doe