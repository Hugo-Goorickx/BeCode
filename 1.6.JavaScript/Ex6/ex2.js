class Rectangle
{
    constructor (topLeftXPos, topLeftYPos, width, length)
    {
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle)
    {
        if((otherRectangle.topLeftXPos                          >= this.topLeftXPos + this.width)
        || (otherRectangle.topLeftXPos + otherRectangle.width   <= this.topLeftXPos)
        || (otherRectangle.topLeftYPos                          >= this.topLeftYPos + this.length)
        || (otherRectangle.topLeftYPos + otherRectangle.length  <= this.topLeftYPos))
            return false;
        return true; 
    }
}
function ex62()
{
    let rec1 = new Rectangle(1, 1, 3, 5);
    let rec2 = new Rectangle(1, 1, 3, 6);
    let rec3 = new Rectangle(0, 0, 1, 2);
    console.log(rec1.collides(rec2));
    console.log(rec3.collides(rec2));
}