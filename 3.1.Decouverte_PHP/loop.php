<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    
        $pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');

        echo "<h2>Array with</h2>";
        foreach($pronouns as $pronoun)
        {
            echo $pronoun.(($pronoun == 'He/She') ? " codes<br>" : " code<br>");
        }

        echo "<h2>While</h2>";
        $index = 0;
        while (++$index <= 120) { echo "$index<br>"; }
        
        echo "<h2>For</h2>";
        for ($index = 0; $index <= 120; $index++) { echo "$index<br>"; }
        
        echo "<h2>For in list</h2>";
        $list = array('slave1', 'slave2', 'slave3');
        foreach($list as $elem) { echo "$elem<br>"; }
        
        echo "<h2>Countries</h2>";
        $countries = array(
            "AN" => "Angleterre",
            "BE" => "Belgique",
            "FR" => "France",
            "ES" => "Espagne",
            "PO" => "Portugal",
            "AL" => "Allemagne",
            "SU" => "Suisse",
            "IT" => "Italie",
            "PO" => "Pologne",
            "RU" => "Russie");
        echo '<form><label for="countries">Choisi un pays:</label><select name="countries" id="countries">';
        foreach($countries as $country => $key) { echo "<option value='$country'>$key</option>"; }
        echo '</select></form>';
    ?>
</body>
</html>