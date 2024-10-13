function Square(name, pricetext, color, price, groupNumber, baserent, rent1, rent2, rent3, rent4, rent5) {
	this.name = name;
	this.pricetext = pricetext;
	this.color = color;
	this.owner = 0;
	this.mortgage = false;
	this.house = 0;
	this.hotel = 0;
	this.groupNumber = groupNumber || 0;
	this.price = (price || 0);
	this.baserent = (baserent || 0);
	this.rent1 = (rent1 || 0);
	this.rent2 = (rent2 || 0);
	this.rent3 = (rent3 || 0);
	this.rent4 = (rent4 || 0);
	this.rent5 = (rent5 || 0);
	this.landcount = 0;

	if (groupNumber === 3 || groupNumber === 4) {
		this.houseprice = 50;
	} else if (groupNumber === 5 || groupNumber === 6) {
		this.houseprice = 100;
	} else if (groupNumber === 7 || groupNumber === 8) {
		this.houseprice = 150;
	} else if (groupNumber === 9 || groupNumber === 10) {
		this.houseprice = 200;
	} else {
		this.houseprice = 0;
	}
}

function Card(text, action) {
	this.text = text;
	this.action = action;
}

function corrections() {

	const ENLARGE5TOKEN = document.getElementById("enlarge5token");
	const IMAGE_URL = ENLARGE5TOKEN.getAttribute("data-image-url");

	// Add images to enlarges.
	document.getElementById("enlarge1token").innerHTML += '<img src="' + IMAGE_URL + 'rizz.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge2token").innerHTML += '<img src="' + IMAGE_URL + 'minigame.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge3token").innerHTML += '<img src="' + IMAGE_URL + 'ohio.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge4token").innerHTML += '<img src="' + IMAGE_URL + 'fanum.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge5token").innerHTML += '<img src="' + IMAGE_URL + 'train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge6token").innerHTML += '<img src="' + IMAGE_URL + 'sus.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	// Chance cards
	document.getElementById("enlarge7token").innerHTML += '<img src="' + IMAGE_URL + 'chance.png" height="50" alt="" style="position: relative; bottom: 5px;" />';
	document.getElementById("enlarge22token").innerHTML += '<img src="' + IMAGE_URL + 'chance.png" height="50" alt="" style="position: relative; bottom: 5px;" />';
	document.getElementById("enlarge36token").innerHTML += '<img src="' + IMAGE_URL + 'chance.png" height="50" alt="" style="position: relative; bottom: 5px;" />';

	document.getElementById("enlarge8token").innerHTML += '<img src="' + IMAGE_URL + 'sigma.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
	document.getElementById("enlarge9token").innerHTML += '<img src="' + IMAGE_URL + 'alpha.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';

	// Station cards
	document.getElementById("enlarge15token").innerHTML += '<img src="' + IMAGE_URL + 'train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge25token").innerHTML += '<img src="' + IMAGE_URL + 'train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge35token").innerHTML += '<img src="' + IMAGE_URL + 'train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';

	//Party cards
	document.getElementById("enlarge12token").innerHTML += '<img src="' + IMAGE_URL + 'electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
	document.getElementById("enlarge28token").innerHTML += '<img src="' + IMAGE_URL + 'water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function utiltext() {
	return '&nbsp;&nbsp;&nbsp;&nbsp;If one "Utility" is owned rent is 4 times amount shown on dice.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;If both "Utilitys" are owned rent is 10 times amount shown on dice.';
}

function transtext() {
	return '<div style="font-size: 14px; line-height: 1.5;">Rent<span style="float: right;">$25.</span><br />If 2 Stations are owned<span style="float: right;">$50.</span><br />If 3 Stations are owned<span style="float: right;">$100.</span><br />If 4 Stations are owned<span style="float: right;">$200.</span></div>';
}

function antiFanumTax() {
	addAlert(player[turn].name + " paid $100 for landing on Anti Fanum Tax.");
	player[turn].pay(100, 0);

	$("#landed").show().text("You landed on Anti Fanum Tax. Pay $100.");
}

function fanumTax() {
	addAlert(player[turn].name + " paid $200 for landing on Fanum Tax.");
	player[turn].pay(200, 0);

	$("#landed").show().text("You landed on Fanum Tax. Pay $200.");
}

var square = [];

square[0] = new Square("GO", "COLLECT $200 SALARY AS YOU PASS.", "#FFFFFF");
square[1] = new Square("Rizz Lane", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
square[2] = new Square("MINIGAME", "WIN A PRIZE", "#FFFFFF");
square[3] = new Square("Ohio", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
square[4] = new Square("Fanum Tax", "Pay $200", "#FFFFFF");
square[5] = new Square("Subway Station", "$200", "#FFFFFF", 200, 1);
square[6] = new Square("Sus Street", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[7] = new Square("Chance", "FOLLOW INSTRUCTIONS", "#FFFFFF");
square[8] = new Square("Sigma Avenue", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
square[9] = new Square("Alpha Avenue", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
square[10] = new Square("Just Quandale Dingling", "", "#FFFFFF");
square[11] = new Square("Beta Avenue", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[12] = new Square("SAS Party", "$150", "#FFFFFF", 150, 2);
square[13] = new Square("Goofy Ahh Avenue", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
square[14] = new Square("Grimace Shake Avenue", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
square[15] = new Square("Chungus Station", "$200", "#FFFFFF", 200, 1);
square[16] = new Square("Poggers Place", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[17] = new Square("MINIGAME", "PLAY THE MINIGAME TO WIN A PRIZE", "#FFFFFF");
square[18] = new Square("Chicken Nugget Avenue", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
square[19] = new Square("GigaChad Avenue", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
square[20] = new Square("Free Parking", "", "#FFFFFF");
square[21] = new Square("Skibidi Street", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[22] = new Square("Chance", "FOLLOW INSTRUCTIONS", "#FFFFFF");
square[23] = new Square("Sin City", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
square[24] = new Square("FNAF Avenue", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
square[25] = new Square("Mewing Station", "$200", "#FFFFFF", 200, 1);
square[26] = new Square("GYAT Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[27] = new Square("Demure Avenue", "$260", "#FFFF00", 260, 8, 22, 110, 330, 800, 975, 1150);
square[28] = new Square("Tiktok Rizz Party", "$150", "#FFFFFF", 150, 2);
square[29] = new Square("Brat Gardens", "$280", "#FFFF00", 280, 8, 24, 120, 360, 850, 1025, 1200);
square[30] = new Square("Go to the Backrooms", "You have been sent to the Backrooms. What an L. Do not collect $200.", "#FFFFFF");
square[31] = new Square("Cap Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[32] = new Square("Aura Avenue", "$300", "#008000", 300, 9, 26, 130, 390, 900, 1100, 1275);
square[33] = new Square("MINIGAME", "PLAY THE MINIGAME TO WIN A PRIZE", "#FFFFFF");
square[34] = new Square("Yapping Avenue", "$320", "#008000", 320, 9, 28, 150, 450, 1000, 1200, 1400);
square[35] = new Square("Zesty Station", "$200", "#FFFFFF", 200, 1);
square[36] = new Square("Chance", "FOLLOW INSTRUCTIONS", "#FFFFFF");
square[37] = new Square("John Pork Place", "$350", "#0000FF", 350, 10, 35, 175, 500, 1100, 1300, 1500);
square[38] = new Square("Anti Fanum Tax", "Pay $100", "#FFFFFF");
square[39] = new Square("Tilted Towers", "$400", "#0000FF", 400, 10, 50, 200, 600, 1400, 1700, 2000);

var communityChestCards = [];
var chanceCards = [];

communityChestCards[0] = new Card("Get out of Jail, Free. This card may be kept until needed or sold.", function(p) { p.communityChestJailCard = true; updateOwned();});
communityChestCards[1] = new Card("You have won second prize in a beauty contest. Collect $10.", function() { addamount(10, 'Community Chest');});
communityChestCards[2] = new Card("From sale of stock, you get $50.", function() { addamount(50, 'Community Chest');});
communityChestCards[3] = new Card("Life insurance matures. Collect $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[4] = new Card("Income tax refund. Collect $20.", function() { addamount(20, 'Community Chest');});
communityChestCards[5] = new Card("Holiday fund matures. Receive $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[6] = new Card("You inherit $100.", function() { addamount(100, 'Community Chest');});
communityChestCards[7] = new Card("Receive $25 consultancy fee.", function() { addamount(25, 'Community Chest');});
communityChestCards[8] = new Card("Pay hospital fees of $100.", function() { subtractamount(100, 'Community Chest');});
communityChestCards[9] = new Card("Bank error in your favor. Collect $200.", function() { addamount(200, 'Community Chest');});
communityChestCards[10] = new Card("Pay school fees of $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[11] = new Card("Doctor's fee. Pay $50.", function() { subtractamount(50, 'Community Chest');});
communityChestCards[12] = new Card("It is your birthday. Collect $10 from every player.", function() { collectfromeachplayer(10, 'Community Chest');});
communityChestCards[13] = new Card("Advance to \"GO\" (Collect $200).", function() { advance(0);});
communityChestCards[14] = new Card("You are assessed for street repairs. $40 per house. $115 per hotel.", function() { streetrepairs(40, 115);});
communityChestCards[15] = new Card("Go to Jail. Go directly to Jail. Do not pass \"GO\". Do not collect $200.", function() { gotobackrooms();});


chanceCards[0] = new Card("GET OUT OF THE BACKROOMS FREE. This card may be kept until needed or traded.", function(p) { p.chanceJailCard=true; updateOwned();});
chanceCards[1] = new Card("Make General Repairs on all your properties. For each house pay $25. For each hotel $100.", function() { streetrepairs(25, 100);});
chanceCards[2] = new Card("You got caught venting in Among Us! Pay $15.", function() { subtractamount(15, 'Chance');});
chanceCards[3] = new Card("You have been elected yapper of the board. Pay each player $50.", function() { payeachplayer(50, 'Chance');});
chanceCards[4] = new Card("Go back three spaces.", function() { gobackthreespaces();});
chanceCards[5] = new Card("ADVANCE TO THE NEAREST PARTY. IF UNOWNED, you may buy it from the Bank. IF OWNED, throw dice and pay owner a total ten times the amount thrown.", function() { advanceToNearestParty();});
chanceCards[6] = new Card("Bank likes your vibe. Collect $50.", function() { addamount(50, 'Chance');});
chanceCards[7] = new Card("ADVANCE TO THE NEAREST STATION. If UNOWNED, you may buy it from the Bank. If OWNED, pay owner twice the rental to which they are otherwise entitled.", function() { advanceToNearestStation();});
chanceCards[8] = new Card("You posted cringe on your IG story! Pay aura debt of $50.", function() { subtractamount(15, 'Chance');});
chanceCards[9] = new Card("Take a slay ride to Mewing Station. If you pass \"GO\" collect $200.", function() { advance(25);});
chanceCards[10] = new Card("The Battle Bus has arrived! ADVANCE to Tilted Towers.", function() { advance(39);});
chanceCards[11] = new Card("ADVANCE to FNAF Avenue. If you pass \"GO\" collect $200.", function() { advance(24);});
chanceCards[12] = new Card("Your podcast is popping off. Collect $150.", function() { addamount(150, 'Chance');});
chanceCards[13] = new Card("H-O-T-T-O-G-O you must now ADVANCE TO GO!", function() {advance(0)});
chanceCards[14] = new Card("Time to go home! ADVANCE to Beta Avenue. If you pass \"GO\" collect $200.", function() { advance(11);});
chanceCards[15] = new Card("Go to the Backrooms. Go directly to the Backrooms. Do not pass \"GO\". Do not collect $200.", function() { gotobackrooms();});
