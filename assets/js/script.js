$(function(){
  $('#submit').click(function(){
    var userFirstName = $('#firstName').val();
    var userLastName = $('#lastName').val();
    var userPhone = $('#phone').val();
    var userMail = $('#mail').val();
    var regexName = /^([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}$/;
    var regexPhone = /^0[1-9]{1}[0-9]{8}$/;
    var regexMail = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]{2,}$/;
      if(userFirstName.match(regexName) && userLastName.match(regexName) && userPhone.match(regexPhone) && userMail.match(regexMail)){
        alert('Merci de votre participation');
      }else{
        alert('Attention, le nom et le prémon ne doivent contenir que des lettres et des tirets, le numéro de téléphone doit contenir dix chiffres et l\'adresse mail doit être conforme.');
      }
  });
});
