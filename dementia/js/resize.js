	  //text
	  
	  $(document).ready(function() {
	  $('#incfont').click(function(){   

			curSize= parseInt($('p').css('font-size')) + 1;

	  if(curSize<=30)

			$('p').css('font-size', curSize);

			}); 

	  $('#decfont').click(function(){   

			curSize= parseInt($('p').css('font-size')) - 2;

	  if(curSize>=14)

			$('p').css('font-size', curSize);

			});
	 });

	 //Headers
	 
	 	  $(document).ready(function() {
	  $('#incfont').click(function(){   

			curSize= parseInt($('h6').css('font-size')) + 1;

	  if(curSize<=40)

			$('h6').css('font-size', curSize);

			}); 

	  $('#decfont').click(function(){   

			curSize= parseInt($('h6').css('font-size')) - 2;

	  if(curSize>=22)

			$('h6').css('font-size', curSize);

			});
	 });
	 
	 
	 	 	  $(document).ready(function() {
	  $('#incfont').click(function(){   

			curSize= parseInt($('h7').css('font-size')) + 1;

	  if(curSize<=40)

			$('h7').css('font-size', curSize);

			}); 

	  $('#decfont').click(function(){   

			curSize= parseInt($('h7').css('font-size')) - 2;

	  if(curSize>=18)

			$('h7').css('font-size', curSize);

			});
	 });
	 
	 
