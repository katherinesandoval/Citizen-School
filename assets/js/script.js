$(function(){
	
	// Configure the Spectragram plugin. Follow the instructions
	// in the tutorial on how to generate an access token
	jQuery.fn.spectragram.accessData = {
		accessToken: '222345260.7f991cf.28b596ae017b4787917f028861c41ad5',
		clientID: '7f991cf974164b59a34ca00d8ff9f715'
	};
	
	// Run a search about 'coffee' on instagram 
	// and display the results
	$('#gallery').spectragram('getUserFeed',{
		
		query: 'kate_sandoval27',
		
        
          full_name: 'kate_sandoval27',
		
		max:9
	});
	
	$('#gravityButton').click(function(e){
		e.preventDefault();
		
		// Turn on the gravity!
		$('body').jGravity({
			target: '#gallery li',
			ignoreClass: 'ignoreMe',
		
	weight: 25,
			depth: 5,
			drag: true
		});
		
		// Disabling clicking on the photos (so they can
		// be dragged without redirecting the browser)
		$('#gallery li').click(function(e){
			e.preventDefault()
		});
	
	
		// Remove some of the elements as they get in the way
		$('footer, #gravityButton').remove();
	});
	
});
