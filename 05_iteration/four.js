
// object 

const myobject = {
    js : "Javascript",
    py : "Python",
    cpp: "C++",
    rb: "Ruby"
}
for(const key in myobject){
    // console.log(`${key} shortcut for ${myobject[key]}`)
}


//  Loop apply in array --> for in 

const programming = ["python" , "javascript" , "react", "cpp"]

for(const key in programming){
    // console.log(programming[key])

}

// map 

const map = new Map()
map.set("Up" , "Uttar pradesh")
map.set("mp" , "madhay pradesh")
map.set("tg" , "telengana")
map.set("mh" , "maharastra")

for(const key in map){
    console.log(key)
    
}