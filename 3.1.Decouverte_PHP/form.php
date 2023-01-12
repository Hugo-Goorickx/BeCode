<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="return.php" method="get">
        <label for="name">Name of the child:</label>
        <input type="text" id="name" name="name"><br>

        <label for="gender">Genre de l'enfant:</label>
        <select id="gender" name="gender">
            <option value='g'>garcon</option>
            <option value='f'>fille</option>
        </select><br>

        <label for="prof">Nom du professeur:</label>
        <input type="text" id="prof" name="prof"><br>

        <label for="reason">Motif de l'absence:</label>
        <div id="reason">
            <input type="radio" id="malade" name="reason" value="malade">
            <label for="malade">Malade</label>

            <input type="radio" id="mort" name="reason" value="mort">
            <label for="mort">Mort d'un animal (ou un membre de la famille)</label>

            <input type="radio" id="extra" name="reason" value="extra">
            <label for="extra">Activite extrascolaire</label>
            
            <input type="radio" id="!envie" name="reason" value="!envie">
            <label for="!envie">Pas envie</label>
        </div>
        <br>
        <input type="submit" value="Submit">
    </form>

</body>
</html>