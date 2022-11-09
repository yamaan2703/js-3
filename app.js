// Array
var a = ["Atlanta", "Baltimore", "Chicago", "Denver", "Los Angeles", "Seattle"];
console.log(a)

// adding the value in array with the help of push 
var b = ["tiger", "lion", "snake"]
b.push("fish", "lizard")
console.log(b)

// subtract the value in array with the help of pop
var c = ["tiger", "lion", "snake", "fish", "lizard"]
c.pop()
console.log(c)

// shift subtract subtract the value in start from array
var d = ["tiger", "lion", "snake", "fish", "lizard"]
d.shift()
console.log(d)

// unshift subtract subtract the value in start from array
var e = ["tiger", "lion", "snake", "fish", "lizard"]
e.unshift("dog")
console.log(e)

// slice copy the value from array
var f = ["tiger", "lion", "snake", "fish", "lizard"]
var g = f.slice(1, 2)
console.log(f)


// splice cut the value from array
var f = ["tiger", "lion", "snake", "fish", "lizard"]
var g = f.splice(2 , 3)
console.log(f)


