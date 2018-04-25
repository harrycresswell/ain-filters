// Input Checkboxes
$(".Checkbox-parent input").on('click',function(){
  var _parent=$(this);
  var nextli=$(this).parent().next().children().children();

  if(_parent.prop('checked')){
     console.log('Checkbox-parent checked');
     nextli.each(function(){
       $(this).children().prop('checked',true);
     });

  }
  else{
    console.log('Checkbox-parent un checked');
     nextli.each(function(){
       $(this).children().prop('checked',false);
     });

  }
});

$(".Checkbox-child input").on('click',function(){

  var ths=$(this);
  var parentinput=ths.closest('div').prev().children();
  var sibblingsli=ths.closest('ul').find('li');

  if(ths.prop('checked')){
    console.log('Checkbox-child checked');
    parentinput.prop('checked',true);
  }
  else{
    console.log('Checkbox-child unchecked');
       var status=true;
     sibblingsli.each(function(){
       console.log('sibb');
       if($(this).children().prop('checked')) status=false;
     });
       if(status) parentinput.prop('checked',false);
  }
});

// show hide accordion

var acc = document.getElementsByClassName("Accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("Accordion--active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


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
