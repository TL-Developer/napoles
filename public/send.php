<?php
 
/* Medida preventiva para evitar que outros domínios sejam remetente da sua mensagem. */
if (eregi('tempsite.ws$|locaweb.com.br$|hospedagemdesites.ws$|websiteseguro.com$', $_SERVER[HTTP_HOST])) {
        $emailsender='atendimento@napolespizzaria.com.br'; // Substitua essa linha pelo seu e-mail@seudominio
} else {
        $emailsender = "contato@" . $_SERVER[HTTP_HOST];
        //    Na linha acima estamos forçando que o remetente seja 'webmaster@seudominio',
        // Você pode alterar para que o remetente seja, por exemplo, 'contato@seudominio'.
}
 
/* Verifica qual éo sistema operacional do servidor para ajustar o cabeçalho de forma correta.  */
if(PATH_SEPARATOR == ";") $quebra_linha = "\r\n"; //Se for Windows
else $quebra_linha = "\n"; //Se "nÃ£o for Windows"
 
// Passando os dados obtidos pelo formulário para as variáveis abaixo
				$nome			= $_POST ["nome"] ;
				$email			= $_POST ["email"] ;
				$tel					= $_POST ["telefone"] ;
				$endereco		= $_POST ["endereco"] ;
				$cep				= $_POST ["cep"] ;
				$cidade			= $_POST ["cidade"] ;
				$mensagem	= $_POST ["mensagem"] ;
				$emaildestinatario = 'atendimento@napolespizzaria.com.br';
 
 
/* Montando a mensagem a ser enviada no corpo do e-mail. */
	$mensagemHTML  = "<strong>Nome:</strong>  $nome <br />";
	$mensagemHTML  .= "<strong>E-mail:</strong>  $email<br />";
	$mensagemHTML  .= "<strong>Telefone:</strong>  $tel<br />";
	$mensagemHTML  .= "<strong>Endereco:</strong>  $endereco<br />";
	$mensagemHTML  .= "<strong>Cep:</strong>  $cep<br />";
	$mensagemHTML  .= "<strong>Cidade:</strong>  $cidade<br />";
	$mensagemHTML  .= "<strong>Mensagem:</strong>  $mensagem<br />";
 
 
/* Montando o cabeÃ§alho da mensagem */
$headers = "MIME-Version: 1.1" .$quebra_linha;
$headers .= "Content-type: text/html; charset=UTF-8" .$quebra_linha;
// Perceba que a linha acima contém "text/html", sem essa linha, a mensagem não chegará formatada.
$headers .= "From: " . $emailsender.$quebra_linha;
$headers .= "Cc: " . $comcopia . $quebra_linha;
$headers .= "Bcc: " . $comcopiaoculta . $quebra_linha;
$headers .= "Reply-To: " . $emailremetente . $quebra_linha;
// Note que o e-mail do remetente será usado no campo Reply-To (Responder Para)
 
/* Enviando a mensagem */

//É obrigatório o uso do parâmetro -r (concatenação do "From na linha de envio"), aqui na Locaweb:

if(!mail($emaildestinatario, " Contato Via Site - $cidade", $mensagemHTML, $headers ,"-r".$emailsender)){ // Se for Postfix
    $headers .= "Return-Path: " . $emailsender . $quebra_linha; // Se "não for Postfix"
    mail($emaildestinatario, $assunto, $mensagemHTML, $headers );
}
 
/* Mostrando na tela as informações enviadas por e-mail 
print "Mensagem <b>$assunto</b> enviada com sucesso!<br><br>
De: $emailsender<br>
Para: $emaildestinatario<br>
Com cópia: $comcopia<br>
Com cópia Oculta: $comcopiaoculta
<p><a href='".$_SERVER["HTTP_REFERER"]."'>Voltar</a></p>"
*/
?>

<!DOCTYPE html>

<html lang="pt-br">

<head>
<meta charset="UTF-8" />

<title>.:: Nápoles Pizzaria ::.</title>

</head>
<body>

<!-- container -->
<div class="containerSend">
    <?php 
        echo "<script>alert('Email enviado com sucesso!');</script>"; 
		echo "<script>location.href='index.html'</script>"; // Página que será redirecionada
    ?>
</div>
<!-- container --> 
</body>
</html>