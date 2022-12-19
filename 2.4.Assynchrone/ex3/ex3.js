async function getResponse() {
    document.getElementById("main").style.display = "none";

    document.getElementById("animate").style.display = "flex";

	const response = await fetch(
		'https://thatsthespir.it/api',
		{
			method: 'GET'
		}
	);
    let stock = await response.json();

    let date = await fetch("https://api.agify.io/?name=" + stock.author.split(' ')[0]);
    date = await date.json();

    let newDiv = document.createElement("div");
    newDiv.classList.add("card");
    newDiv.id = "genCit";

        let newDivBackground = document.createElement("div");
        newDivBackground.classList.add("thumb");
        if (stock.photo)
            newDivBackground.style.background = "url(" + stock.photo + ") center no-repeat";
        else
            newDivBackground.style.background = "url(./no_pic.jpeg) center no-repeat";

        let newArt = document.createElement("article");

            let newAuthor = document.createElement("h1");
            let authorContent = document.createTextNode(stock.author);
            newAuthor.appendChild(authorContent);

            let newAge = document.createElement("h2");
            let ageContent = document.createTextNode(date.age + " ans");
            newAge.appendChild(ageContent);

            let newSpan = document.createElement("span");
            let quoteContent = document.createTextNode(stock.quote);
            newSpan.appendChild(quoteContent);

        newArt.append(newAuthor, newAge, newSpan);
    newDiv.append(newDivBackground, newArt);
    let main = document.getElementById("main");
    main.style.display = "block";
    main.textContent="";
    main.appendChild(newDiv);
    document.getElementById("animate").style.display = "none";
    document.getElementById("genCit").addEventListener("click", getResponse);
}

getResponse();
