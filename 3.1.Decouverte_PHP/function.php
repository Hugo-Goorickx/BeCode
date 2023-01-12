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
        function majFirstLetter($string)            { echo ucfirst(strtolower($string))."<br>"; }
        function megaSum($num1, $num2)              { return (!is_numeric($num1) || !is_numeric($num2)) ? ("Error: not a number"): ($num1 + $num2); }
        function modifTxt1($string1)                { return str_replace("ae", "æ", $string1); }
        function modifTxt2($string1)                { return str_replace("æ", "ae", $string1); }
        function feedback($string, $type = 'info')  { return '<div class="'.$type.'">'.ucfirst(strtolower($type)).': '.$string.'.</div>'; }
        function minLetters($string)                { echo strtolower($string)."<br>"; }
        function coneVolume($radius, $height)       { return '<div>The volume of a cone which ray is '.$radius.' and height is '.$height.' = '.((1/3) * pi() * pow($radius, 2) * $height).' cm<sup>3</sup><br /></div>'; }

        function giveMeTheFirstsLetters($string)
        {
            $return = '';
            foreach (explode(" ", $string) as $elem) { $return .= substr($elem, 0, 1); }
            echo strtoupper($return);
        }

        function generateWord()
        {
            $list = 'abcdefghijklmnopqrstuvwxyz';
            $out = '';
            for ($i = 0; $i < rand(1, 6); $i++) { $out .= $list[rand(0, 25)]; }
            $out .= " ";
            for ($i = 0; $i < rand(7, 16); $i++) { $out .= $list[rand(0, 25)]; }
            return $out;
        }

        majFirstLetter("test");        

        echo date( "Y/m/d H:i:s", time())."<br>";

        echo megaSum(1, 1)."<br>";
        echo megaSum(1, "test")."<br>";

        echo giveMeTheFirstsLetters("test test")."<br>";

        echo modifTxt1("testae")."<br>";
        echo modifTxt2("testæ")."<br>";

        echo feedback("Incorrect email address", "error");
        echo feedback("Incorrect email address");

        echo generateWord()."<br>";

        echo minLetters("STOP YELLING I CAN'T HEAR MYSELF THINKING!!");

        echo coneVolume(3, 2);
    ?>
</body>
</html>