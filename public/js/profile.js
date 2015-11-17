'use strict';

$(document).ready(init);

function init () {

  var userEdit = {};
  var cookie = document.cookie.split(' ')[1];
  userEdit._id = cookie.slice(7);
 

  $.ajax({
    url:'/profile/getprofile',
    type:'GET'
  }).done(function(data){
    updateProfile(data);
  });

  $('#logout').click(logout);

}

function logout() {
  $.post('/users/logout')
  .done(function(){
    window.location.replace('/');
  });
}


function updateProfile (user) {
  $('#avatarURL').attr('src', user.avatar);
  $('#userNameField').text(user.name);
  $('#userEmailField').text(user.email);

};