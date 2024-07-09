const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();

xhr.addEventListener('load', () => {
  const res = xhr.response;
  console.log(res);
});