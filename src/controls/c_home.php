<?php!isset($_REQUEST['a']) ? $_action = '' : $_action = $_REQUEST['a'];switch($action) {	default:        include './vues/home/v_home.php';    break;}