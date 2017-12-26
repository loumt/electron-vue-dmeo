/**
 * 登录
 */
function login() {
  let username = $('#username').val();
  let password = $('#password').val();
  if (!username) {
    alert('请输入用户名');
    return;
  }
  if (!password) {
    alert('请输入密码');
    return;
  }

  $.ajax({
    url: '/login',
    data: {
      username: username,
      password: password
    },
    type: 'post',
    dataType: 'json',
    success:function (result) {
      if (result['success']) {
        window.location.href = "/"
      } else {
        $('#errMsg').text(result['message'])
      }
    }
  })
}
