function checkCreditHistory(h_array){
    var result;
    if(h_array.length == 0){ // был оператор присваивания, а не сравнения
    result = result + "Данных по массиву не получено. ";
    
        } else{
            for (nbki_i=0; (let nbki_i<h_array.length); nbki_i++) { //не была объявлена nbki_i
                var USD_course = getUSD_course();//метод который возвращает необходимое значение курса **доллара** на сегодня
                
                var EUR_course = getEUR_course();//метод, который возвращает необходимое значение курса **евро** на сегодня
                
                var const_1 = 1;
                var const_2 = 1;
                var const_3 = 0;
                var const_4 = 0.5; // запятая исправлена на точку
                var USD_course_2 = (33*const_1/const_2)-const_3; //предположительно средний курс
                var EUR_course_2 = (46+const_4) /const_2;  //предположительно средний курс
                

                if((h_array[nbki_i].creditType == "24")){ 
                
                //Определение валюты для данного вида кредита:
                    var valuta = 1;//RUB  
                    var gift = 1500;
                    
                    if(!h_array[nbki_i].curr) valuta = 1; 
                    else if(h_array[nbki_i].curr == "USD"){ //!!==если нужен курс на сегодня
                        valuta = USD_course;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta+gift; // !!== если свойство sum объявлено в объекте, отсутсвие var или let не является ошибкой
                    } else if(h_array[nbki_i].curr == "USD_average_rate"){ // !!== если средний курс на дату. Т.к. объявлены переменные со средними курсами считаем, что необходимо ввести проверку на текущий и средний курс валюты*/  ==!!
                        valuta = USD_course_2;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta+gift;
                    } else if (h_array[nbki_i].curr == "EUR") { /* объявлен курс евро, считаем, что на него проверку тоже необходимо провести*/
                        valuta = EUR_course;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta+gift;
                    }  else if (h_array[nbki_i].curr == "EUR_average_rate") { 
                        valuta = EUR_course_2;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta+gift;// расчет свойства отнесен к кажому условию
                    }
                }



                if((h_array[nbki_i].creditType == "05")){  
                	//Определение валюты для данного вида кредита:
                    var valuta = 1;//RUB
                    var gift = 5000;

                    if(!h_array[nbki_i].curr) valuta = 1;
                    else if(h_array[nbki_i].curr == "USD"){ //!!==если нужен курс на сегодня
                        valuta = USD_course;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta+gift; // !!== если свойство sum объявлено  объекте, отсутсвие var или let не является ошибкой
                    } else if(h_array[nbki_i].curr == "USD_average_rate"){ // !!== если средний курс на дату. Т.к. объявлены переменные со средними курсами считаем, что необходимо ввести проверку на текущий и средний курс валюты*/  ==!!
                        valuta = USD_course_2;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta+gift;
                    } else if (h_array[nbki_i].curr == "EUR") { /* объявлен курс евро, считаем, что на него проверку тоже необходимо провести*/
                        valuta = EUR_course;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta+gift;
                    }  else if (h_array[nbki_i].curr == "EUR_average_rate") { 
                        valuta = EUR_course_2;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta+gift;
                    }
                    
                } else{ 
                //Определение валюты для данного вида кредита:
                    var valuta = 1;//RUB
                    if(!h_array[nbki_i].summ) valuta = 1;
                      else if(h_array[nbki_i].curr == "USD"){ //!!==если нужен курс на сегодня
                        valuta = USD_course;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta; // !!== если свойство sum объявлено  объекте, отсутсвие var или let не является ошибкой
                    } else if(h_array[nbki_i].curr == "USD_average_rate"){ // !!== если средний курс на дату. Т.к. объявлены переменные со средними курсами считаем, что необходимо ввести проверку на текущий и средний курс валюты*/  ==!!
                        valuta = USD_course_2;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta;
                    } else if (h_array[nbki_i].curr == "EUR") { /* объявлен курс евро, считаем, что на него проверку тоже необходимо провести*/
                        valuta = EUR_course;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta;
                    }  else if (h_array[nbki_i].curr == "EUR_average_rate") { 
                        valuta = EUR_course_2;
                        h_array[nbki_i].summ = h_array[nbki_i].summ*valuta;
                    }
                }
            }
        }        
    }    