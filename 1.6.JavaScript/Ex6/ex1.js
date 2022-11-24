class Cercle
{
    constructor (xPos, yPos, radius)
    {
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    get getter()
    {
        return Math.PI * this.radius;
    }
    
    moveset(xOffset, yOffset)
    {
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
}
function ex61()
{
    let posX = document.getElementById("ex61a").value;
    let posY = document.getElementById("ex61b").value;
    let rayon = document.getElementById("ex61c").value;
    let cercle = new Cercle(posX, posY, rayon);
    console.log(cercle.getter);
}