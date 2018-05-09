function anagram(str){
    var result = []

    if(!str)
        return []
    if(str.length ===1)
        return [str]
    if(str.length ===2)
        return [str[0]+str[1],str[1]+str[0]]

    return  result;

}
module.exports = anagram