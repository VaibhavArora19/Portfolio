    $(document).ready( function() 
    {

        // Scrolling navbar color change
        $(window).scroll( function(){

            if(this.scrollY <25){
                $(".cf1").removeClass("navbar-non");
                document.querySelector(".title-span").style.color = "#22577E";
            }
            else{

                $(".cf1").addClass("navbar-non");
                document.querySelector(".title-span").style.color = "white";
            }
        });
    })
    //Form display
    document.querySelector(".subbutton").addEventListener("click", message);
    function message()
    {
    document.querySelector(".form").style.display = "inline";
    }
    var val = document.querySelectorAll("button").length;
    for(var i=0; i<val; i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click", formSubmit);
        function formSubmit()
        {
            if(this.innerHTML == "OK")
            {
                document.querySelector(".form").style.display = "none";
            }
        }
    }