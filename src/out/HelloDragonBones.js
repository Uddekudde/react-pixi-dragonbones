"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * How to use
 * 1. Load data.
 *
 * 2. Parse data.
 *    factory.parseDragonBonesData();
 *    factory.parseTextureAtlasData();
 *
 * 3. Build armature.
 *    armatureDisplay = factory.buildArmatureDisplay("armatureName");
 *
 * 4. Play animation.
 *    armatureDisplay.animation.play("animationName");
 *
 * 5. Add armature to stage.
 *    addChild(armatureDisplay);
 */
/// <reference path="./dragonBones.d.ts" />
const PIXI = require("pixi.js");
const BaseDemo_js_1 = require("./BaseDemo.js");
class HelloDragonBones extends BaseDemo_js_1.default {
    constructor(canvas, skeleton, texJson) {
        super(canvas);
        this.canvas = canvas;
        this.skeleton = skeleton;
        this.texJson = texJson;
        this.hasText = false;
        this.ARMATURE_DISPLAY_NAME = "armature";
        /*
        The JSON files are loaded by webpack in PixiComponent.js, and can be passed through the constructor.
        The texture atlas data aka tex.png are placed by webpack as is in the directory /static/media. From there they can be loaded by the Pixi loader given the url below.
         */
        /*
        The resource urls are pushed to the _resources array to be loaded.
         */
        this._resources.push(
        // "src/out/resource/NewProject_ske.json",
        //"src/out/resource/NewProject_tex.json",
        //"src/out/resource/NewProject_tex.png"
        "/static/media/hills_tex.d150d0de.png");
    }
    changeText(text) {
        if (this.hasText) {
            let childToRemove = this.getChildByName(this.TEXT_NAME);
            this.removeChildAt(this.getChildIndex(childToRemove));
            this.hasText = false;
        }
        this.createText(text, 2);
        this.hasText = true;
    }
    resizeRenderer(width, height) {
        this._renderer.resize(width, height);
        let armatureDisplay = this.getChildByName(this.ARMATURE_DISPLAY_NAME);
        armatureDisplay.x = (this._renderer.width / 2) - 960;
        armatureDisplay.y = (this._renderer.height / 2) - 540;
    }
    _onStart() {
        const factory = window.dragonBones.PixiFactory.factory;
        // factory.parseDragonBonesData(this._pixiResource["resource/mecha_1002_101d_show/mecha_1002_101d_show_ske.json"].data);
        factory.parseDragonBonesData(this.skeleton);
        factory.parseTextureAtlasData(this.texJson, this._pixiResources["/static/media/hills_tex.d150d0de.png"].texture);
        const armatureDisplay = factory.buildArmatureDisplay("Armature", "hills");
        armatureDisplay.animation.play("animtion0");
        armatureDisplay.name = this.ARMATURE_DISPLAY_NAME;
        armatureDisplay.x = (this._renderer.width / 2) - 960;
        armatureDisplay.y = (this._renderer.height / 2) - 540;
        /**
        armatureDisplay.scale.x = 0.5;
        armatureDisplay.scale.y = 0.5;
        */
        let alphaFilter = new PIXI.filters.AlphaFilter();
        alphaFilter.alpha = 0;
        armatureDisplay.filters = [alphaFilter];
        /**
        let brush =  PIXI.Sprite.fromImage('https://i.imgur.com/SIfxYjW.png');
        this.addChild(brush);
        armatureDisplay.mask = brush;
        **/
        this.addChild(armatureDisplay);
        PIXI.ticker.shared.add(function alphaHandler() {
            if (alphaFilter.alpha < 1) {
                alphaFilter.alpha += .01;
            }
            else {
                PIXI.ticker.shared.remove(alphaHandler);
            }
        });
        // this.createText("booooooooi", 2);
        //this.hasText = true;
    }
}
exports.default = HelloDragonBones;
