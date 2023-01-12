<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php $excuse = array(  'malade' => array("de symptômes évidents d'une maladie", "de problèmes de santé", "d'une maladie non spécifiée", "de symptômes évidents d'une maladie", "de symptômes évidents d'une maladie (Je ne suis pas médecin, mais je reconnais quand mon enfant est malade)"),
                            'mort' => array("d'un décès d'un membre proche", "de la mort surprenante d'un membre de la famille", "du décès d'un membre de la famille", "du décès d'un membre éloigné de la famille", "du décès d'un membre élargi de la famille"),
                            'extra' => array("d'une activité extrascolaire", "d'une autre activité", "d'une compétition sportive", "d'une activité personnelle", "d'une activité personnelle plus cool"),
                            '!envie' => array("d'une indisposition temporaire","d'une motivation personnelle temporaire","d'un manque d'intérêt pour l'école","d'une absence due à des raisons familiales","d'une absence non spécifiée") )?>
    <h2>Chere <?php echo $_GET['prof']?> </h2>
    <p><?php    if ($_GET['gender'] == 'g')
                    echo "Mon fils ";
                else
                    echo "Ma fille ";
                echo $_GET['name']; ?> n'a pas pu se presenter a votre cours a cause
        <?php echo $excuse[$_GET['reason']][rand(0, count($excuse[$_GET['reason']]) - 1)]; ?></p>
        <p><?php echo date('l \t\h\e jS'); ?></p>
</body>
</html>