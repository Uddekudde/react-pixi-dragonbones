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
import * as PIXI from 'pixi.js';
import PixiBase from './PixiBase.js';
export default class DragonBonesScene extends PixiBase {
    protected hasText: boolean = false;
    protected readonly ARMATURE_DISPLAY_NAME: string = "armature";
    protected xOffset: number = 0;
    protected yOffset: number = 0;
    protected animationReady: boolean = false;
    protected readonly dragonbonesName: string = "parallaxCove";
    protected readonly armatureName: string = "Armature";
    protected readonly animationName: string = "animtion0";


    public constructor(private canvas: any, private skeleton: any, private texJson: any, private texPng: any) {
        super(canvas);
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
            this.texPng
        );
    }

    checkScale(armatureDisplay: any){
        // the animation dimensions are 1920x1080
        if ((this._renderer.height > 1080) || (this._renderer.width > 1920)) {
            let xScaleFactor;
            let yScaleFactor;
            let finalScaleFactor;

            xScaleFactor = this._renderer.height / 1080;
            yScaleFactor = this._renderer.width / 1920;
            finalScaleFactor = (xScaleFactor > yScaleFactor) ? xScaleFactor : yScaleFactor;
            finalScaleFactor = (finalScaleFactor < 1) ? 1 : finalScaleFactor;
            armatureDisplay.scale.x = finalScaleFactor;
            armatureDisplay.scale.y = finalScaleFactor;
        }
    }

    adjustFocus(armatureDisplay: any){
        let focusCorrectionX;
        let focusCorrectionY;
        if((this._renderer.width / this._renderer.height) > 0.7) {
            focusCorrectionX = (this._renderer.width < 1300) ? 300 : 0;
            focusCorrectionY = (this._renderer.height < 800) ? 100 : 0;
        } else {
            let offsetCompensation = (this._renderer.width < 560) ? (this.xOffset / 4) : 0;
            focusCorrectionX = 600 + offsetCompensation;
            focusCorrectionY = 0;
        }
        armatureDisplay.x = (this._renderer.width / 2) - this.xOffset + focusCorrectionX;
        armatureDisplay.y = (this._renderer.height / 2) - this.yOffset - focusCorrectionY;
    }

    changeText(text: string){
        if(this.hasText) {
            let childToRemove = this.getChildByName(this.TEXT_NAME);
            this.removeChildAt(this.getChildIndex(childToRemove));
            this.hasText = false;
        }
        this.createText(text, 2);
        this.hasText = true;
    }

    playAnimation(animationName: string){
        if(this.animationReady) {
            let armatureDisplay = this.getChildByName(this.ARMATURE_DISPLAY_NAME) as dragonBones.PixiArmatureDisplay;
            armatureDisplay.animation.play(animationName);
        }
    }

    resizeRenderer(width: number, height: number){
        this._renderer.resize(width, height);
        let armatureDisplay = this.getChildByName(this.ARMATURE_DISPLAY_NAME);
        this.adjustFocus(armatureDisplay);
        this.checkScale(armatureDisplay);
    }

    parallax(pageX: number, pageY: number): void {
        let mouseX = pageX - 945;
        let mouseY = pageY - 550;

        let armatureDisplay = this.getChildByName(this.ARMATURE_DISPLAY_NAME) as dragonBones.PixiArmatureDisplay | any;
        let near = armatureDisplay.armature.getBone("near");
        let middle = armatureDisplay.armature.getBone("middle");
        let far = armatureDisplay.armature.getBone("far");




        let bgRatio = 0.01125;
        let midRatio = 0.05;
        let nearRatio = 0.2;

        far.offset.x = mouseX*bgRatio;
        far.offset.y = mouseY*bgRatio;

        near.offset.x = mouseX*nearRatio;
        near.offset.y = mouseY*nearRatio;;

        middle.offset.x = mouseX*midRatio;
        middle.offset.y = mouseY*midRatio;


    }

    protected _onStart(): void {
        const factory = (window as any).dragonBones.PixiFactory.factory;
        factory.parseDragonBonesData(this.skeleton);
        factory.parseTextureAtlasData(this.texJson, this._pixiResources[this.texPng].texture);

        const armatureDisplay = factory.buildArmatureDisplay(this.armatureName, this.dragonbonesName);
        armatureDisplay.animation.play(this.animationName);

        armatureDisplay.name = this.ARMATURE_DISPLAY_NAME;
        this.animationReady = true;

        armatureDisplay.anchor.x = 0;
        armatureDisplay.anchor.y = 0;

        this.xOffset = (this._renderer.width / 2);
        this.yOffset = (this._renderer.height / 2);

        this.adjustFocus(armatureDisplay);
        this.checkScale(armatureDisplay);

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

            if(alphaFilter.alpha < 1){
                alphaFilter.alpha += .01;
            } else {
                PIXI.ticker.shared.remove(alphaHandler);
            }
        });

       // this.createText("booooooooi", 2);
        //this.hasText = true;
    }
}