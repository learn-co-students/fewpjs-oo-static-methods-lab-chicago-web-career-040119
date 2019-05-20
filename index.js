//static methods are called on class not on instances
class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice( 1 )
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(sentence) {
    let noCapitalize = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by']
    if(!sentence.split)
      return sentence;
      
    var capitalizeFirst = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
    result = [];
    sentence.split(" ").forEach(function(word) {
        for (let i = 0; i < noCapitalize.length; i++)
          if (word !== noCapitalize[i])
            result.push(word);
          else
            result.push(capitalizeFirst(word));
    });
    return result.join(" ");
  }
}
