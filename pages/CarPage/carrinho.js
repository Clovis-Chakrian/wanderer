const removeProductButtons = document.getElementsByClassName("remove")
console.log(removeProductButtons)
for(var i = 0; i< removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", function(event){
        event.target.parentElement.parentElement.parentElement.remove()
    })
}

const cartProduct = document.getElementsByClassName("produtos")
for (var i = 0; i < cartProduct.length; i++) {
    console.log(cartProduct[i])
    const productPrice = cartProduct[i].getElementsByClassName("precoproduto")[0].innerText.replace('R$','')
    const productQuantity = cartProducts[i].getElementsByClassName("qty")[0].value

    totalAmount += productPrice * productQuantity}

totalAmount = totalAmount.toFixed(2)
totalAmount = totalAmount.replace(",", ".")
document.getElementsByClassName("valor-total-produto").innerText = totalAmount
    



function aumentar(id) {
    let countElement = document.getElementById(id);
    let count = parseInt(countElement.innerText);
    count++;
    countElement.innerText = count;
  }

  function diminuir(id) {
    let countElement = document.getElementById(id);
    let count = parseInt(countElement.innerText);
    if (count > 1) {
      count--;
    }
    countElement.innerText = count;
  }

  