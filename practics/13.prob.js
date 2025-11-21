// cheack word is palindrome or not 

let word = "madam";
let reversed = word.split("").reverse().join("");
if(word === reversed){
    console.log("palindrome")

}else {
    console.log("not a palindrome")
    
}