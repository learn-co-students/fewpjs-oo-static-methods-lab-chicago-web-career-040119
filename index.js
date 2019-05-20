class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^-' A-Za-z0-9]+/g, '');
  }

  static titleize(string) {
    let titleizedArr = [];
    let noNoWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let arr = string.split(" ")
    let lowCaseArr = arr.map(word => word.toLowerCase())
    lowCaseArr.map(word => {
      if (!noNoWords.includes(word)) {
        word = word[0].toUpperCase() + word.slice(1)
        titleizedArr.push(word);
      } else {
        titleizedArr.push(word);
      }
    });
    let joinedSentence =  titleizedArr.join(" ");
    return joinedSentence[0].toUpperCase() + joinedSentence.slice(1)
  }
}
