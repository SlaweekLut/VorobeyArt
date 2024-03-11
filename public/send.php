<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';


$yourEmail = 'team@vorobeyart.ru';
$password = 'Ff267S_Zs555';

$dataName = $_POST['name'];
$dataEmail = $_POST['email'];
$dataAbout = $_POST['about'];
$dataPhone = $_POST['phone'];
$dataCompany = $_POST['company'];
$dataWhere = $_POST['where'];

// настройки SMTP
$mail->Mailer = 'smtp';
$mail->Host = 'ssl://smtp.yandex.ru';
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = $yourEmail; // ваш email - тот же что и в поле From:
$mail->Password = $password; // ваш пароль;


// формируем письмо

// от кого: это поле должно быть равно вашему email иначе будет ошибка
$mail->setFrom($yourEmail, $dataEmail);

// кому - получатель письма
$mail->addAddress($yourEmail, 'Имя Получателя');  // кому

$mail->Subject = 'Vorobey Art: Обратная связь!';  // тема письма

$mail->msgHTML("
	<html>
		<body>
			<p>Имя: ".$dataName."</p>
			<p>Почта: ".$dataEmail."</p>
			<p>О проекте: ".$dataAbout."</p>
			<p>Телефон: ".$dataPhone."</p>
			<p>Компания: ".$dataCompany."</p>
			<p>Как узнали о нас: ".$dataWhere."</p>
		</body>
	</html>
	");


if ($mail->send()) { // отправляем письмо
    echo 'Письмо отправлено!';
} else {
    echo 'Ошибка: ' . $mail->ErrorInfo;
}

?>