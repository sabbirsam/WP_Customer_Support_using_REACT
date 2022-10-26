(function ($) {
    $(document).ready(function () {
        var nonce = $('#msg').attr("data-nonce");

        var data = {
            action: "show_user_inputed_data",
            nonce: nonce
        };
        console.log(data);

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
       // window.onload = function() { document.getElementById("sam").style.display = 'block';};

    /**
     * Set local storage for chat box
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

    });
})(jQuery);


