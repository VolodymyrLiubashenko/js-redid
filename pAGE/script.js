function showMessage(){
	alert ("Вы щелкнули по div-у");
}

function RectangelArea(obj){
	var a=obj.t1.value;
	var b=obj.t2.value;
	var c=a*b;
	obj.res.value=c;
}

function message(m){
	alert(m);
}

function showDesc(obj,n){
	obj.desc.value=n;
}

function delet(obj){
	obj.desc.value=' ';
}

function areaOfTriangle (obj){
	var a=1*obj.st1.value;
	var b=1*obj.st2.value;
	var c=1*obj.st3.value;
	var p=(a+b+c)/2;
	var s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
	s=s.toFixed(2);
	obj.res.value=s;
}

function degree(obj){
	var a=1*obj.cor1.value;
	var b=1*obj.cor2.value;
	var c=1*obj.cor3.value;
	var d=1*obj.cor4.value;
	var f=Math.tan(a+b);
	f=f.toFixed(2);
	obj.result.value=f;
}

function maxZnach(obj){
  var a=1*obj.zn1.value;
  var b=1*obj.zn2.value;
  var c=1*obj.zn3.value;
  var m=a;
  if (b>m) m=b;
  if (c>m) m=c;
  obj.res.value=m;
}


function mult() {
	var w=document.vova.width;
	if (w<300) {
		document.vova.width=w+10;
		document.vova.src="./images/vova.jpg"
		setTimeout("mult()",10)
	}
}

function back(){
	var w=document.vova.width;
	if (w>150) {
	document.vova.width=w-10;
	document.vova.src="./images/vova.jpg"
	setTimeout("back()",10)
	}
}

function Vday(obj){
  if (obj.elements[0][0].selected)
   obj.res.value="В понедельник будет ветрено, температура воздуха поднимется до +20 градусов";
  if (obj.elements[0][1].selected)
   obj.res.value="Во вторник будет солнечно, температура воздуха поднимется до +25 градусов";
  if (obj.elements[0][2].selected)
   obj.res.value="В среду будет прохладно, температура воздуха опустится до +17 градусов";
  if (obj.elements[0][3].selected)
   obj.res.value="В четверг будет пасмурно, температура воздуха опустится до +10 градусов";
  if (obj.elements[0][4].selected)
   obj.res.value="В пятницу будет облачно, температура воздуха поднимется до +15 градусов";
  if (obj.elements[0][5].selected)
   obj.res.value="В субботу будет ветрено, температура воздуха поднимется до +27 градусов";
  if (obj.elements[0][6].selected)
   obj.res.value="В воскресенье будет ясно, температура воздуха поднимется до +30 градусов";
}

function month(obj) {
	var a=obj.numb.value;
	var b;
	switch (a) {
		case '1': b="january";
		break;
		case '2': b="February";
		break;
		case '3': b="March";
		break;
		case '4': b="April";
		break;
		case '5': b="May";
		break;
		case '6': b="June";
		break;
		case '7': b="July";
		break;
		case '8': b="August";
		break;
		case '9': b="September";
		break;
		case '10': b="October";
		break;
		case '11': b="November";
		break;
		case '12': b="December";
		break;
		default: b="Choose month"
		 
		
	}
	obj.result.value=b;
}

function summa(obj) {
     var summa=0;
     var a1=1*obj.a1.value;
     var a2=1*obj.a2.value;
     for (var i = a1; i <= a2; i++) {
      summa+=i;
     }
     obj.result.value = summa;
    }


function privet(obj) {
	var a=1*obj.a1.value;
	var b=1*obj.a2.value;
	var c;
	var massive=new Array(1,4,7,2,8,6);
	
		c=Math.max(1,4,7,2,8,6);
	
		
	
	
	obj.result.value=c;
}