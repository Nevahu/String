
let ad = "Nevahu Ebrar";
let soyad = "Arslan";
let yas = 21;
let sehir = "Trabzon";

 // String cümle yazmanın birkaç şekli var 
let mesaj1 = "Benim adim " + ad + ", soyadim " + soyad + ". " + sehir + "'da yaşiyorum. Emekliliğe " + (65- yas) + " yilim kaldi.";
//Bu şekilde araya +'lar koyarak yazabiliriz ya da bactick(altgr,) kullanarak yapabiliriz

let mesaj2 = `Benim adim ${ad}, soyadim ${soyad}. ${sehir}'da yaşiyorum. Emekliliğime ${65- yas} yilim kaldi.`;

console.log(mesaj1);
console.log(mesaj2);

let emeklilik = (65- yas > 0) ? "Emekliliğe " + (65-yas) + "yilim kaldi."  : "Tebrikler emekli oldunuz.";

let mesaj = `Benim adım ${ad} ${soyad}. ${sehir}'da yaşiyorum. ${emeklilik}.`;

console.log(mesaj);

