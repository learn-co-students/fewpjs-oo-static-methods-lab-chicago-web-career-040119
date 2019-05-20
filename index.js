class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(string) {
    let newTitle = '';
    let wordArr = string.split(' ');
    newTitle += this.capitalize(wordArr[0])

    for (let i = 1; i < wordArr.length; i++) {
      let noCapWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
      let word = wordArr[i].toLowerCase()
      if (noCapWords.includes(word)) {
         newTitle +=  ' ' +  word;
      } else {
         newTitle += ' ' + this.titleize(word)
      }
    }
    return newTitle;
  }
}

// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case  6:
//     day = "Saturday";
// }
