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
        function test($list)
        {
            foreach ($list as $elem => $value)
            {
                if (is_array($value))
                    test($value);
                else
                {
                    if (is_integer($elem))
                        echo("$value</br>");
                    else
                        echo("<b>$elem</b> $value</br>");
                }
            }
        }
        $fam = array('maman', 'papa', 'magda');
        $food = array('nouilles', 'nouilles soja', 'nouilles avec encore plus de soja');
        $food[] = 'nouilles natures';
        $movies = array('SW 9', 'Rogue One', 'Everywhere erverytime all at onces');
        $me = array(    'age'=> 21 ,
                        'firstname' => 'hugo' ,
                        'lastname'  => 'goorickx' ,
                        'favourite_movies' => array('f1', 'f2', 'f3') );
        $mother = array('age'=> 47 ,
                        'firstname' => 'Valerie' ,
                        'lastname'  => 'Ruelle' ,
                        'favourite_movies' => array('f11', 'f22', 'f33') );
        echo '<pre>';
        echo "<h2>Food</h2>";
        test($food);
        echo '</pre>';

        echo '<pre>';
        echo "<h2>Family</h2>";
        test($fam);
        echo $movies[2];
        echo '</pre>';

        echo '<pre>';
        echo "<h2>Me</h2>";
        test($me);
        echo '</pre>';

        $me['hobbies'] = 'rien faire';
        $me['mother'] = $mother;
        $mother['hobbies'] = 'rien faireu';

        echo '<pre>';
        echo "<h2>Me</h2>";
        test($me);
        echo '</pre>';

        echo '<pre>';
        echo "<h2>Mother</h2>";
        test($mother);
        echo '</pre>';


        $web_dev = array('frontend' => [], 'backend' => []);
        $web_dev['frontend'][] = 'XHTML';
        $web_dev['backend'][] = 'Ruby';
        $web_dev['frontend'][] = 'CSS';
        $web_dev['frontend'][] = 'Flash';
        $web_dev['frontend'][] = 'JS';
        $web_dev['frontend'][0] = 'HTML';
        unset($web_dev['frontend'][3]);
        test($web_dev);
    ?>
</body>
</html>