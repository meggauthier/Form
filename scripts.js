

$(document).ready(function() {
	
		$('button#btn-student').on('click', function() {		
				var student = new Array("Steve" , "Ryan" , "Meg");
				
					for (var n = 0; n <=student.length; n+=1) {
						
						$("#dropDown").append('<option value=' + student[n] + '>' +  student[n] + '<option>');	
					}<!--closes loop-->
				
				
				
		});  //this closes student alert
		
		
		
		
			$('button#btn-tennis-players').on('click', function() {
				var player = new Array("Italian guy" , "French guy" , "Sweaty guy");
				
					for (var x = 0; x<=player.length; x+=1) {
						
						$("dropDown").append('<option value=' + player[x] + '>' + player[x] + '<option>');
				
					};
			
		});   //this closes tennis alert
		
		
		
		
		
		
	
			
		
			
	
	
});
