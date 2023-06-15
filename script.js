// document.body.onload = loadData;

// async function loadData() {
//   // await fetch('https://ik.imagekit.io/chakriandev/test.json?updatedAt=1686793078897').then(res => {
//   //   console.log(res.body);
//   // });
//   fetch('https://ik.imagekit.io/chakriandev/test.json?updatedAt=1686793078897', {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//     },
//   }).then(response => response.json()).then(response => {
//     for (i in response) {
//       console.log(response[i])
//       const productCard = document.createElement('div')
//       const img = document.createElement('p')
//       img.innerText = response[i]
//       productCard.appendChild(img)
//       const t = document.body.append(productCard)
//     };
//   })
//   //console.log(arr);
// }

// for (i in arr) {
//   console.log(arr[i])
//   const productCard = document.createElement('div')
//   const img = document.createElement('p')
//   img.innerText = arr[i]
//   productCard.appendChild(img)
//   const t = document.body.append(productCard)
// };
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle("open");
};