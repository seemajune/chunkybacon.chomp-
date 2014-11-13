'use-strict';
$(document).ready(function(){
  testSelector();
});


function testSelector() {
 return $( "#test_stuff" ).animate({ "right": "-=600px" }, "slow" );
};

