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
    let x = document.getElementById("ex62a").value;
    let y = document.getElementById("ex62b").value;
    let width = document.getElementById("ex62c").value;
    let length = document.getElementById("ex62d").value;
    let xb = document.getElementById("ex62ab").value;
    let yb = document.getElementById("ex62bb").value;
    let widthb = document.getElementById("ex62cb").value;
    let lengthb = document.getElementById("ex62db").value;
    let rec1 = new Rectangle(x, y, width, length);
    let rec2 = new Rectangle(xb, yb, widthb, lengthb);
    console.log(rec1.collides(rec2));
}