
function uniqueTail()
{
	let random = Math.random();
	let stepSize = Math.floor((Math.random() * 2) + 1);
	let numberToParse = random.toString();
	let numberLength = numberToParse.length();
	let position = 0;
	let uniqueCharacter = "";
	let uniqueID = "";
	let parsedNumber = "";
	let alphaNumArr = alphaNumericArray();
	while(position != numberLength) 
	{
		if(position > numberLength)
		{
			position = numberLength - stepSize;
		}
		parsedNumber = numberToParse.subString(position, position + stepSize);
		parsedNumber = Number(parsedNumber);
		position += stepSize;
		uniqueCharacter = alphaNumArr[parsedNumber % 61];
		uniqueID += uniqueCharacter;
	}
	return uniqueID;
}
/* take random - parse it by a random step-size 
	e.g. 8504934 (e.g. stepsize#1 = 1, #2 = 1, #3 = 2, #4 = 2)
	take parsed number (e.g. parse#1 = 8, #2 = 5, #3 = 04) and map it to an equivalent ASCII value
	(make sure to handle overflow - just loop around when exceeding max value - ) */

function alphaNumericArray()
{
	let arrayName = [];
	for(i = 0; i < 61; i++)
	{
		if(i < 26)
		{
			arrayName[i] = String.fromCharCode(65 + i);
		}
		else if (26 <= i < 52)
		{
			arrayName[i] = String.fromCharCode(97 + i - 26);
		}
		else
		{
			arrayName[i] = String.fromCharCode(48 + i - 52);
		}	
	}
	return arrayName;
}

function appendUniqueID(baseURL)
{
	return baseURL.concat(uniqueTail());
}