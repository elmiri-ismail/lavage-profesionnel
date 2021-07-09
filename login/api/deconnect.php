<?php

session_start();

if ( isset($_SESSION['login']) ) {
    
    if (isset($_POST['deconnect'])) {
        if ($_POST['deconnect'] == true) {
            session_destroy();
            echo 'deconnected';
        }
    }

}

?>