<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';


$yourEmail = 'team@vorobeyart.ru';
$password = 'psmrygtnlzozivjr';

$dataName = $_POST['name'];
$dataEmail = $_POST['email'];
$dataAbout = $_POST['about'];
$dataPhone = $_POST['phone'];
$dataCompany = $_POST['company'];
$dataWhere = $_POST['where'];
// $dataFiles = $_FILES['myfile']; я не уверен что так будет работать

// настройки SMTP
$mail->Mailer = 'smtp';
$mail->Host = 'ssl://smtp.yandex.ru';
$mail->Port = 465;
$mail->SMTPAuth = true;
$mail->Username = $yourEmail; // ваш email - тот же что и в поле From:
$mail->Password = $password; // ваш пароль;

// формируем письмо

// if (!empty($dataFiles['name'][0])) {
// 	for ($i = 0; $i < count($dataFiles['tmp_name']); $i++) {
// 		echo ($dataFiles['name'][$i]);
// 		echo ($dataFiles['tmp_name'][$i]);
// 		if ($dataFiles['error'][$i] === 0) 
// 				$mail->addAttachment($dataFiles['tmp_name'][$i], $dataFiles['name'][$i]);
// 	}
// }

// от кого: это поле должно быть равно вашему email иначе будет ошибка
$mail->setFrom($yourEmail, $dataEmail);

// кому - получатель письма
$mail->addAddress($yourEmail, 'Имя Получателя');  // кому
// $mail->addAttachment($dataFiles['tmp_name'][0], $dataFiles['name'][0]); 

// я для того чтобы добавить файлы использую глобальную переменную $_FILES (https://www.php.net/manual/ru/reserved.variables.files.php)
$mail->addAttachment($_FILES['myfile']['tmp_name'], $_FILES['myfile']['name']);
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