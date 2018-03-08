(function(){
	var selectedColor;
	var pressed = false;
	// When size is submitted by the user, call makeGrid()
	$(function(){
		$("form#sizePicker").submit(makeGrid);
		getSelectedColor();
		$('#colorPicker').on('change', getSelectedColor);
		$('#pixelCanvas').on('mousedown','td',function(){
			pressed = true;
		});
		$('body').on('mouseup',function(){
			pressed = false;
		});
		$('#pixelCanvas').on('mouseenter','td', draw);

		// Register click event for canvas close button
		$('span#closeCanvas').click(function(){
			var canvasBox = $('div.canvasBox');
			if(canvasBox.hasClass('visible')) canvasBox.removeClass('visible');
		});
	});

	// This function used to draw color on the grid squares
	function draw(event){
		if(pressed === true) {
			$(event.target).css('background-color', selectedColor);
		}
	}

	// This function is used to get the selected color from the color input
	function getSelectedColor(){
		selectedColor = $('#colorPicker').val();
	}
	// This function creates the grid when user submits the sizePicker form
	function makeGrid(event) {
		event.preventDefault(); // Prevent default behaviour of the submit button which refreshes page
		var canvasBox = $('div.canvasBox');
		if(!canvasBox.hasClass('visible')) canvasBox.addClass('visible'); // Make canvas visible if not already visible
		var canvas = $('<tbody></tbody>'); // create tbody element
		var grid = $('#pixelCanvas'); // Get the grid
		$(grid).html(''); // Clear existing grid
		$(grid).append(canvas); // Add canvas to the grid
		var gridWidth = $("#inputWeight").val();  // Get grid width
		var gridHeight = $("#inputHeight").val(); // Get grid height

		// Draw grid
		for(var i=0; i<gridHeight; i++){
			var row = $("<tr></tr>"); // create row element
			for(var j=0; j<gridWidth; j++){
				$(row).append($('<td></td>')); // insert columns in row element
			}
			$(canvas).append(row); // insert row to the canvas
		}
	}	
})();
