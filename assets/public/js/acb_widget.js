(function ($) {
    $(document).ready(function () {
        
     /**
     * Show the chat box open
     */
        /**
         * Chat open and close
         */

        $("#chat-circle").click(function() {
            localStorage.setItem('WCS_scale', 'active');    
        });

        $(".chat-box-toggle").click(function() {
            localStorage.setItem('WCS_scale', 'inactive');

        });

        let scaleItems = localStorage.getItem("WCS_scale");
        console.log(scaleItems);

        if(scaleItems == "active"){
            document.getElementById("sam").style.display = 'block';
        }
        else{
            document.getElementById("sam").style.display = 'none';
        }  

        /**
         * Design
         */
        //  var msg_disp = $('#incoming_id').attr("value");
        //  if(msg_disp){
        //     $("#vegan").css({"text-align": 'left'});
        //  }
         

    });
})(jQuery);


