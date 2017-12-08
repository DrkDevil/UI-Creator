/*:
 * @plugindesc UI Creator - Main Menu Editor (v0.2.0)
 * @author Digital Religion
 *
 * @help
 * =============================================================================
 * ||||||||||||||||||||||  UIC - Main Menu Editor (v0.2.0)  ||||||||||||||||||||
 * =============================================================================
 *
 *                                Created by:
 *        ____  _       _ _        _   ____      _ _       _             
 *       |  _ \(_) __ _(_) |_ __ _| | |  _ \ ___| (_) __ _(_) ___  _ __  
 *       | | | | |/ _` | | __/ _` | | | |_) / _ \ | |/ _` | |/ _ \| '_ \ 
 *       | |_| | | (_| | | || (_| | | |  _ <  __/ | | (_| | | (_) | | | |
 *       |____/|_|\__, |_|\__\__,_|_| |_| \_\___|_|_|\__, |_|\___/|_| |_|
 *                |___/                              |___/               
 *
 *               http://rpgmaker.digitalreligion.net/ui-creator/
 *
 * =============================================================================
 * |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
 * =============================================================================
 *  ---------------------------------------------------------------------------
 *  +++ ABOUT THIS PLUGIN +++
 *  ---------------------------------------------------------------------------
 *
 *  This plugin allows you to edit the main menu system and arange the layout 
 *  to your specifications. This will allow you to create more stylized menus
 *  for your game. Making your game stand out from the crowd. 
 *
 *  Feel free to distribute with commercial and non-commercial game
 *  Please give credit if used in your game. 
 *
 *  UI Creator is licensed under a MIT License.
 *
 *  ---------------------------------------------------------------------------
 *  +++  INSTRUCTIONS +++
 *  ---------------------------------------------------------------------------
 *
 *   BACKGROUND IMAGE 
 *   The background image is located in the "img/menus/main/" directory
 *   The default filename is mainBG, but you can change it to whatever you
 *   like in the plugin manager. 
 *
 *   POSITIONING WINDOWS 
 *   To move one of the specific windows to a certain location on the screen.
 *   Input the window cordinates into your X and Y values.
 *
 *   WINDOW SIZE
 *   Make sure that all windows sizes width and hieght are input in pixels.
 *
 *   SPECIFYING WINDOW COLUMNS & ROWS
 *   Specify the number of columns and rows you want. Try to keep things in 
 *   even numbers, as odd numbers tend to throw things off in RPGMaker. 
 *
 *   SETTING THE WINDOW OPACITY
 *   Here you can change the opacity of your window making it a bit more 
 *   tranparent. Setting the opacity to 255 will make you window with a 
 *   full opacity. 127 is roughly 50% opacity. and 0 is completly transparent.
 *
 *  ----------------------------------------------------------------------------
 *  +++ Version History +++
 *  ----------------------------------------------------------------------------
 *
 *   (0.1) - Initial Creation.  Ability to arange Main Menu Layout.
 *   (0.1.5) - Added help file to the plugin for RPGMaker 1.5.1 update.
 *   (0.2.0) - Added Background image and ability to name that image from 
 *             withing the plugin manager.
 *
 * @param --- Background Image ---
 * @default Settings for Main Menus Background
 *
 * @param Background Image Filename
 * @desc Filename of the background image file
 * @default mainBG
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
  // Initialize Plugin
  var parameters = PluginManager.parameters('UIC-MainMenu-Alpha');
  var StatusOpacity = parseInt(parameters["Status Window Opacity"] || 0, 10);
  var GoldOpacity = parseInt(parameters["Gold Window Opacity"] || 0, 10);
  var CommandOpacity = parseInt(parameters["Command Window Opacity"] || 0, 10);
  var MenuBG = String(parameters['Background Image Filename'] || "mainBG");
  
  // Image Mangager 
  ImageManager.loadMainMenuImgs = function(filename) {
    return this.loadBitmap('img/menus/main/', filename, 0, true);
  };		
	
  // Create Background
  Scene_MenuBase.prototype.createBackground = function() {
    this._backgroundSprite = new Sprite();
    this._backgroundSprite.bitmap = ImageManager.loadMainMenuImgs(MenuBG);
    this.addChild(this._backgroundSprite);
  };
	
  // Overwrite Scene_Menu
  var UIC_mainMenu = Scene_Menu.prototype.create;
  Scene_Menu.prototype.create = function() {
	UIC_mainMenu.call(this);
	// Create UIC Windows 
	this.UIC_windows(); 
  };

  // UIC Windows
  Scene_Menu.prototype.UIC_windows = function() {
	// === POSITION WINDOWS === //  
	// Command Window Position
    this._commandWindow.x = parameters['Command Window X Position'];
    this._commandWindow.y = parameters['Command Window Y Position']; 
	// Gold Window Position
    this._goldWindow.x = parameters['Gold Window X Position'];
    this._goldWindow.y = parameters['Gold Window Y Position'];
	// Status Window Position
    this._statusWindow.x = parameters['Status Window X Position'];
    this._statusWindow.y = parameters['Status Window Y Position'];
	// === WINDOWS OPACITY === //
	// Command Window Opacity
    this.comOpacity();
	// Status Window Opacity
    this.statOpacity();
	// Gold Window Opacity
    this.goldOpacity();  
  };
  
  // Make sure the plugin doesn't allow numbers below 0 or over 255 in the opacity settings
  // Check for Command Window
  Scene_Menu.prototype.comOpacity = function() {
    if (CommandOpacity >= 0 && CommandOpacity <= 255) { this._commandWindow.opacity = CommandOpacity; } 
	else { this._commandWindow.opacity = 0; }
  };
  // Check for Gold Window
  Scene_Menu.prototype.goldOpacity = function() {
    if (GoldOpacity >= 0 && GoldOpacity <= 255) { this._goldWindow.opacity = GoldOpacity; } 
	else { this._goldWindow.opacity = 0; }
  };
  // Check for Status Window
  Scene_Menu.prototype.statOpacity = function() {
    if (StatusOpacity >= 0 && StatusOpacity <= 255) { this._statusWindow.opacity = StatusOpacity; }
	else { this._statusWindow.opacity = 0; }
  };
	
  // Main Menu Window's Plugin Paramaters	
  // Size and Layout of Command Menu
  Window_MenuCommand.prototype.windowWidth = function() { return parameters['Command Window Width']; };
  Window_MenuCommand.prototype.windowHeight = function() { return parameters['Command Window Height']; };
  Window_MenuCommand.prototype.numVisibleRows = function() { return parameters['Command Window Rows']; };
  Window_MenuCommand.prototype.maxCols = function() { return parameters['Command Window Cols']; };   
  // Size and Layout of Gold Window
  Window_Gold.prototype.windowWidth = function() { return parameters['Gold Window Width']; };
  Window_Gold.prototype.windowHeight = function() { return parameters['Gold Window Height']; };
  Window_Gold.prototype.numVisibleRows = function() { return parameters['Gold Window Rows']; };
  Window_Gold.prototype.maxCols = function() { return parameters['Gold Window Cols']; };
  // Size and Layout of Gold Window
  Window_MenuStatus.prototype.windowWidth = function() { return parameters['Status Window Width']; };
  Window_MenuStatus.prototype.windowHeight = function() { return parameters['Status Window Height']; };
  Window_MenuStatus.prototype.numVisibleRows = function() { return parameters['Status Window Rows']; };
  Window_MenuStatus.prototype.maxCols = function() { return parameters['Status Window Cols']; };
	
})();