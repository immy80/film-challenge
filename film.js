let film =["goodfellas", "braveheart", "speed","ghostbusters"]

for(let i=0; i<film.length; i++){
    console.log(film[i])
}

const filmCheck = () => {
    if (film[3] == "ghostbusters") {
    console.log("yey it's ghostbusters")
    } 
    else {
    console.log("boo, we want ghostbusters")
    }
}
filmCheck()
