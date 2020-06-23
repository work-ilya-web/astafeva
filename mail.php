<?php
 /* Здесь проверяется существование переменных */
 if (isset($_POST['subject']))  {$info['subject'] = 'Заказали: '.$_POST['subject'];}
 if (isset($_POST['name']))  	{$info['name'] = 'Имя: '.$_POST['name'];}
 if (isset($_POST['phone'])) 	{$info['phone'] = 'Телефон: '.$_POST['phone'];}
 if (isset($_POST['email']))    {$info['email'] = 'Email: '.$_POST['email'];}
 if (isset($_POST['address']))  {$info['address'] = 'Адрес: '.$_POST['address'];}
 if (isset($_POST['message']))  {$info['message'] = 'Сообщение: '.$_POST['message'];}
 if (isset($_POST['type']))  {$info['type'] = 'Направление: '.$_POST['type'];}
 if (isset($_POST['apartments']))  {$info['apartments'] = 'Тип помещения: '.$_POST['apartments'];}
 if (isset($_POST['area']))  {$info['area'] = 'Площадь помещения: '.$_POST['area'];}
 if (isset($_POST['style']))  {$info['style'] = 'Будущий стиль оформления: '.$_POST['style'];}
 if (isset($_POST['budget']))  {$info['budget'] = 'Бюджет: '.$_POST['budget'];}
 if (isset($_POST['begin']))  {$info['begin'] = 'Когда начать: '.$_POST['begin'];}
 if (isset($_POST['process']))  {$info['process'] = 'Участие в процессе: '.$_POST['process'];}
 $info['site'] = 'Заявка со сайта: Astafeva';


 $to = 'tastafieva@yandex.ru';


 $mess = "";
 foreach ($info as $item) {
 	$mess = $mess.$item."<br>";
 }

 $send = mail ($to, $info['site'] ,$mess,"Content-type:text/html; charset = utf-8\r\nFrom:tastafieva@yandex.ru");
 $send = mail ('tastafieva@yandex.ru', $info['site'] ,$mess,"Content-type:text/html; charset = utf-8\r\nFrom:tastafieva@yandex.ru");

 //echo "<pre>"; print_r($_POST); echo "</pre>";
 header('Location: thanks.html');

?>
