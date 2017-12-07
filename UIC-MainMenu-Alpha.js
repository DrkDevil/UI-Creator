/*:
 * @plugindesc RPGMV UI Creator - Main Menus
 * @author Digital Religion
 *
 * --- Command Window Parameters ---
 *
 * @param --- Command Window ---
 * @default Settings for Command Window
 *
 * @param Command Window X Position
 * @desc Enter the X Cord you want your Command window to be. Value is in px.
 * @default 0
 *
 * @param Command Window Y Position
 * @desc Enter the Y Cord you want your Command window to be. Value is in px.
 * @default 0
 *
 * @param Command Window Width
 * @desc Enter the Width you want your Command window to be. Value is in px.
 * @default 240
 *
 * @param Command Window Height
 * @desc Enter the Height you want your Command window to be. Value is in px.
 * @default 325
 *
 * @param Command Window Rows
 * @desc Enter how many rows the Command window should have.
 * @default 1
 *
 * @param Command Window Cols
 * @desc Enter how many Columns the Command window should have.
 * @default 1
 *
 * @param --- Gold Window ---
 * @default Settings for Gold Window
 *
 * @param Gold Window X Position
 * @desc Enter the X Cord you want your Gold window to be. Value is in px.
 * @default 0
 *
 * @param Gold Window Y Position
 * @desc Enter the Y Cord you want your Gold window to be. Value is in px.
 * @default 559
 *
 * @param Gold Window Width
 * @desc Enter the Width you want your Gold window to be. Value is in px.
 * @default 240
 *
 * @param Gold Window Height
 * @desc Enter the Height you want your Gold window to be. Value is in px.
 * @default 65
 *
 * @param Gold Window Rows
 * @desc Enter how many rows the Gold window should have.
 * @default 1
 *
 * @param Gold Window Cols
 * @desc Enter how many Columns the Gold window should have.
 * @default 1
 *
 *
 * @param --- Status Window ---
 * @default Settings for Gold Window
 *
 * @param Status Window X Position
 * @desc Enter the X Cord you want your Status window to be. Value is in px.
 * @default 240
 *
 * @param Status Window Y Position
 * @desc Enter the Y Cord you want your Status window to be. Value is in px.
 * @default 0
 *
 * @param Status Window Width
 * @desc Enter the Width you want your Status window to be. Value is in px.
 * @default 576
 *
 * @param Status Window Height
 * @desc Enter the Height you want your Status window to be. Value is in px.
 * @default 625
 *
 * @param Status Window Rows
 * @desc Enter how many rows the Status window should have.
 * @default 4
 *
 * @param Status Window Cols
 * @desc Enter how many Columns the Status window should have.
 * @default 1
 *
 * @param Status Window Opacity
 * @desc Opacity of the status window
 * @default 255
 *
 * @param Gold Window Opacity
 * @desc Opacity of the status window
 * @default 255
 *
 * @param Command Window Opacity
 * @desc Opacity of the status window
 * @default 255
 *
 */
(function () {
    //Create Background
 
    Scene_MenuBase.prototype.createBackground = function() {
        this._backgroundSprite = new Sprite();
        this._backgroundSprite.bitmap = ImageManager.loadPicture('dcbg');
        this.addChild(this._backgroundSprite);
    };
 
    //Initialize Plugin
    var parameters = PluginManager.parameters('UIC-MainMenu-Alpha');
    var StatusOpacity = parseInt(parameters["Status Window Opacity"] || 0, 10);
	var GoldOpacity = parseInt(parameters["Gold Window Opacity"] || 0, 10);
	var CommandOpacity = parseInt(parameters["Command Window Opacity"] || 0, 10);
	
 
    //Overwrite Scene_Menu
    var _Scene_Menu_Create = Scene_Menu.prototype.create;
    Scene_Menu.prototype.create = function () {
        _Scene_Menu_Create.call(this);
    
		//Command Window Position
        this._commandWindow.x = parameters['Command Window X Position'];
        this._commandWindow.y = parameters['Command Window Y Position'];
     
        //Gold Window Position
        this._goldWindow.x = parameters['Gold Window X Position'];
        this._goldWindow.y = parameters['Gold Window Y Position'];
     
        //Status Window Position
        this._statusWindow.x = parameters['Status Window X Position'];
        this._statusWindow.y = parameters['Status Window Y Position'];
   
		//Command Window Opacity
        this.comOpacity();
		//Status Window Opacity
        this.statOpacity();
		//Gold Window Opacity
        this.goldOpacity();
 
    };
 
	//Check for Negative numbers and numbers over 255
    Scene_Menu.prototype.comOpacity = function () {
    	if (CommandOpacity >= 0 && CommandOpacity <= 255) {
    		this._commandWindow.opacity = CommandOpacity;
    	} else {
    		this._commandWindow.opacity = 0;
    	}
    };
	
	//Check for Negative numbers and numbers over 255
    Scene_Menu.prototype.statOpacity = function () {
    	if (GoldOpacity >= 0 && GoldOpacity <= 255) {
    		this._goldWindow.opacity = GoldOpacity;
    	} else {
    		this._goldWindow.opacity = 0;
    	}
    };
     
	//Check for Negative numbers and numbers over 255
    Scene_Menu.prototype.goldOpacity = function () {
    	if (StatusOpacity >= 0 && StatusOpacity <= 255) {
    		this._statusWindow.opacity = StatusOpacity;
    	} else {
    		this._statusWindow.opacity = 0;
    	}
    };
	
    //Size and Layout of Command Menu
    Window_MenuCommand.prototype.windowWidth = function () { return parameters['Command Window Width']; };
    Window_MenuCommand.prototype.windowHeight = function () { return parameters['Command Window Height']; };
    Window_MenuCommand.prototype.numVisibleRows = function () { return parameters['Command Window Rows']; };
    Window_MenuCommand.prototype.maxCols = function () { return parameters['Command Window Cols']; };
     
    //Size and Layout of Gold Window
    Window_Gold.prototype.windowWidth = function () { return parameters['Gold Window Width']; };
    Window_Gold.prototype.windowHeight = function () { return parameters['Gold Window Height']; };
    Window_Gold.prototype.numVisibleRows = function () { return parameters['Gold Window Rows']; };
    Window_Gold.prototype.maxCols = function () { return parameters['Gold Window Cols']; };

    //Size and Layout of Gold Window
    Window_MenuStatus.prototype.windowWidth = function () { return parameters['Status Window Width']; };
    Window_MenuStatus.prototype.windowHeight = function () { return parameters['Status Window Height']; };
    Window_MenuStatus.prototype.numVisibleRows = function () { return parameters['Status Window Rows']; };
    Window_MenuStatus.prototype.maxCols = function () { return parameters['Status Window Cols']; };
 
})();