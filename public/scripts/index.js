// FRONT END FILE TO INTERACT WITH THE DOM
const foodlist2Container = document.getElementById('foodlist2')

/// SEARCH  BAR ///
let getfoodbtn = document.getElementById('search')
getfoodbtn.addEventListener('click', (event) => {
    input = document.getElementById('foodinput').value
    // addtasktodb({data: input});
    console.log(`this is the input we send from FRONT to BACKEND DB : ${input}`);
    fetch('https://api.calorieninjas.com/v1/nutrition?query='+input, {
    method: 'GET', // or 'PUT'
    headers: {
    'X-Api-Key': 'acQhrPDs9JgLpNfQasMZSQ==pTyDLbzzth5kIhWS'
  },
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    console.log(data.items.length)
    var i = 0;
    let id = 1;
    data.items.forEach(function(element) {

      console.log(element)
      console.log(element.name)

      var namelower = element.name;
      var nameupper = namelower.toUpperCase();
      namedid = `${nameupper}` + ++id; 
      plusid = id;
      
      let foodcard = `
      <section id="${namedid}">
      <i class="far fa-plus-square" id="faplus${plusid}"></i>
      <i class="fa fa-trash" id="fatrash${plusid}"></i> 
      ${nameupper}
      <form>
      <br/> Serving <span id="price">${element.serving_size_g}</span>
      <br/> Calories <span id="cal">${element.calories}</span>
      <br/> Protein <span id="prot">${element.protein_g}</span>
      <br/> Carbo. <span id="carbo">${element.carbohydrates_total_g}</span>
      <br/> Fat <span id="fat">${element.fat_total_g}</span>
      <br/> Sat. Fat <span id="fatsat">${element.fat_saturated_g}</span>
      <br/>
      <br/> Select your serving :
      <input type="button" name="subtract" id="subtract" value="-"></input>
      <input type="button" name="add" id="add" value="+"></input>
  
      <input type="text" name="qty" id="qty" value="0"></input>
      <br/> Quantity
      <input type="text" name="total" id="total" value="0"></input>
      <br/> Serving
      <input type="text" name="caltotal" id="caltotal" value="0"></input>
      <br/> cal
      <input type="text" name="prottotal" id="prottotal" value="0"></input>
      <br/> protein
      <input type="text" name="carbototal" id="carbototal" value="0"></input>
      <br/> carbo
      <input type="text" name="fattotal" id="fattotal" value="0"></input>
      <br/> fat
      <input type="text" name="fatsattotal" id="fatsattotal" value="0"></input>
      <br/> fatsat
      </form>


     `
      id++;
      foodlist.insertAdjacentHTML('beforeend', foodcard)

      // document.getElementById(`faplus${plusid}`).onclick = duplicate;
      document.getElementById(`faplus${plusid}`).onclick = pushed; 


      // document.getElementById(`calcal`).onclick = calcal;
      // let list = document.getElementById(`fatrash${plusid}`);
      // document.getElementById(`fatrash${plusid}`).onclick = clearcontent;





    $(function() {
        var price = parseFloat($('#price').text());
        var cal = parseFloat($('#cal').text());
        var prot = parseFloat($('#prot').text());
        var carbo = parseFloat($('#carbo').text());
        var fat = parseFloat($('#fat').text());
        var fatsat = parseFloat($('#fatsat').text());

        $('#subtract').on("click",function() {
          var $qty = $('#qty');
          var current = parseInt($qty.val());
          if ( current > 0 ) {
              $qty.val(current-1);
              $('#total').val(price*(current-1));
              $('#caltotal').val(cal*(current-1));
              $('#prottotal').val(prot*(current-1));
              $('#carbototal').val(carbo*(current-1));
              $('#fattotal').val(fat*(current-1));
              $('#fatsattotal').val(fatsat*(current-1));

          } else {
              $('#total').val(0);
          }
        });
      
        $('#add').on("click",function() {
          var $qty = $('#qty');
          var current = parseInt($qty.val());
          $qty.val(current+1);
          $('#total').val(price*(current+1));
          $('#caltotal').val(cal*(current+1));
          $('#prottotal').val(prot*(current+1));
          $('#carbototal').val(carbo*(current+1));
          $('#fattotal').val(fat*(current+1));
          $('#fatsattotal').val(fatsat*(current+1));
        });
    });  

    // let x = `${currency.price}`;
    // console.log(x);
    // let res = (`${x}`*1).toFixed(3);
    // console.log(res);


  let list = document.getElementById('foodlist');
  list.addEventListener('click', clearcontent)

  function clearcontent(element) {
    if(element.target.classList.contains('fa-trash')) {
        list.removeChild(element.target.parentElement);
        // list.removeChild(list);
    }
  }
      
  // function clearcontent() {
  // var myobj = document.getElementById(`faplus${plusid}`);
  // myobj.remove();
  // document.getElementById(`${namedid}`).innerHTML = "";
  // console.log("contentcleared")
  // }


// var y = 0;
// var original = document.getElementById(`${namedid}`);

  


function pushed() {
  var table = document.getElementById("foodlist2");
  var row = table.insertRow(1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  var cell7 = row.insertCell(6);

  let portion = document.getElementById("total").value;
  console.log(portion)
  let calories = document.getElementById("caltotal").value;
  let proteins = document.getElementById("prottotal").value;
  let carbos = document.getElementById("carbototal").value;
  let fats = document.getElementById("fattotal").value;
  let fatsats = document.getElementById("fatsattotal").value;

  cell1.innerHTML = `${nameupper}`;
  cell2.innerHTML = `${portion}`
  // cell2.innerHTML = `${element.serving_size_g}`;
  cell3.innerHTML = `${calories}`;
  // cell3.innerHTML = `${element.calories}`;
  cell4.innerHTML = `${proteins}`;
  // cell4.innerHTML = `${element.protein_g}`;
  cell5.innerHTML = `${carbos}`;
  // cell5.innerHTML = `${element.carbohydrates_total_g}`;
  cell6.innerHTML = `${fats}`;
  // cell6.innerHTML = `${element.fat_total_g}`;
  cell7.innerHTML = `${fatsats}`;
  // cell7.innerHTML = `${element.fat_saturated_g}`;
  console.log(cell3.textContent)
  // caleatedContainer.innerHTML = cell3.textContent

  var numbers = [];
  console.log(numbers)
  numbers.push(parseInt(cell3.textContent));
  var total=0;
  for(var i in numbers) { total += numbers[i]; }
  console.log(total)

  updateSubTotal();
}


function updateSubTotal() {
  var table = document.getElementById("foodlist2");
  let subTotal = Array.from(table.rows).slice(1).reduce((total, row) => {
    return total + parseFloat(row.cells[2].innerHTML);
  }, 0);
  document.getElementById("caleated").innerHTML = "" + subTotal.toFixed(2);
}



  // function pushed() {
  //   let pushedcard = 
  // `<tr>
  //   <td>${nameupper}</td>
  //   <td>${element.serving_size_g}</td>
  //   <td id="calrow">${element.calories} cal</td>
  //   <td>${element.protein_g}</td>
  //   <td>${element.carbohydrates_total_g}</td>
  //   <td>${element.fat_total_g}</td>
  //   <td>${element.fat_saturated_g}</td>
  // </tr>`
  // foodlist2.insertAdjacentHTML('beforeend', pushedcard)
  // }

  function calcal2() {
  var table = document.getElementsByTagName('table')[1];
  var emailRow = table.rows[1];
  var emailContent = emailRow.textContent;
  console.log(emailContent.cal)
  console.log(emailContent)
  }

// function duplicate() {
//   var cln = original.cloneNode(true);
//   document.getElementById("foodlist2").appendChild(cln);
// }

function updatevalue() {
    function find(id) { return document.getElementById(id) }
    var quantity = find("quantity").value

    // var height = find("height").value * 2.54
    // var weight = find("weight").value / 2.2

    var result = 0
    console.log(quantity)
    // if (find("quantity") > 0)
    //   result = console.log(test1)
    // else if (find("quantity") < 0 )
    //   result = console.log(test2)
    // find("temp").innerHTML = result * `${element.calories}`
  
}
// updatevalue()

});
})
  .catch((error) => {
    console.error('Error:', error);
  });
}
)




// RESET LIST //
let resetfoodbtn = document.getElementById('resetfood')
const foodlistContainer = document.getElementById('foodlist')

resetfoodbtn.addEventListener('click', (event) => {
    foodlistContainer.innerHTML = ""
    console.log(`reset food list`);
  })


// RESET LIST 2 //
let resetfood2btn = document.getElementById('resetfood2')
resetfood2btn.addEventListener('click', (event) => {
    foodlist2Container.innerHTML = `<tr>
    <th scope="col">Food</th>
    <th scope="col">serving</th>
    <th scope="col" id="calrow">cal</th>
    <th scope="col">prot</th>
    <th scope="col">carbo</th>
    <th scope="col">fat</th>
    <th scope="col">fat sat.</th>
  </tr>`
    console.log(`reset food list 2`);
    document.getElementById("caleated").innerHTML = "0"
    // updateSubTotal();
})


// LoadDATAFROMDB // profileinputDB
let retrievedatainput = document.getElementById('profileinputDB')
let retrievedatabtn = document.getElementById('loaddatafromdb')
retrievedatabtn.addEventListener('click', (event) => {
    console.log(retrievedatainput.value);
})


// Profile NAME SAVED + INSERTED / KCAL REPORTED 
let saveprofilebtn = document.getElementById('saveprofile')
const nameContainer = document.getElementById('namedhello')
const name2Container = document.getElementById('namecheck')
const calneededContainer = document.getElementById('calneeded')
saveprofilebtn.addEventListener('click', (event) => {
  input = document.getElementById('profileinput').value
  calvalue = document.getElementById('totalCals').innerHTML
  var tName = `${calvalue}`;
  var numbered = (tName.match(/\d+/g));
  // calvaluenumber = parseFloat.calvalue
  console.log(`profile saved`);
  console.log(input)

  nameContainer.innerHTML = `Hi ${input.toUpperCase()},`
  name2Container.innerHTML = `${input.toUpperCase()}`
  calneededContainer.innerHTML = `${numbered}`
  window.scrollBy(0, 1000);
})


// SAVE FOOD DB  //
let savefoodbtn = document.getElementById('savefood')
const foodsaveContainer = document.getElementById('foodlist2')
const searchdatafood2 = document.getElementById('caleated')
const searchdatafood3 = document.getElementById('calneeded')
const searchdatafood = document.getElementById('namecheck')
savefoodbtn.addEventListener('click', (event) => {
  console.log(searchdatafood.textContent , searchdatafood2.textContent, searchdatafood3.textContent )
  console.log(`save food list`);
})


// IMC + CAL / DAY
function calsPerDay() {
  function find(id) { return document.getElementById(id) }

  var age = find("age").value
  var height = find("height").value 
  var weight = find("weight").value 
  var result = 0
  if(!isNaN(parseInt(height)) && height>120 && height<250)
  {
  if(!isNaN(parseInt(weight)) && weight>20 && weight<500)
  {
  imc = (weight * 10000) / (height*height);
  imc = Math.round(imc);
  if (imc < 18.5) {
    res_imc.style.color = "blue"}
  if (imc > 18.5 && imc < 24.9) {
    res_imc.style.color = "green"}
  if (imc > 25) {
      res_imc.style.color = "yellow"}
  if (imc > 30) {
        res_imc.style.color = "orange"}
  if (imc > 34.9) {
        res_imc.style.color = "red"}
  indicateur = imc-17;
  document.getElementById("res_imc").innerText = imc;
  }}

  if (find("male").checked) 
    result = 66.47 + (13.75 * weight) + (5.0 * height - (6.75 * age))
  else if (find("female").checked)
    result = 665.09 + (9.56 * weight) + (1.84 * height - (4.67 * age))
  find("totalCals").innerHTML = "BMI : " + Math.round( result ) + "kcal per day"
}
calsPerDay()


// scroll to top mtfk
var mybutton = document.getElementById("totheroof");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function totheroof() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// shopping style price evo 
// $(document).ready(function() {
//  var fadeTime = 300;

//   /* Assign actions */
//   $('.pass-quantity input').change(function() {
//     updateQuantity(this);
//   });

//   /* Recalculate cart */
//   function recalculateCart() {
//   /* Sum up row totals */
//     $('.item').each(function() {
//       subtotal += parseFloat($(this).children('.product-line-price').text());
//     });
//   }

//   /* Update quantity */
//   function updateQuantity(quantityInput) {
//     /* Calculate line price */
//     var productRow = $(quantityInput).parent().parent();
//     var price = parseFloat(productRow.children('.product-price').text());
//     var quantity = $(quantityInput).val();
//     var linePrice = price * quantity;

//     /* Update line price display and recalc cart totals */
//     productRow.children('.product-line-price').each(function() {
//       $(this).fadeOut(fadeTime, function() {
//         $(this).text(linePrice.toFixed(2));
//         recalculateCart();
//         $(this).fadeIn(fadeTime);
//       });
//     });
//   }
// });