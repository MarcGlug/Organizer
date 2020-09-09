<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Organizer | The amazing thing that I don't know how to name it</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main>
        <div class="card">
            <div class="title">
                <h1>THE AMAZING ORGANIZER FROM THE PAST</h1>
            </div>
            <div class="bars">
                <?php 
                    for ($i=0; $i < 100 ; $i++) { 
                        echo '<div class="bar" id="bar'.$i.'"></div>';
                    }
                ?>
            </div>
            <div class="footer">
                <button id="randomize">Randomize</button>
                <button id="insertion">Insertion sort</button>
                <button id="bubble">Bubble sort</button>
                <button id="quick">Quick sort</button>
            </div>
        </div>
    </main>
</body>
<script src="script.js"></script>
</html>