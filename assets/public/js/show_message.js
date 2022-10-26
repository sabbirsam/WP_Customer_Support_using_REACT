(function ($) {
    $(document).ready(function () {
        
     /**
     * Show the chat box open
     */
        /**
         * Chat open and close
         */

        $("#chat-circle").click(function() {
            $(".chat-box").toggle('scale');
        });
    
        $(".chat-box-toggle").click(function() {
            $(".chat-box").toggle('scale');
        });

        /**
         * Get chat user name
         */
         var spanValue = $("#cbox-header span").attr("value");
         console.log(spanValue);
     
        /**
         * 
         */
         var nonce = $('#msg').attr("data-nonce");
         // var chat_val =  $('#sam').attr("value");
 
         var data = {
             action: "show_user_inputed_data",
             nonce: nonce,
         };
        //  console.log(data);
 
         function ajaxCall() {
             $.ajax({
                 data: data,
                 type: "GET",
                 url: show_user_inputed_data.ajaxurl, 
                 success: (function(result) {
                     $("#vegan").html(result);
                 })
             })
         };
         ajaxCall(); // To output when the page loads
         setInterval(ajaxCall, (1 * 1000)); // x * 1000 to get it in seconds     

    });
})(jQuery);


