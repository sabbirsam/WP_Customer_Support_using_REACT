(function ($) {
    $(document).ready(function () {
// check box 

        /**
         * Frontend
         */
         $('#WCS_frontend').click(function() {
            // $(this).attr('checked', 'checked');
            if ($('#WCS_frontend').is(":checked"))
            {
                $(this).attr('value', '1');
            }else{
                // $(this).removeAttr('checked');
                $(this).attr('value', '0');
            }
            });

        /**
         * Backend
         */
            $('#WCS_backend').click(function() {
                // $(this).attr('checked', 'checked');
                if ($('#WCS_backend').is(":checked"))
                {
                    $(this).attr('value', '1');
                }else{
                    // $(this).removeAttr('checked');
                    $(this).attr('value', '0');
                }
                });

        /**
         * Set position
         */
      
         $('#WCS_position').click(function() {
            // $(this).attr('checked', 'checked');
            if ($('#WCS_position').is(":checked"))
            {
                $(this).attr('value', '1');
            }else{
                // $(this).removeAttr('checked');
                $(this).attr('value', '0');
            }
            });

            /**
             * Left right btn gap
             */
            if ($('#WCS_position').is(":checked")){
                var WCS_pos =  $('#WCS_position').attr("value");
                if(WCS_pos == '1'){
                    $("#arrow-left").toggle().css({"margin-top": "53px"});
                    $("#arrow-right").toggle().css({"margin-top": "53px"});
                }
             }

            $('#WCS_position').click(function() { 
                $("#arrow-left").toggle().css({"margin-top": "53px"});
                $("#arrow-right").toggle().css({"margin-top": "53px"});
            });

            /**
             * Chat box left right
             */

         $('#arrow-left').click(function() { 
            $(this).attr('value', '1').css({"background": "#8500ff"});
            $('#arrow-right').attr('value', '0').css({"background": "#043263"});
            $('.chat-box').css({"left": "708px"});
            $('#chat-circle').css({"left": "912px"});
           

         });
         $('#arrow-right').click(function() { 
            $(this).attr('value', '1').css({"background": "#8500ff"});
            $('#arrow-left').attr('value', '0').css({"background": "#043263"});
            $('.chat-box').css({"left": "unset"});
            $('#chat-circle').css({"left": "unset"});
           
         });

         var left =  $('#arrow-left').attr("value");
         var right =  $('#arrow-right').attr("value");

        if(left == '0' && right == '1'){
            $('.chat-box').css({"left": "auto"});
            $('#chat-circle').css({"left": "unset"});
        }
        if(left == '1' && right == '0'){
            $('.chat-box').css({"left": "708px"});
            $('#chat-circle').css({"left": "912px"});
        }




         /**
          * Auto selected btn color
          */
          $('#WCS_customization').click(function() {
            // $(this).attr('checked', 'checked');
            if ($('#WCS_customization').is(":checked"))
            {
                $(this).attr('value', '1');
            }else{
                // $(this).removeAttr('checked');
                $(this).attr('value', '0');
            }
            });

            
        $('.color-picker').hide();//color pic text hide
        $('#WCS_customization').click(function() { 
            $("#WCS_colorPicker").toggle().css({"margin-top": "53px", "margin-left": "11px"}); //color pic color bar show below
            $('.color-picker').toggle();
            
         });
         
        var WCS_pos =  $('#WCS_customization').attr("value");
            if(WCS_pos == '1'){
                $("#WCS_colorPicker").toggle().css({"margin-top": "53px", "margin-left": "11px"});
                $('.color-picker').toggle();
            }
             
            /**
             * Pos btn color set
             */
        
        var left =  $('#arrow-left').attr("value");
       
        var right =  $('#arrow-right').attr("value");
      
        if(left == 1){
            $('#arrow-left').css({"background": "#8500ff"});
           
        }else if(right== 1){
            $('#arrow-right').css({"background": "#8500ff"});
           
        }

          /**
         * Settings Customization 
         */
        let userColor= document.querySelector("#WCS_colorPicker");
        userColor.addEventListener("change",(e) => {
            $("#chat-circle").css({"background": userColor.value});
            $("#cbox-header").css({"background": userColor.value});
        });

    
        $('#WCS_save_settings').click(function() {
            // $(this).attr('checked', 'checked');
            if ($('#WCS_save_settings').is(":checked"))
            {
                $(this).attr('value', '1');
            }else{
                // $(this).removeAttr('checked');
                $(this).attr('value', '0');
            }

            /**
             * Ajax values
             */
            var WCS_frontend = $('#WCS_frontend').attr("value") || 1;
            var WCS_backend = $('#WCS_backend').attr("value") || 1;
            var WCS_position = $('#WCS_position').attr("value") || 1;
            var WCS_customization = $('#WCS_customization').attr("value") || '#6a1f06';
            var WCS_position_settings_left_val = $('#arrow-left').attr("value") || 0;
            var WCS_position_settings_right_val = $('#arrow-right').attr("value") || 1;

            var data = {
                action: "WCS_data_truncate",
                WCS_frontend: WCS_frontend,
                WCS_backend: WCS_backend,
                WCS_position: WCS_position,
                WCS_customization: WCS_customization,
                left_pos_value:WCS_position_settings_left_val,
                right_pos_value:WCS_position_settings_right_val,
                bg_color_value:userColor.value,
            };

            console.log(data);

            $.ajax({
                url: WCS_data_truncate.ajaxurl,
                data: data,
                type: "post",
                success: function(results) {

                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Chat Setting saved',
                        showConfirmButton: false,
                        timer: 1100
                      })
                      location.reload(true); 

                }
            });
        });
        /**
         * Chat open and close
         */

        $("#chat-circle").click(function() {
            $(".chat-box").toggle('scale');
    
        });
    
        $(".chat-box-toggle").click(function() {
            $(".chat-box").toggle('scale');
    
        });



    });

})(jQuery);

