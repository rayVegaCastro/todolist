$(document).ready(function(){
     $('#button').click(function(){
       var toAdd = $('input[name=ListItem]').val();
       $('ol').append('<li>' + toAdd + '</li>');
     });

  $("input[name=ListItem]").keyup(function(e){
    e.preventDefault();
    if(e.keyCode == 13)
      $("#button").click()
			 });

       $(document).on('dblclick','li', function(){
              $(this).toggleClass('cross-out').fadeOut('400');
         });

    $('input').focus(function() {
        $(this).val('');
       });

        $('ol').sortable();

            });


// $(document).ready(
//   function(){
//           $('#button').click(function(){
//                 var toAdd = $('input[name=ListItem]').val();
//                  $('ol').append('<li>' + toAdd + '</li>');
//
//              });
//
//                 $("input[name=ListItem]").keyup(function(e)}
//               if(e.keyCode == 13)
//               $("#button").click()
// 			 });
//        $(document).on('dblclick','li', function(){
//               $(this).toggleClass('cross-out').fadeOut('400');
//               $('input').focus(function() {
//         $(this).val('');
//         $('ol').sortable();
//       });
//             });
