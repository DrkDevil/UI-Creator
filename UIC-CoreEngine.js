/*:
 * @plugindesc v0.01 Required for UI Creator Plugins. 
 *
 * @author Digital Religion
 *
 * @help
 * Website: rpgmaker.digitalreligion.net
 * This Core Plugin controls some of the basic elements of RPG Maker MV. 
 * Inlcuding: Minimum Resloution, Stretching Backgrounds, and Sprite resizing. 
 * It also alowws to to enable and disable certain parts of other UI-Creator Plugins. 
 *
 * @param Screen Width
 * @desc Screen Width in px 
 * @default 816
 *
 * @param Screen Height
 * @desc Screen Height in px
 * @default 624
 *
 */

var screenWidth = Number(parameters['Screen Width'] || 816);
var screenHeight = Number(parameters['Screen Height'] || 624);
var _Scene_Base_create = Scene_Base.prototype.create;
Scene_Base.prototype.create = function () {
	_Scene_Base_create.call(this);
	Graphics.width = screenWidth;
	Graphics.height = screenHeight;
};
