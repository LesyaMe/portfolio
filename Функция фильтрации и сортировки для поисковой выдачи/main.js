let goods = [
    {
      name: 'Патч-корд литой',
	  itemsAvailable: 230,
	  price: 2199,
	  saleStartDate: '2019-07-19',
	  images: ['/static/images/products/no-picture.png']
    },

    {
	  name: 'Патч-корд литой "Aopen" 20м',
	  itemsAvailable: 150,
	  price: 132,
	  saleStartDate: '2019-01-18',
	  images: ['/static/images/products/no-picture.png']
	},

	{
	  name: 'Патч-корд литой "Telecom" 20м',
	  itemsAvailable: 156,
	  price: 2015.99,
	  saleStartDate: '2019-08-30',
	  images: ['/static/images/products/no-picture.png']
	},

	{
	  name: 'Кабель USB 2.0 Gembird',
	  itemsAvailable: 2,
	  price: 568.3,
	  saleStartDate: '2019-09-20',
	  images: ['/static/images/products/no-picture.png']
	},
	{
	  name: 'Кабель USB 2.0 Gembird',
	  itemsAvailable: 2,
	  price: 568.3,
	  saleStartDate: '2019-09-15',
	  images: ['/static/images/products/no-picture.png']
	}
]

  
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let stayNull = "0";
  let today;
 //приведение дат к одинаковому виду
  if (month < 9) {
    today = `${year}-${stayNull}${month+1}-${day}`;	
  } else {
  	today = `${year}-${month+1}-${day}`;
  }
  	
//объявление необходимого количество подмассивов
  let arr = [];
  let arr1 = [];
  let arr2 = [];
  let arr3 = [];
  let arr4 = [];


 // функция отображения необходимого количетсва элементров на странице
 // в соответствии с заявленными условиями
function showGoods(array, count, place) {

  for (let i = 0; i < array.length; i++) {
  	if ((array[i].name != 0) && (array[i].itemsAvailable != 0) && (array[i].price != 0 ) && (array[i].saleStartDate < today)) {
  		  arr.push(array[i]);

  		  arr1 = arr.slice(0, count);
  		  arr2 = arr.slice(count, count*2);
  		  arr3 = arr.slice(count*2, count*4);
  		  arr4 = arr.slice(count*4, count*8);
    }
  }

  console.log(arr2);

  //вывод на страницу списка подходящих элементов, разбито по подмассивам
  let out = "";
  for (let key in arr1) {
	out += "Название: "+ arr1[key].name + "<br>";
	out += "Остаток на складе: "+ arr1[key].itemsAvailable+ "<br>";
	out += "Цена: "+ arr1[key].price + "<br>";
	out += "Старт продаж: "+ arr1[key].saleStartDate + "<br>";
	out += arr1[key].images + "<br>";
  }

  document.getElementById("array1").innerHTML = out;


  let out2 = ""
  for (let j in arr2) {
	out2 += "Название: "+ arr2[j].name + "<br>";
	out2 += "Остаток на складе: "+ arr2[j].itemsAvailable+ "<br>";
	out2 += "Цена: "+ arr2[j].price + "<br>";
	out2 += "Старт продаж: "+ arr2[j].saleStartDate + "<br>";
	out2 += arr2[j].images + "<br>";
  }

  document.getElementById("array2").innerHTML = out2;


  let out3 = ""
  for (let n in arr3) {
	out3 += "Название: "+ arr3[n].name + "<br>";
	out3 += "Остаток на складе: "+ arr3[n].itemsAvailable+ "<br>";
	out3 += "Цена: "+ arr3[n].price + "<br>";
	out3 += "Старт продаж: "+ arr3[n].saleStartDate + "<br>" + "<br>";
	out3 += arr3[n].images + "<br>";
  }

  document.getElementById("array3").innerHTML = out3;


  let out4 = ""
  for (let m in arr4) {
	out4 += "Название: "+ arr4[m].name + "<br>";
	out4 += "Остаток на складе: "+ arr4[m].itemsAvailable+ "<br>";
	out4 += "Цена: "+ arr4[m].price + "<br>";
	out4 += "Старт продаж: "+ arr4[m].saleStartDate + "<br>" + "<br>";
	out4 += arr4[m].images + "<br>";
  }

  document.getElementById("array4").innerHTML = out4;

  console.log(arr4)
   
}

showGoods(goods, 2, 1);