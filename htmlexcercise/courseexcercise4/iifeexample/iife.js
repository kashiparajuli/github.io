(function(){
    var counter=0;
   function incr(n){
       counter+=n;
   }
   function reset(){
       counter=0;
   }
   incr(4);
   incr(2);
   console.log("counter is"+counter);
})();