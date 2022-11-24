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
    let cercle = new Cercle(1, 1, 3);
    console.log(cercle.getter);
}