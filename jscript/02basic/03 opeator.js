//D = (L - S) / L * 100

var sellingprice =199;
var listingprice = 799;

var discountpercentage = (listingprice - sellingprice) / listingprice * 100;
 
console.log("total discount we got :"+discountpercentage);

displaydiscountpercentage = Math.round(discountpercentage);

console.log(displaydiscountpercentage+ "%off"); 

var result = listingprice>sellingprice;
console.log(typeof result);
