
// 1-"Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.

let meyveler = ["Elma","Muz","Armut","Çilek"];


// 2-Dizi kaç elemanlıdır?


console.log(meyveler.length);


//3- Dizinin ilk ve son elemanı nedir?

console.log(meyveler[0]); // elma
console.log(meyveler[meyveler.length -1]); //çilek

// 4-Elma dizinin bir elemanı mıdır?


 console.log(meyveler.includes("Elma"));


//5- Kiraz meyvesini listenin sonuna ekleyiniz.

meyveler[meyveler.length ] = "Kiraz";
meyveler.push("Kiraz");
console.log(meyveler);
// 6-Dizinin son 2 elemanını siliniz.

//meyveler.pop();
//meyveler.pop();


meyveler.splice[meyveler.length -2,2];

console.log(meyveler);


//7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalmasını hesaplayınız.

/*
     Öğrenci 1: Dilara Tekin 2012 (70,60,80)
     Öğrenci 2: Sibel Türk 2009 (80,80,90)
     Öğrenci 3: Alin Sorgun 2010 (60,60,70)



*/


let ogr1= [
     "Dilara",
     "Tekin", 
      2012,
      [70,60,80]


];


let ogr2= [
     "Sibel",
     "Türk", 
      2009,
      [80,80,90]


];

let ogr3= [
     "Alin",
     "Sorgun", 
      2010,
      [60,60,70]


];

let ogrenciler = [ogr1,ogr2,ogr3];

let dilara_yas = new Date().getFullYear = ogrenciler[0][2];
let sibel_yas = new Date().getFullYear = ogrenciler[1][2];
let alin_yas = new Date().getFullYear = ogrenciler[2][2];
 console.log(dilara_yas,sibel_yas,alin_yas);


 let dilara_not = ogrenciler[0][3][0] + ogrenciler [0] [3] [1] + ogrenciler [0] [3] [2] /3;
 let sibel_not = ogrenciler[1][3][0] + ogrenciler [1] [3] [1] + ogrenciler [1] [3] [2] /3;
 let alin_not = ogrenciler[2][3][0] + ogrenciler [2] [3] [1] + ogrenciler [2] [3] [2] /3;

 console.log(dilara_not.toFixed(1),sibel_not.toFixed(1),alin_not.toFixed(1));