// // setTimeout(bottomConoceme,4000);
const conoceme = document.getElementById('button-conoceme')

console.log(11, conoceme)
const bottomConoceme = () => {
    console.log(2222)
    conoceme.style.display = 'block';
}

setTimeout(bottomConoceme, 4000);

//  setTimeout(function(){ conoceme.style.color = 'while'; }, 3000);

// var $lines = $('.prompt p');
// $lines.hide();
// var lineContents = new Array();

// var terminal = function() {

//   var skip = 0;
//   typeLine = function(idx) {
//     idx == null && (idx = 0);
//     var element = $lines.eq(idx);
//     var content = lineContents[idx];
//     if(typeof content == "undefined") {
//       $('.skip').hide();
//       return;
//     }
//     var charIdx = 0;

//     var typeChar = function() {
//       var rand = Math.round(Math.random() * 150) + 25;

//       setTimeout(function() {
//         var char = content[charIdx++];
//         element.append(char);
//         if(typeof char !== "undefined")
//           typeChar();
//         else {
//           element.append('<br/><span class="output">' + element.text().slice(9, -1) + '</span>');
//           element.removeClass('active');
//           typeLine(++idx);
//         }
//       }, skip ? 0 : rand);
//     }
//     content = '' + content + '';
//     element.append(' ').addClass('active');
//     typeChar();
//   }

//   $lines.each(function(i) {
//     lineContents[i] = $(this).text();
//     $(this).text('').show();
//   });

//   typeLine();
// }

// terminal();