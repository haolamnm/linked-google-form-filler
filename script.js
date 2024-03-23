document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('registrationForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value;
      if (/\\d/.test(name)) {
        alert('Tên không được chứa số.');
        return false;
      }
  
      var phone = document.getElementById('phone').value;
      if (!/^[0-9]+$/.test(phone)) {
        alert('Số điện thoại chỉ được chứa số.');
        return false;
      }
  
      var email = document.getElementById('email').value;
      if (!/@/.test(email)) {
        alert('Email phải chứa ký tự @.');
        return false;
      } else {
        alert('Email bạn nhập sẽ là email được nhận những thông tin chính thức sắp đến từ dự án');
      }
  
      // Here you would normally handle the form submission,
      // for example sending data to a server or opening the Google Form link.
      // window.location.href = 'YOUR_GOOGLE_FORM_LINK';
  
      return true;
    });
  });
  