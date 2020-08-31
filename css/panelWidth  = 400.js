panelWidth  = 400  
panelHeight = 190
btnWidth 	= 180
btnHeight 	= 25

root = BaseWidget({})

root.Panel = WidgetPanel({
	x	   = (ScreenWidth - panelWidth) / 2
	y	   = (ScreenHeight - panelHeight) / 2
	width  = panelWidth
	height = panelHeight
  })

root.Panel.TxtMessage = WidgetText({
	text      = "Welcome, ava65!" 
	width     = panelWidth
	height    = panelHeight
	align     = HCenter | VCenter
	font      = medium
	clip_mode = NewLine
  })  

root.Panel.BtnOK = WidgetButton({
    x               = (panelWidth - buttonWidth) / 2
	y 		        = panelHeight - (btnHeight + 10)
	width 	        = btnWidth
	height 	        = btnHeight
	bitmap_normal   = button_normal.png   
    bitmap_pressed  = button_pressed.png  
    bitmap_disabled = button_disabled.png 

	BtnText = WidgetText({
		text   = "OK"
		font   = large
		width  = btnWidth
	    height = btnHeight
	    align  = HCenter | VCenter
	  })
  })

return root