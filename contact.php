<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Contacto Embarafobia</title>
</head>

<body>
<?php
$nombre = $_POST['nombre'];
$asunto = $_POST['asunto'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$para = 'embarafobiapelicula@gmail.com';
$titulo = 'Asunto:';
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n Asunto: $asunto\n E-Mail: $email\n Mensaje:\n $mensaje";
  
if ($_POST['submit']) {
if (mail($para, $titulo, $msjCorreo, $header)) {
echo "<script language='javascript'>
alert('Mensaje enviado, muchas gracias.');
window.location.href = 'https://www.embarafobialapelicula.com';
</script>";
} else {
echo 'Falló el envio';
}
}
?>

</body>
</html>