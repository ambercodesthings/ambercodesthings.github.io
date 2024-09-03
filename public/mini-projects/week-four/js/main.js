//Example:
//A candy store has 6 boxes of chocolates. Each box has 500 pieces. How many pieces are there altogether in the 6 boxes?

function getChoc() {
	var boxChoc = 6;
	return boxChoc * 500;
}

example.textContent = "There are a total of " + getChoc() + " pieces of chocolate.";

//1. The Ferris wheel in Paradise Park has 14 seats. Each seat can hold 6 people. How many people can ride the Ferris wheel at the same time?

function getAmountOfRiders() {
    let seats = 14;
    let spots = 6;
    let totalSeats = seats * spots;
    return totalSeats;
}
prob1.textContent = "The ride can hold " + getAmountOfRiders() + " seats.";


//2. A garden has 52 rows and 15 columns of bean plants. How many plants are there in all?

function getPlantAmount() {
    let rows = 52;
    let columns = 15;
    let totalPlants = rows * columns;
    return totalPlants;
}
prob2.textContent = "The garden has " + getPlantAmount() + " total plants.";

//3. Julian is writing a comic book. His story has 143 frames in all. If he wants to put exactly 11 frames on each page, how many pages would he have?
function getPages() {
    let frames = 143;
    let framesPerPage = 11;
    return frames / framesPerPage;
}
prob3.textContent = "Julian would have " + getPages() + " pages."


//4. It takes 4 feet of cotton to make a tee-shirt. How many tee-shirts can be made with 60 feet of material?
function getShirts(){
    let materialLength = 60;
    let CottonPerShirt = 4;
    return materialLength / CottonPerShirt;
}
prob4.textContent = getShirts() + " tee-shirts can be made with 60 ft of material."

//5. The Razorback T-shirt Shop makes $9 dollars off each t-shirt sold. During the Arkansas and Texas Tech game they sold 200 t-shirts. How much money did they make from selling the t-shirts?
function getProfit() {
    let profit = 9;
    let totalSold = 200;
    return profit * totalSold;
}
prob5.textContent = "The Razorback T-shirt Company made $" + getProfit() + " during the Arkansas and Texas Tech game."


//6. Warren has 248 guests coming to his party. Each table will hold 4 guests. How many tables will he need? If each table has 2 candles, how many candles will he need?
function getPartySupplies() {
    let guest = 248;
    let guestPerTable = 4;
    let tables = guest / guestPerTable;
    let candlesPerTable = 2;
    let candles = tables * 2;
    let supplies = [tables,candles];
    return supplies;

}
prob6.textContent = "Warren will need " + getPartySupplies()[0] + " tables and " + getPartySupplies()[1] + " candles." 
// add array number in brackets starting with 0 index

//7. Beth has 4 packs of Crayons. Each pack has 10 crayons in it. She also has 6 extra Crayons. How many Crayons does Beth have altogether?

function getTotalCrayons() {
    let packs = 4;
    let crayonsPerPack = 10;
    let extraCrayons = 6;
    let crayons = packs * crayonsPerPack + 6;
    return crayons;
}

prob7.textContent = "Beth has " + getTotalCrayons() + " crayons."