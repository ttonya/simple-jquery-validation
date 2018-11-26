
$(document).ready(function () {

    var textReg = /^[A-Z, А-Я]+$/i;
    var numberReg = /^[0-9]/;
    var emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    $('#region').on('input', function(e) {
       if (!textReg.test($('#region').val())) {
        $('#region').after('<span class="error"> Доступны для ввода только буквы </span>');  
       }
    });

    $('#city').on('input', function(e) {
        if (!textReg.test($('#city').val())) {
         $('#city').after('<span class="error"> Доступны для ввода только буквы </span>');  
        }
     });

     $('#inn').on('input', function(e) {
        if (!numberReg.test($('#inn').val())) {
         $('#inn').after('<span class="error"> Доступны для ввода только цифры </span>');  
        }
     });

    

     $('#email').on('input', function(e) {
        if (emailReg.test($('#phone').val())) {
         $('#email').after('<span class="error"> Недопустимые значения </span>');  
        }
     });


     
$("form").submit(function(event) {

    event.preventDefault();

  if (!$("#region").val()) {
    $('#submit').after('<span class="error"> Остались незаполненными обязательные поля </span>');  
  }

  if(!$("#city").val()) {
    $('#city').after('<span class="error"> Поле не может быть пустым </span>'); 
  }

  if(!$("#company-name-eng").val() ) {
    $('#company-name-emg').after('<span class="error"> Поле не может быть пустым </span>'); 
  }

  if(!$("#short-descr").val()) {
    $('#short-descr').after('<span class="error"> Поле не может быть пустым </span>'); 
  }

  if(!$("#company-name-rus").val()){ 
    $('#company-name-rus').after('<span class="error"> Поле не может быть пустым </span>'); 
  }
  if(!$("#full-descr").val()) {
    $('#full-descr').after('<span class="error"> Поле не может быть пустым </span>'); 
  }
  
  if(!$("#post-address").val()){
    $('#post-address').after('<span class="error"> Поле не может быть пустым </span>'); 
  }
  if(!$("#office-address").val()){
    $('#office-address').after('<span class="error"> Поле не может быть пустым </span>'); 
  }
  if(!$("#inn").val()) {
    $('#inn').after('<span class="error"> Поле не может быть пустым </span>'); 
  }

  if(!$("#email").val()) {
    $('#email').after('<span class="error"> Поле не может быть пустым </span>'); 
  }

console.log('submit');
});

});
