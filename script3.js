
function clo() {
    var a = 10
    function y(){
      console.log(a)
    }
    y()
   }
clo()

let f = () => {
    let i = 1
    return () => {
        console.log(i)
    }
}
console.dir(f())
