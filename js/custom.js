/* global $, window */

$(function () {
    'use strict';
    
    // navbar hidden scroll
    $(window).scroll(function () {
        
        if($(window).scrollTop() >= $('.navbar').height()){
            
            $('.navbar').addClass('fading');
            
        } else {
            
            $('.navbar').removeClass('fading');
        }
        
    });
    
    //link tab active
    $(".tabs .tab-link li").click(function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        
        console.log($(this).data('class'))
        
        $('.' + $(this).data('class')).siblings().hide()
        
        $('.' + $(this).data('class')).show()
    })
    
    
});