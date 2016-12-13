$(document).ready(
 function(){
     var a= $(".pan_card_details").height();
     $(".pan_card_upload").height(a);   
 }
);

var datebox=document.getElementsByClassName("incorp_date");
datebox.onfocus=function event(){
    this.type='date';
    this.focus();
};

var formApp=angular.module('formApp',[]);
formApp.controller('formController',function($scope){
    
});


upload_pan= function() {
        fileInput = document.getElementById('fileInput');
        fileInput.addEventListener('change', function(e) {
			 file = fileInput.files[0];
			 textType = /text.*/;
			if (file.type.match(textType)) {
				    reader = new FileReader();
				    reader.onload = function(e) {
                    window.output=reader.result.split(',');        
                    console.log(output); 
                    $( "input[name*='pan_number']" ).val(output[0]);
                    $( "input[name*='company_name']" ).val(output[1]);
                    $( "input[name*='incorp_date']" ).val(output[2]);    
                    $( "input[name*='pan_number']" ).val(output[0]);    
                    }
				reader.readAsText(file);	
			} 
            else {
				fileDisplayArea.innerText = "File not supported!";
			}
        });
};


