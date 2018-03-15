// Input Checkboxes
$(".parent input").on('click',function(){
  var _parent=$(this);
  var nextli=$(this).parent().next().children().children();

  if(_parent.prop('checked')){
     console.log('parent checked');
     nextli.each(function(){
       $(this).children().prop('checked',true);
     });

  }
  else{
    console.log('parent un checked');
     nextli.each(function(){
       $(this).children().prop('checked',false);
     });

  }
});

$(".child input").on('click',function(){

  var ths=$(this);
  var parentinput=ths.closest('div').prev().children();
  var sibblingsli=ths.closest('ul').find('li');

  if(ths.prop('checked')){
    console.log('child checked');
    parentinput.prop('checked',true);
  }
  else{
    console.log('child unchecked');
       var status=true;
     sibblingsli.each(function(){
       console.log('sibb');
       if($(this).children().prop('checked')) status=false;
     });
       if(status) parentinput.prop('checked',false);
  }
});


// FilterPopup Window
var scrollTop = '';
var newHeight = '100';

$(window).bind('scroll', function() {
  scrollTop = $( window ).scrollTop();
  newHeight = scrollTop + 100;
});

$('.js-FilterPopup-trigger').click(function(e) {
  e.stopPropagation();
  if(jQuery(window).width() < 767) {
    $(this).after( $(this).nextAll('.FilterPopup:first') );
    $(this).nextAll('.FilterPopup:first').show().addClass('FilterPopup-mobile').css('top', 0);
    $('html, body').animate({
      scrollTop: $(this).nextAll('.FilterPopup:first').offset().top
    }, 500);
  } else {
    $('.FilterPopup').hide();
    $(this).nextAll('.FilterPopup:first').removeClass('popup-mobile').css('top', newHeight).toggle();
  };
});

$('html').click(function() {
  $('.FilterPopup').hide();
});

$('.FilterPopup-close').click(function(e){
  $(this).parent().hide();
});

$('.FilterPopup').click(function(e){
  e.stopPropagation();
})
