$(document).ready(function(){
    $('button#light-mode').click(function(){
        $('body').removeClass();
        $('body').addClass('light-bgd')
    });
    $('button#dark-mode').click(function(){
        $('body').removeClass();
        $('body').addClass('dark-bgd')
    });
});


//You can use toggleClass