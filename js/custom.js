jQuery(window).load(function(){  jQuery('.loader').fadeOut();  jQuery('.blacksheet').fadeOut();  jQuery('.mainwrap').fadeIn();});jQuery(document).ready(function($){        // gallery category        $('.templatemo-gallery-category a').click(function(e){            e.preventDefault();             $(this).parent().children('a').removeClass('active');            $(this).addClass('active');            var linkClass = $(this).attr('href');            $('.gallery').each(function(){                if($(this).is(":visible") == true){                   $(this).fadeOut(500,'easeOutBounce');                };            });            $(linkClass).fadeIn(500,'easeInBounce');          });});