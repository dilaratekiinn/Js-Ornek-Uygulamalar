let sayilar = [1,5,7,15,3,25]

// 1- Sayılar listesinde ki her bir elemanın karesini yazdırınız.
 
  //for (let sayi of sayilar){
     //    console.log(sayi*sayi);
 // }


// 2- Sayılar listesindeki hangi sayılar 5'in katıdır?

// for (let i=0; i<sayilar.length; i++);
// {
//     if (sayilar[i]% 5 == 0){
//         console.log(sayilar[i]);
//     }
// }



// 3- Sayılar listesindeki çift sayıların toplamını bulunuz.

// let toplam =0;
//  for (let i in sayilar){
//      if (sayilar[i]%2==0){
//          toplam += sayilar[i];
//      }
//  }
// console.log(toplam);


let urunler = ["iphone 12", "samsung s22","iphone 13", "samsung s23"];


// 4- Urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

// for (let urun of urunler){
//     console.log(urun.toUpperCase());

// }


// 5- Urunler listesinde samsung geçen kaç ürün vardır?

// let adet =0;

// for (let urun of urunler){
//     if ( urun.includes("samsung")){
//         adet++;

//     }
// }

// console.log(adet);



let ogrenciler = [
    {"ad":"dilara","soyad": "tekin", "notlar": [60,70,60]},
    {"ad":"sibel","soyad": "tekin", "notlar": [80,70,80]},
    {"ad":"alin","soyad": "sorgun", "notlar": [70,70,60]},
];

// ogrenciler listesindeki her öğrencinin  not ortalaması ve başarı durumlarını yazdırınız.
  
for (let ogrenci of ogrenciler){
    let not_toplam =0;
    let ortalama = 0;
    let adet=0;
   for (let not of ogrenci.notlar) {

    not_toplam += not;
    adet++;

   }
   ortalama=not_toplam / adet;

   if (ortalama >=50){
       console.log(`${ogrenci.ad} ${ogrenci.soyad} isimli öğrencinin not ortalaması : ${ortalama}ve `);

     if (ortalama>=50){
         console.log("başarılı");
     } else {
         console.log("başarısız");
     }


    }
}




