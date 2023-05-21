var name= prompt("What is your name");
var firstchar=name.slice(0,1);
var upperFirstcase=firstchar.toUpperCase();
var restofName=name.slice(1,name.length);
var CapatilizeName= upperFirstcase + restofName;
alert("Hello," + CapatilizeName);