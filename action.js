$('#a1').on('click', function(e){
  e.preventDefault()

$('html,body').animate({
  scrollTop: $('#busca').offset().top - 130}, 'slow');
});

$('#a2').on('click', function(e){
  e.preventDefault()

$('html,body').animate({
  scrollTop: $('#pasos').offset().top - 130}, 'slow');
});

$('#a3').on('click', function(e){
  e.preventDefault()

$('html,body').animate({
  scrollTop: $('#pago').offset().top - 130}, 'slow');
});

$('#a4').on('click', function(e){
  e.preventDefault()

$('html,body').animate({
  scrollTop: $('#faqs').offset().top - 130}, 'slow');
});



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}
