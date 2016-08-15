<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 

<meta name="robots" content="noindex, nofollow" />
<meta name="googlebot" content="noindex" />

<title>Thank You, Your Response Has Been Submitted</title>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-12373778-13']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>

</head>
<body>

<?php
$visitor = $_POST['Name']; 
$visitormail = $_POST['visitormail']; 
$notes = $_POST['notes'];
$attn = $_POST['attn'];

$attn = $attn ; 
$subject = $attn; 

$notes = stripcslashes($notes); 

$message = "
Attention: $attn \n
Message: $notes \n 
From: $visitor ($visitormail)\n
";

$from = "From: $visitormail\r\n";

mail("shamilled@gmail.com", $subject, $message, $from);
?>

<p align="center">
Thank You : <?php echo $visitor ?> ( <?php echo $visitormail ?> ) 
<br />

Attention: <?php echo $attn ?>
<br />
 
Message:<br /> 
<?php $notesout = str_replace("\r", "<br/>", $notes); 
echo $notesout; ?> 
<br />
<br /><br />

Thank You, Your Response Has Been Submitted<br />
</p> 

</body>
</html>