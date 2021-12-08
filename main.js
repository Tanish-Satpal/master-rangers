var canvas=new fabric.Canvas('myCanvas')
// Create canvas variable
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image,block_x,block_y){
    fabric.Image.fromURL(get_image, function(Img){
	block_image_object = Img;

    block_image_object.scaleToWidth(150);
    block_image_object.scaleToHeight(140);
    block_image_object.set({
        top:block_y,
        left:block_x
    });
    canvas.add(block_image_object);
    });
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		new_image('rr1.png',50,50);
	}
	if(keyPressed == '71')
	{
		// upload green ranger
		new_image('gr.png',150,50);
	}
	
	if(keyPressed == '89')
	{
		new_image('yr.png',250,50);
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		new_image('pr.png',350,50);
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		new_image('br.png',450,50);
	// upload blue ranger
	}
}