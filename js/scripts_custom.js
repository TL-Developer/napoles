
$(document).ready(function(){

	// MODAL PEDIDOS ONLINE
	$('.modalPedir').css('height', $('body').height() + 'px');
	$('.pedirOnline').on('click', function(){
		$('.modalPedir').fadeIn(1000);
	});

	$('.modalPedir .close').on('click', function(){
		$('.modalPedir').fadeOut(1000);
	});


		/*****************SCRIPTS JCAROUSEL SOBRE**********************/
		$('.content-jcarousel-quemsomos .jcarousel-quemsomos').jCarouselLite({
			      btnNext: ".btn-jcarousel-quemsomos-right",
			      btnPrev: ".btn-jcarousel-quemsomos-left",
			      visible: 3,
			      auto: 5000,
			      speed: 1000
	  });

		/*****************END SCRIPTS JCAROUSEL SOBRE**********************/



			/*****************SCRIPTS HOVER ANIMATE LI CARDAPIO CONTEUDO**********************/
				$('#box-content-cardapio-pizza-tradicional-total li').hover(function(){
					$(this).find('h1').css('color','#fff');
					$(this).find('p').css('color','#ededed');
				},function(){
					$(this).find('h1').css('color','#e96268');
					$(this).find('p').css('color','#737171');
				});


			/*****************ENDSCRIPTS HOVER ANIMATE LI CARDAPIO CONTEUDO**********************/



			/*****************SCRIPTS CLIQUES PAGE NUMBERS**********************/

			$('.pages-number').find('h1').eq(0).click(function(){
				$('.page-number-2, .page-number-3, .page-number-4').hide(600);
				$('.page-number-1').show(3000,'easeOutBounce');
			});

			$('.pages-number').find('h1').eq(4).click(function(){
				$('.page-number-1').hide(600);
				$('.page-number-2').hide(600);
				$('.page-number-3').hide(600);
				$('.page-number-4').show(3000,'easeOutBounce');
			});

			$('.pages-number').find('h1').eq(5).click(function(){
				$('.page-number-1').hide(600);
				$('.page-number-2').hide(600);
				$('.page-number-3').hide(600);
				$('.page-number-4').show(3000,'easeOutBounce');
			});


			$('.pages-number').find('h1').eq(1).click(function(){
				$('.page-number-2, .page-number-3, .page-number-4').hide(600);
				$('.page-number-1').show(3000,'easeOutBounce');
			});

			$('.pages-number').find('h1').eq(2).click(function(){
				$('.page-number-1, .page-number-3, .page-number-4').hide(600);
				$('.page-number-2').show(3000,'easeOutBounce');
			});

			$('.pages-number').find('h1').eq(3).click(function(){
				$('.page-number-1').hide(600);
				$('.page-number-2').hide(600);
				$('.page-number-4').hide(600);
				$('.page-number-3').show(3000,'easeOutBounce');
			});


			/*****************SCRIPTS CLIQUES PAGE NUMBERS**********************/


			/*****************SCRIPTS CARDAPIO CONTEUDO HOVER**********************/

			$('#box-content-cardapio-pizza-tradicional-total li').click(function(){
				$(this).find('p').slideDown(700, 'easeOutBounce');
			});

			$('#box-content-cardapio-pizza-tradicional-total li').hover(function(){
				$(this).find('p').hide(700, 'easeOutBounce');
			});


			/*****************END SCRIPTS CARDAPIO CONTEUDO HOVER**********************/


			/*****************SCRIPTS MENU**********************/

			$('#menu-nav').animate({
				marginTop:'2px'
			},1800,'easeOutBounce');


			/*****************FIM SCRIPTS  MENU**********************/



			/*****************SCRIPTS JCAROUSEL CARTA DE VINHOS**********************/


			$('#banner-dir-cardapio').cycle({
			fx:      'custom',
			sync: 1,

			cssBefore: {
				top:  0,
				left: 232,
				display: 'block'
			},
			animIn:  {
				left: 0
			},
			animOut: {
				top: 310
			},
			delay: -5000 ,
			speed:   1000,
			timeout: 3000,
			pause:   1

		});



			/*****************END SCRIPTS JCAROUSEL CARTA DE VINHOS**********************/


		/*****************SCRIPTS BOTAO VEJA MAIS**********************/
			$('.button-veja-cardapio').hover(function(){
				$(this).stop().animate({
				 marginTop:'-5px'
				});

			},function(){
			$(this).stop().animate({
			margin:0
			});
			});
		/*****************END SCRIPTS BOTAO VEJA MAIS**********************/

		/*****************SCRIPTS BANNER HOME**********************/
		$('#banner-esq').cycle({
			fx:     'scrollDown',
			easing: 'easeOutBounce',

			delay: 4000,
			next:   '.prev-banner-dir',
			prev:   '.prev-banner-esq',
			speed:   1000,
			timeout: 5000,
			pause:   1


		});





			$('#banner-esq, .prev-banner-esq, .prev-banner-dir').hover(function(){
				$('.prev-banner-esq, .prev-banner-dir').css("opacity" , "1");
			});
			$('#banner-esq').mouseleave(function(){
				$('.prev-banner-esq, .prev-banner-dir').css("opacity" , "0.4");
			});

		/*****************END SCRIPTS BANNER HOME**********************/


		/*****************SCRIPTS JCAROUSEL CARTA DE PIZZA**********************/


			$('#jcarousel-carta-pizza').jCarouselLite({
			btnNext: ".bt-next-carta-pizza",
			btnPrev: ".bt-prev-carta-pizza",
			visible: 2,
			auto: 8000,
			speed: 1000,



		});






			$('#banner-esq, .prev-banner-esq, .prev-banner-dir').hover(function(){
				$('.prev-banner-esq, .prev-banner-dir').css("opacity" , "1");
			});
			$('#banner-esq').mouseleave(function(){
				$('.prev-banner-esq, .prev-banner-dir').css("opacity" , "0.4");
			});






			$('#jcarousel-carta-vinhos, .bt-prev-carta-vinhos, .bt-next-carta-vinhos').hover(function(){
				$('.bt-prev-carta-vinhos, .bt-next-carta-vinhos').css("opacity" , "1");
			});
			$('#jcarousel-carta-vinhos').mouseleave(function(){
				$('.bt-prev-carta-vinhos, .bt-next-carta-vinhos').css("opacity" , "0.4");
			});



		/*****************END SCRIPTS JCAROUSEL CARTA DE PIZZA**********************/





			/*****************SCRIPTS JCAROUSEL CARTA DE VINHOS**********************/


			$('#jcarousel-carta-vinhos').jCarouselLite({
			btnNext: ".bt-next-carta-vinhos",
			btnPrev: ".bt-prev-carta-vinhos",
			visible: 2,
			auto: 10000,
			speed: 1000


		});




			$('#banner-esq, .prev-banner-esq, .prev-banner-dir').hover(function(){
				$('.prev-banner-esq, .prev-banner-dir').css("opacity" , "1");
			});
			$('#banner-esq').mouseleave(function(){
				$('.prev-banner-esq, .prev-banner-dir').css("opacity" , "0.4");
			});






			$('#jcarousel-carta-pizza, .bt-prev-carta-pizza, .bt-next-carta-pizza').hover(function(){
				$('.bt-prev-carta-pizza, .bt-next-carta-pizza').css("opacity" , "1");
			});
			$('#jcarousel-carta-pizza').mouseleave(function(){
				$('.bt-prev-carta-pizza, .bt-next-carta-pizza').css("opacity" , "0.4");
			});



		/*****************END SCRIPTS JCAROUSEL CARTA DE VINHOS**********************/



			/*****************SCRIPTS JCAROUSEL CARTA DE VINHOS**********************/


			$('#banner-dir').cycle({
			fx:      'custom',
			sync: 1,

			cssBefore: {
				top:  0,
				left: 232,
				display: 'block'
			},
			animIn:  {
				left: 0
			},
			animOut: {
				top: 310
			},
			delay: -5000 ,
			speed:   800,
			timeout: 3000,
			pause:   1



		});

			/*****************END SCRIPTS JCAROUSEL CARTA DE VINHOS**********************/




			$('#banner-cardapio').cycle();




	$('.deliveryCheck').click(function(){

		var digRegiao = prompt('Por Favor digite sua Regiao').toLowerCase();


		if (
		digRegiao == "jardim são martins" ||
		digRegiao == "jardim sao martins" ||
		digRegiao == "jd sao martins" ||
		digRegiao == "jd são martins" ||
		digRegiao == "jd sao martinho" ||
		digRegiao == "jardim sao martinho" ||
		digRegiao == "jardim são martinho" ||
		digRegiao == "jd são martinho" ||
		digRegiao == "jardim sao martinho" ||
		digRegiao == "jd sao martinho" ||
		digRegiao == "jardim noemia" ||
		digRegiao == "jd noemia" ||
		digRegiao == "noemia" ||
		digRegiao == "são miguel pt" ||
		digRegiao == "sao miguel pt" ||
		digRegiao == "são miguel paulista" ||
		digRegiao == "sao miguel paulista" ||
		digRegiao == "são miguel pta" ||
		digRegiao == "sao miguel pta" ||
		digRegiao == "sao miguel" ||
		digRegiao == "são miguel" ||
		digRegiao == "vila rosária" ||
		digRegiao == "vila rosaria" ||
		digRegiao == "vila itaim" ||
		digRegiao == "vila itaim pt" ||
		digRegiao == "vila itaim pta" ||
		digRegiao == "vila itaim paulista" ||
		digRegiao == "itaim paulista" ||
		digRegiao == "itaim pt" ||
		digRegiao == "itaim pta" ||
		digRegiao == "vila mara" ||
		digRegiao == "jardim maia" ||
		digRegiao == "jd maia" ||
		digRegiao == "maia" ||
		digRegiao == "jd santo afonso" ||
		digRegiao == "jd sto afonso" ||
		digRegiao == "jardim sto afonso" ||
		digRegiao == "jardim santo afonso" ||
		digRegiao == "santo afonso" ||
		digRegiao == "sto afonso" ||
		digRegiao == "curuçá" ||
		digRegiao == "curuçá velha" ||
		digRegiao == "curuçá nova" ||
		digRegiao == "curucá" ||
		digRegiao == "curucá velha" ||
		digRegiao == "curucá nova" ||
		digRegiao == "curuca" ||
		digRegiao == "curuca velha" ||
		digRegiao == "curuca nova" ||
		digRegiao == "vila curuca" ||
		digRegiao == "vila curuca nova" ||
		digRegiao == "vila curuca velha" ||
		digRegiao == "vila curucá velha" ||
		digRegiao == "vila curucá nova" ||
		digRegiao == "vila curuçá velha" ||
		digRegiao == "vila curuçá nova" ||
		digRegiao == "parque paulistano" ||
		digRegiao == "pq paulistano" ||
		digRegiao == "jd helena" ||
		digRegiao == "jardim helena" ||
		digRegiao == "pimentas" ||
		digRegiao == "bairro dos pimentas" ||
		digRegiao == "bairro pimentas"
		)

		{
			alert('Sim, Fazemos entregas em sua regiao');
			var digCofirm = confirm ('Deseja Solicitar seu Pedido?')
				if ( digCofirm ){
					alert('Muito Obrigado ! Iremos redireciona-lo');
					 setTimeout(function(){
							$(window.document.location).attr("href","contato.html");
						}, 200);
				}
		}
		else{
			alert('Desculpe, Nao fazemos entregas em sua regiao, Por favor verifique se o campo esta correto ou tente novamente!');
			return false;
		}
		return false;
	});

});



