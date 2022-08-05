function add(a,b){
    return a+b
}
const memoize=(fn)=>{
    let cache = {};
    return (a,b)=>{
        if (a,b in cache){
            console.log('cache');
            return cache[a,b]
        }
        else {
            let result = fn(a,b);
            cache[a,b] = result;
            return result
        }
    }
}
const memoizeAdd = memoize(add)
console.log(memoizeAdd(2,5))