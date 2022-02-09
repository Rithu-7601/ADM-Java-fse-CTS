$('#signup_div').hide();
$('#signup').on('click', function(){
    $('#login_div').hide()
    $('#signup_div').show()
})
$('#login').on('click', function(){
    $('#signup_div').hide()
    $('#login_div').show()
})
