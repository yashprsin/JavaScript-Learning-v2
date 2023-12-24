// Questions : For a given array with prices of 5 item  -> [250, 645, 300, 900, 50] all items have an offer of 10% off on them. Change the array to store final price after applying offer.

let Items = [250, 645, 300, 900, 50]

for (let Item in Items){
    Items[Item] = Items[Item] - (Items[Item]/10)
}
console.log("Orginal Price : ", Items);