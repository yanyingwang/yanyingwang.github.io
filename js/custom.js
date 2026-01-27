$('a').filter(function() {
    return this.host !== location.host
}).attr('target','_blank');


// $(document).on("click", "a", function(){
//     if (this.host !== location.host) {
//         this.target = "_blank";
//     }
// });

// $(document).ready(function(){
//     debugger;
//     $("a").trigger("click");
// });




