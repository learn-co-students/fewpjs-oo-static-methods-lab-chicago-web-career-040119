class Formatter {
  //add static methods here
 static capitalize(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
 }

 static sanitize(string) {
   return string.replace( /[^A-Za-z0-9 '-]/g, '' )
 }

 static titleize(sentance) {
   let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
   let result = [];
   let sentanceArr = sentance.split(" ");
   for (let i= 0; i< sentanceArr.length; i++) {
     // if first word
     if (i == 0 ) {
       result.push( this.capitalize(sentanceArr[i]))
     } else {
       //  if
       if (exceptions.includes(sentanceArr[i])) {
         result.push(sentanceArr[i])
       } else {
         result.push( this.capitalize(sentanceArr[i]))
       }
     }
   }
   return result.join(" ")
 }
}
