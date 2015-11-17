'use strict';

$(document).ready(init);

function init () {
  $('#logout').click(logout);
  $('#cancelEdit').click(cancelEdit);
  $('#saveButton').click(saveEdit);
}

function logout() {
  $.post('/users/logout')
  .done(function(){
    window.location.replace('/');
  });
}

function cancelEdit () {
  window.location.replace('/profile');
}



function saveEdit () {
  var userEdit = {};
  userEdit.avatar = $('#newAvatar').val();
  userEdit.name = $('#newName').val();
  userEdit.email  = $('#newEmail').val();
  var cookie = document.cookie.split(' ')[1];
  userEdit._id = cookie.slice(7);

  $.ajax({
    url:'/profile',
    type:'PUT',
    data:userEdit
  }).done(function(data){
    window.location.replace('/profile');
  }

  ).fail(function(err){
    console.log(err);
  });

  console.log(userEdit);

}