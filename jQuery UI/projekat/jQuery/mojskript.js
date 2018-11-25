//prva tri dugmeta
 $(function() {
    $("#radio").buttonset();
  });


 $(function(){
 	$("#radio").on('click','#radio1',function(){
	$("body").css('background-color','#5295CD');
		});

 	$("#radio").on('click','#radio2',function(){
	$("body").css('background-color','#644EFF');
		});

 	$("#radio").on('click','#radio3',function(){
	$("body").css('background-color','#66B9FF');
		}); 
 });


//za datum
  $(function() {
    $( "#datepicker" ).datepicker({

	    dateFormat: "yy-mm-dd",

	    onSelect: function()
	    { 
	        var datum = $(this).datepicker('getDate'); 
	        $("#ispis_datuma").html(datum);
	    }

	});

	$("#dugme1").button();
  $("#btnBoja").button();
}); 


// za dinare i evre
 $(function() {
    $( "#slider" ).slider({
      range: "min",
      value: 55,
      min: 1,
      max: 500,
      slide: function( event, ui ) {
        $( "#amount" ).val( "€" + ui.value);
        $("#dinari").val(ui.value * 120 + "RSD")
      }
    });
    $( "#amount" ).val( "€" + $( "#slider" ).slider( "value" ) );
  });


 $(function() {
    $( "#dialog ").dialog();
  });


// za animaciju kvadrata klikom na dugme klikni
 $(function() {
    var state = true;
    $( "#dugme2" ).click(function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#9d9aea",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#fff",
          width: 240
        }, 1000 );
      }
      state = !state;
    });
  });


// za dialog 
  $(function() {
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#dugme1" ).click(function() {
      $( "#dialog" ).dialog( "open" );
    });
  });


// za random boju dialoga
$(function(){
  $("#btnBoja").click(function(){

    $("#dialog").css({
          "background": '#' + Math.floor( Math.random() * 16777215 ).toString( 16 )
        });


  });
});