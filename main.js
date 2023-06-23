// function twoRows(a,b) {
//     if(a.length>b.length)
//     return consolelog(1);
//     if(a.length<b.length)
//     return console.log(-1);
//     if (a.length===b.length)
//     return console.log(0);
// }
// twoRows(prompt("Enter first row"),prompt("Enter second row"));



// function toUpCase(a) {
//     if(a[0]===a[0].toLowerCase()){
//     let b="";
//     b=a[0].toUpperCase();
//     // a=b+a.slice(1);
//     a=a.replace(a[0],b);
//     console.log(a);
//     }
//     else
//     console.log(a)
// }
// toUpCase(prompt("Enter row"));



// function vowels(a) {
//     let b=0;
//     Array.from(a).forEach(element => {
//         if(element==="a" || element==="e" || element==="i" || element==="o" || element==="u" || element==="y"){
//             b++;
//         }
//     });
//     console.log(b+" vowels");
// }
// vowels(prompt("Enter text").toLowerCase());

// function vowels2(a) {
//     var arr =["a", "e", "i", "o", "u", "y"];
//     count =0;
//     Array.from(a).forEach(element =>{
//         if(arr.includes(element)){
//             count++;
//         }
//     });
//     console.log(count+" vowels");
// }
// vowels2(prompt("Enter text").toLowerCase());





// function spam(a) {
//     let arr = ["100%бесплатно", "увеличениепродаж", "толькосегодня", "неудалять", "ххх"];
//     a = a.toLowerCase().replace(/\s|[,.!?"/-]/g, "");
//     for (let i = 0; i < arr.length; i++) {
//         if (a.includes(arr[i])) {
//             console.log(arr[i] + " спам");
//             console.log(a);
//         } 
//     }
// }
// spam(prompt("Введите текст"));




// function endRow(a){
//     a.length=15;
//     let b="";
//     if(a.length>15){
//        b=a.substring(0,15)
//         console.log(b+".....");
//     }
// }
// endRow(prompt("Enter text"));





// function spam(a) {
//     a = a.toLowerCase().replace(/\s|[,.!?"/-]/g, "");
//     if(a === a.split().reverse().join()){
//         console.log("Палиндром");
//     }else
//     console.log("Не есть палиндром");
    
// }
// spam(prompt("Введите текст"));




// function countLength(a) {
//     let i=0;
//     a=a.replace(/[,.!?"/-]/g,"");
//     console.log(a);
//     b=a.split(" ");
//     b.forEach(element => {
//         if(element !=="")
//         console.log(element+i++);
//     });
//     console.log ("Количество слов: "+i);
// }
// countLength(prompt("Enter text"));




// function countWord(a) {
//     a=a.replace(/[,.!?"/-]/g,"");
//     console.log(a);
//     b=a.split(" ");
//     let word =0;
//     b.forEach(element => {
//         if(element.length > word){
//             word=element.length;
//         console.log(word);
//         }
//     });
//     console.log ("Самое длинное слово: "+word);
// }
// countWord(prompt("Enter text"));




// function wordLength(a) {
//         a=a.replace(/[,.!?"/-]/g,"");
//         console.log(a);
//         b=a.split(" ");
//         let word =0;
//         let i=0;
//         b.forEach(element => {
//             i++;
//             word+=element.length;
//         });
//         console.log ("Средняя длинна слова: "+word/i);
//     }
//     wordLength(prompt("Enter text"));
    




// function symbol(a) {
//     console.log(a);
//     let arr =[",",".","!","?","\"","/","-"];
//     let i=0;
//     let j={};
//     Array.from(a).forEach(element => {
//         if(arr.includes(element)){
//         console.log("Символ: "+element+" Индекс: "+i);
//         i++;
//         j[element]++;
//         } else {
//             j[element] = 1;
//         }
//     });
//     Object.keys(j).forEach(symbol => {
//         console.log("Символ: " + symbol + ", Количество: " + j[symbol]);
//     });
// }
// symbol(prompt("Enter text"));





function symbol(a) {
    console.log(a);
    let arr = [",", ".", "!", "?", "\"", "/", "-"];
    let i = 0;
    let j = {};
    Array.from(a).forEach(element => {
        if (arr.includes(element)) {
            console.log("Символ: " + element + " Индекс: " + i);
            if (j[element]) {
                j[element]++;
            } else {
                j[element] = 1;
            }
        }
        i++;
    });
    Object.keys(j).forEach(symbol => {
        console.log("Символ: " + symbol + ", Количество: " + j[symbol]);
        console.log(j);
    });
}

symbol(prompt("Введите текст"));
