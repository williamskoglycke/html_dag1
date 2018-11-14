
$(document).ready(function () {

$("#createUsers").click(function() {
    $.ajax({
      url: 'https://randomuser.me/api/?results=1',
      dataType: 'json',
      success: function(data) {
        $(".username").html(data.results[0].login.username);
        $(".password").html(data.results[0].login.password);
        $(".name").html(data.results[0].name.first);
        $(".lastname").html(data.results[0].name.last);
        $(".email").html(data.results[0].email);
        $(".profilepicture").attr("src", data.results[0].picture.large);
      }
    });
  });
});