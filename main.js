
var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("Se presiona p y shift al mismo tiempo");
	block_image_width = block_image_width + 10;
	block_image_height = block_image_height + 10;
	document.getElementById("current_width").innerHTML = block_image_width;
	document.getElementById("current_height").innerHTML = block_image_height;	
}
if(e.shiftKey && keyPressed == '77')
{
	
}

	if(keyPressed == '38')
	{
		//arriba up
		
	}
	if(keyPressed == '40')
	{
		//abajo down
		
	}
	if(keyPressed == '37')
	{
		//izquierda
		
	}
	if(keyPressed == '39')
	{
		//derecha
		
	}
	if(keyPressed == '87')
	{
		//imagen wall
		
	}
	if(keyPressed == '71')
	{
		//imagen ground
	}
	if(keyPressed == '76')
	{
		//imagen light_green.png
		
	}
	if(keyPressed == '84')
	{
		//imagen trunk.jpg
	}
	if(keyPressed == '82')
	{
		//imagen roof.jpg 
		
	}
	if(keyPressed == '89')
	{
		//imagen yellow_wall
		
	}
	if(keyPressed == '68')
	{
	//imagen dark_green.png 
		
	}
	if(keyPressed == '85')
	{
		//imagen unique
		
	}
	if(keyPressed == '67')
	{
		//imagen cloud
	}
	
}
function up()
{
	if(player_y >=0)
	{
	
	}
}

function down()
{
	if(player_y <=500)
	{
		
	}
}

function left()
{
	if(player_x >0)
	{
		
	}
}

function right()
{
	if(player_x <=850)
	{
		
	}
}
