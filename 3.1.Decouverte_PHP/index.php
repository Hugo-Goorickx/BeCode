<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php   $firstVar='Hugo';
            $secondVar=21;
            $thirstVar="j'ai les yeux verts";
            //$againVar=['valerie', 'magda'];
            $againVar=array(0 => 'valerie', 1 => 'magda');
            $hungry=true ?>
    	<p>Mon nom: <?php echo $firstVar; ?>!</p>
    	<p>Mon age: <?php echo $secondVar; ?>!</p>
    	<p>Mes yeux: <?php echo $thirstVar; ?>!</p>
    	<p>Ma famille: <?php    for ($i = 0; $i <= count($againVar); $i++)
                                    {
                                        echo $againVar[$i];
                                        echo " ";
                                    } ?>!</p>
        <p>As tu faim ? <?php   if ($hungry)
                                    echo "oui";
                                else
                                    echo "non"; ?>!</p>
    </body>
</html>