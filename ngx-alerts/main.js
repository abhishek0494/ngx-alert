(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"theme\" style=\"overflow: hidden;\">\n  <div class=\"mat-app-background\">\n    <div class=\"custom-confirm-dialogue\">\n      <div\n        style=\"padding: 30px;align-content: center;vertical-align: middle;text-align: center;align-items: center;align-self: center;\">\n        <ng-container *ngIf=\"data.matIcon\">\n          <ng-container [ngSwitch]=\"data.iconAnimation\">\n            <div *ngSwitchCase=\"undefined\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n\n            <div *ngSwitchCase=\"'bounce'\" [@bounce]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'flash'\" [@flash]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'pulse'\" [@pulse]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rubberBand'\" [@rubberBand]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'shake'\" [@shake]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'swing'\" [@swing]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'tada'\" [@tada]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'wobble'\" [@wobble]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'jello'\" [@jello]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'heartBeat'\" [@heartBeat]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'headShake'\" [@headShake]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceIn'\" [@bounceIn]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceInDown'\" [@bounceInDown]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceInLeft'\" [@bounceInLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceInRight'\" [@bounceInRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceInUp'\" [@bounceInUp]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceOut'\" [@bounceOut]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceOutDown'\" [@bounceOutDown]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceOutLeft'\" [@bounceOutLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceOutRight'\" [@bounceOutRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'bounceOutUp'\" [@bounceOutUp]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeIn'\" [@fadeIn]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeInDown'\" [@fadeInDown]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeInDownBig'\" [@fadeInDownBig]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeInLeft'\" [@fadeInLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeInLeftBig'\" [@fadeInLeftBig]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeInRight'\" [@fadeInRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeInRightBig'\" [@fadeInRightBig]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeInUp'\" [@fadeInUp]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeInUpBig'\" [@fadeInUpBig]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeOut'\" [@fadeOut]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeOutDown'\" [@fadeOutDown]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeOutDownBig'\" [@fadeOutDownBig]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeOutLeft'\" [@fadeOutLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeOutLeftBig'\" [@fadeOutLeftBig]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeOutRight'\" [@fadeOutRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeOutRightBig'\" [@fadeOutRightBig]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeOutUp'\" [@fadeOutUp]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'fadeOutUpBig'\" [@fadeOutUpBig]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'flip'\" [@flip]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'flipInX'\" [@flipInX]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'flipInY'\" [@flipInY]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'flipOutX'\" [@flipOutX]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'flipOutY'\" [@flipOutY]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'lightSpeedIn'\" [@lightSpeedIn]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'lightSpeedOut'\" [@lightSpeedOut]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateIn'\" [@rotateIn]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateInDownLeft'\" [@rotateInDownLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateInDownRight'\" [@rotateInDownRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateInUpLeft'\" [@rotateInUpLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateInUpRight'\" [@rotateInUpRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateOut'\" [@rotateOut]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateOutDownLeft'\" [@rotateOutDownLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateOutDownRight'\" [@rotateOutDownRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateOutUpLeft'\" [@rotateOutUpLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotateOutUpRight'\" [@rotateOutUpRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'slideInUp'\" [@slideInUp]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'slideInDown'\" [@slideInDown]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'slideInLeft'\" [@slideInLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'slideInRight'\" [@slideInRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'slideOutUp'\" [@slideOutUp]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'slideOutDown'\" [@slideOutDown]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'slideOutLeft'\" [@slideOutLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'slideOutRight'\" [@slideOutRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomIn'\" [@zoomIn]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomInDown'\" [@zoomInDown]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomInLeft'\" [@zoomInLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomInRight'\" [@zoomInRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomInUp'\" [@zoomInUp]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomOut'\" [@zoomOut]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomOutDown'\" [@zoomOutDown]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomOutLeft'\" [@zoomOutLeft]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomOutRight'\" [@zoomOutRight]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'zoomOutUp'\" [@zoomOutUp]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'hinge'\" [@hinge]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'jackInTheBox'\" [@jackInTheBox]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rollIn'\" [@rollIn]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rollOut'\" [@rollOut]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'collapse'\" [@collapse]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'rotate'\" [@rotate]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n            <div *ngSwitchCase=\"'hueRotate'\" [@hueRotate]=\"animationState\">\n              <mat-icon style=\"font-size: 70px;position: relative;left: -22px;\" [style.color]=\"data.iconColor\">\n                {{data.matIcon}}</mat-icon>\n            </div>\n          </ng-container>\n\n\n        </ng-container>\n        <div style=\"font-weight: 500;\" [style.font-size]=\"data.titleSize\">{{data.title}}</div>\n        <div *ngIf=\"data.message\" style=\"font-weight: 400;\" [style.font-size]=\"data.messageSize\"\n          [innerHtml]=\"data.message\"></div>\n      </div>\n      <div style=\"display: flex;\"\n        style=\"padding: 0 10px 10px 10px;align-content: center;vertical-align: middle;text-align: center;align-items: center;align-self: center;\">\n        <ng-container *ngFor=\"let btn of data.buttons;let i = index;\">\n          <button style=\"margin-right: 5px\" *ngIf=\"!btn.type||btn.type=='basic'\" [id]=\"btn.id\" mat-button\n            [color]=\"btn.color\" (click)=\"onButtonClick(btn.id)\">\n            {{btn.text}}\n          </button>\n          <button style=\"margin-right: 5px\" *ngIf=\"btn.type=='raised'\" [id]=\"btn.id\" mat-raised-button\n            [color]=\"btn.color\" (click)=\"onButtonClick(btn.id)\">\n            {{btn.text}}\n          </button>\n          <button style=\"margin-right: 5px\" *ngIf=\"btn.type=='flat'\" [id]=\"btn.id\" mat-flat-button [color]=\"btn.color\"\n            (click)=\"onButtonClick(btn.id)\">\n            {{btn.text}}\n          </button>\n          <button style=\"margin-right: 5px\" *ngIf=\"btn.type=='stroked'\" [id]=\"btn.id\" mat-stroked-button\n            [color]=\"btn.color\" (click)=\"onButtonClick(btn.id)\">\n            {{btn.text}}\n          </button>\n          <button style=\"margin-right: 5px\" *ngIf=\"btn.type=='icon'\" [id]=\"btn.id\" mat-icon-button [color]=\"btn.color\"\n            (click)=\"onButtonClick(btn.id)\">\n            <mat-icon>{{btn.icon}}</mat-icon>\n          </button>\n          <button style=\"margin-right: 5px\" *ngIf=\"btn.type=='fab'\" [id]=\"btn.id\" mat-fab [color]=\"btn.color\"\n            (click)=\"onButtonClick(btn.id)\">\n            <mat-icon *ngIf=\"btn.icon\">{{btn.icon}}</mat-icon>\n            <ng-container *ngIf=\"!btn.icon\">{{btn.text}}</ng-container>\n          </button>\n          <button style=\"margin-right: 5px\" *ngIf=\"btn.type=='minifab'\" [id]=\"btn.id\" mat-mini-fab [color]=\"btn.color\"\n            (click)=\"onButtonClick(btn.id)\">\n            <mat-icon *ngIf=\"btn.icon\">{{btn.icon}}</mat-icon>\n            <ng-container *ngIf=\"!btn.icon\">{{btn.text}}</ng-container>\n          </button>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto; }\n\n.custom-confirm-dialogue {\n  padding: 0 0 0 0 !important; }\n\n.mat-dialog-container {\n  padding: 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9kZC1uZ3gtYWxlcnRzL3NyYy9hcHAvYWxlcnQtc2VydmljZS9hbGVydC1kaWFsb2d1ZS1jb25maXJtL2FsZXJ0LWRpYWxvZ3VlLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hbGVydC1zZXJ2aWNlL2FsZXJ0LWRpYWxvZ3VlLWNvbmZpcm0vYWxlcnQtZGlhbG9ndWUtY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuXHJcbi5jdXN0b20tY29uZmlybS1kaWFsb2d1ZSB7XHJcbiAgcGFkZGluZzogMCAwIDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AlertDialogueConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertDialogueConfirmComponent", function() { return AlertDialogueConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-animations */ "./node_modules/angular-animations/fesm5/angular-animations.js");



// import {
//   ThemeService
// } from '../../theme/theme.service';


var AlertDialogueConfirmComponent = /** @class */ (function () {
    function AlertDialogueConfirmComponent(dialogRef, data, 
    // private themeService: ThemeService,
    sanitizer) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
        this.theme = 'my-light-theme';
        this.animationState = true;
    }
    AlertDialogueConfirmComponent.prototype.ngOnInit = function () {
        console.log(this.data.buttons);
        if (this.data.message) {
            this.data.message = this.sanitizer.bypassSecurityTrustHtml(this.data.message);
        }
        // this.themeService.theme.subscribe(value => {
        //   this.theme = value;
        // })
        console.log(this.data);
        this.animate();
    };
    AlertDialogueConfirmComponent.prototype.animate = function () {
        var _this = this;
        this.animationState = false;
        setTimeout(function () {
            _this.animationState = true;
        }, 1);
    };
    AlertDialogueConfirmComponent.prototype.dismiss = function () {
        this.dialogRef.close();
    };
    AlertDialogueConfirmComponent.prototype.onButtonClick = function (id) {
        this.dialogRef.close(id);
    };
    AlertDialogueConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-dialogue-confirm',
            template: __webpack_require__(/*! ./alert-dialogue-confirm.component.html */ "./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            animations: [
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["flashAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["pulseAnimation"])({
                    anchor: 'pulse'
                }),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rubberBandAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["shakeAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["swingAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["tadaAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["wobbleAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["jelloAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["heartBeatAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["headShakeAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceInAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceInDownAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceInLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceInRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceInUpAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceOutAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceOutDownAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceOutLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceOutRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["bounceOutUpAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInDownAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInDownBigAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInLeftBigAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInRightBigAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInUpAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeInUpBigAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutDownAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutDownBigAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutLeftBigAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutRightBigAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutUpAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["fadeOutUpBigAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["flipAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["flipInXAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["flipInYAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["flipOutXAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["flipOutYAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["lightSpeedInAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["lightSpeedOutAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateInAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateInDownLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateInDownRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateInUpLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateInUpRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateOutAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateOutDownLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateOutDownRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateOutUpLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateOutUpRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["slideInUpAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["slideInDownAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["slideInLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["slideInRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["slideOutUpAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["slideOutDownAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["slideOutLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["slideOutRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomInAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomInDownAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomInLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomInRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomInUpAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomOutAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomOutDownAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomOutLeftAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomOutRightAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["zoomOutUpAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["hingeAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["jackInTheBoxAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rollInAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rollOutAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["collapseAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["rotateAnimation"])(),
                Object(angular_animations__WEBPACK_IMPORTED_MODULE_4__["hueRotateAnimation"])(),
            ],
            styles: [__webpack_require__(/*! ./alert-dialogue-confirm.component.scss */ "./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AlertDialogueConfirmComponent);
    return AlertDialogueConfirmComponent;
}());



/***/ }),

/***/ "./src/app/alert-service/alert-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/alert-service/alert-service.service.ts ***!
  \********************************************************/
/*! exports provided: AlertServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertServiceService", function() { return AlertServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _alert_snackbar_toaster_alert_snackbar_toaster_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert-snackbar-toaster/alert-snackbar-toaster.component */ "./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.ts");
/* harmony import */ var _alert_dialogue_confirm_alert_dialogue_confirm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./alert-dialogue-confirm/alert-dialogue-confirm.component */ "./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.ts");





var AlertServiceService = /** @class */ (function () {
    function AlertServiceService(snackBar, dialogue) {
        this.snackBar = snackBar;
        this.dialogue = dialogue;
    }
    AlertServiceService.prototype.toaster = function (config) {
        var snackbarConfig = {
            horizontalPosition: config.horizontalPosition || 'right',
            verticalPosition: config.verticlePosition || 'top',
            data: {
                title: config.title,
                titleSize: config.titleSize || null,
                message: config.message || null,
                messageSize: config.messageSize || null,
                width: config.width || null,
                backgroundColor: config.backgroundColor || null,
                textColor: config.textColor || null,
                matIcon: config.matIcon || null,
                iconColor: config.iconColor || null,
                // iconSize: config.iconSize || 'medium',
                showProgressBar: config.showProgressBar || false,
                progressBarColor: config.progressBarColor || 'accent',
                progressBarType: config.progressBarType || 'increasing',
                pauseProgressBarOnHover: config.pauseProgressBarOnHover || false,
                closeOnClick: config.closeOnClick || false,
                showCloseButton: config.showCloseButton || false,
                closeButtonColor: config.closeButtonColor || '',
                showActionButton: config.showActionButton || false,
                actionButtonText: config.actionButtonText || 'OK',
                actionButtonColor: config.actionButtonColor || 'primary',
                duration: config.duration || 5000
            },
            panelClass: 'toastPanel'
        };
        var snackBarRef = this.snackBar.openFromComponent(_alert_snackbar_toaster_alert_snackbar_toaster_component__WEBPACK_IMPORTED_MODULE_3__["AlertSnackbarToasterComponent"], snackbarConfig);
        return snackBarRef;
    };
    AlertServiceService.prototype.confirm = function (config) {
        var dialogueRef = this.dialogue.open(_alert_dialogue_confirm_alert_dialogue_confirm_component__WEBPACK_IMPORTED_MODULE_4__["AlertDialogueConfirmComponent"], {
            autoFocus: config.autoFocus === false ? false : true,
            width: config.width ? config.width + 'px' : undefined,
            minWidth: '300px',
            // minHeight: '150px',
            closeOnNavigation: true,
            panelClass: 'custom-panel',
            data: {
                title: config.title,
                titleSize: config.titleSize + 'px' || false,
                message: config.message || null,
                messageSize: config.messageSize + 'px' || false,
                matIcon: config.matIcon || null,
                iconColor: config.iconColor || null,
                buttons: config.buttons && config.buttons.length ? config.buttons : [{
                        id: 'default',
                        text: 'OK',
                        color: 'accent',
                        type: 'raised'
                    }],
                iconAnimation: config.iconAnimation || undefined
            },
            disableClose: config.disableClose === false ? false : true,
            restoreFocus: config.restoreFocus === false ? false : true,
        });
        return dialogueRef;
    };
    AlertServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AlertServiceService);
    return AlertServiceService;
}());



/***/ }),

/***/ "./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"theme\" [style.width]=\"data.width||''\" style=\"cursor: default;\" (click)=\"closeOnClick($event)\"\n  (mouseenter)=\"pauseTimer() \" (mouseleave)=\"resumeTimer()\">\n  <div class=\"mat-app-background\">\n    <div class=\"custom-text-color\"\n      style=\"padding: 5px 5px;align-items: center;align-content: center;align-self: center;\"\n      [style.background-color]=\"data.backgroundColor\">\n      <button class=\"small-close-icon\" mat-icon-button *ngIf=\"data.showCloseButton\" (click)=\"closeSelf($event)\"\n        style=\"position: absolute;top: 0;right: 0;\">\n        <mat-icon [color]=\"data.closeButtonColor=='primary'?'':data.closeButtonColor\" style=\"font-size: 15px;\">close\n        </mat-icon>\n      </button>\n      <div style=\"display: flex;\">\n        <div style=\"min-width: 45px;align-items: center;align-content: center;align-self: center;\" *ngIf=\"data.matIcon\">\n          <mat-icon style=\"font-size: 40px;margin: 5px 0;\" [style.color]=\"data.iconColor\">\n            {{data.matIcon}}\n          </mat-icon>\n        </div>\n        <div style=\"margin-left: 10px;align-items: center;align-content: center;align-self: center;\"\n          [style.color]=\"data.textColor\">\n          <div style=\"font-weight: 900;\" [style.font-size]=\"data.titleSize||'16px'\">{{data.title}}</div>\n          <div style=\"font-weight: 400;\" [style.font-size]=\"data.messageSize||'14px'\" *ngIf=\"data.message\"\n            [innerHtml]=\"data.message\"></div>\n        </div>\n        <span class=\"example-spacer\"></span>\n        <div *ngIf=\"data.showActionButton\" (click)=\"closeWithAction()\"\n          style=\"align-items: center;align-content: center;align-self: center;\">\n          <button class=\"small-action-icon\" mat-stroked-button style=\"position: relative;top: 10px\"\n            [color]=\"data.actionButtonColor||'primary'\">{{data.actionButtonText||'OK'}}</button>\n        </div>\n      </div>\n    </div>\n    <mat-progress-bar *ngIf=\"data.showProgressBar\" style=\"height: 3px;\" mode=\"determinate\"\n      [color]=\"data.progressBarColor\" [ngClass]=\"data.progressBarColor + ' custom-progressbar'\" [value]=\"timer\">\n    </mat-progress-bar>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".small-close-icon {\n  height: 25px !important;\n  width: 25px !important;\n  font-size: 25px !important;\n  line-height: 25px !important; }\n\n.small-action-icon {\n  height: 30px !important;\n  max-width: 50px !important;\n  min-width: 40px !important;\n  padding: 1px 2px !important;\n  font-size: 12px !important;\n  line-height: 20px !important;\n  text-overflow: clip !important;\n  overflow: hidden !important; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n\n.mat-snack-bar-container {\n  padding: 0 !important;\n  min-width: 100px !important;\n  min-height: 10px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9kZC1uZ3gtYWxlcnRzL3NyYy9hcHAvYWxlcnQtc2VydmljZS9hbGVydC1zbmFja2Jhci10b2FzdGVyL2FsZXJ0LXNuYWNrYmFyLXRvYXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiw0QkFBNEIsRUFBQTs7QUFHOUI7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLHFCQUFxQjtFQUNyQiwyQkFBMkI7RUFDM0IsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hbGVydC1zZXJ2aWNlL2FsZXJ0LXNuYWNrYmFyLXRvYXN0ZXIvYWxlcnQtc25hY2tiYXItdG9hc3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbWFsbC1jbG9zZS1pY29uIHtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zbWFsbC1hY3Rpb24taWNvbiB7XHJcbiAgaGVpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMXB4IDJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1vdmVyZmxvdzogY2xpcCAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDEwcHggIWltcG9ydGFudDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AlertSnackbarToasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertSnackbarToasterComponent", function() { return AlertSnackbarToasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");


// import {
//   ThemeService
// } from '../../theme/theme.service';


var AlertSnackbarToasterComponent = /** @class */ (function () {
    function AlertSnackbarToasterComponent(
    // private themeService: ThemeService,
    snackbarRef, data, zone, changeDetectionRef, sanitizer) {
        this.snackbarRef = snackbarRef;
        this.data = data;
        this.zone = zone;
        this.changeDetectionRef = changeDetectionRef;
        this.sanitizer = sanitizer;
        this.theme = 'my-light-theme';
        this.timerPaused = false;
        this.initialDuration = this.data.duration;
        if (data.progressBarType === 'decreasing') {
            this.timer = 100;
            this.timerinMilSec = this.initialDuration;
        }
        else {
            this.timer = 0;
            this.timerinMilSec = 0;
        }
    }
    AlertSnackbarToasterComponent.prototype.ngOnInit = function () {
        if (this.data.message) {
            this.data.message = this.sanitizer.bypassSecurityTrustHtml(this.data.message);
        }
        if (this.data.width) {
            var MIN = 250;
            var MAX = 400;
            var parsed = parseInt(this.data.width);
            this.data.width = Math.min(Math.max(parsed, MIN), MAX) + 'px';
        }
        else {
            this.data.width = '250px';
        }
        if (this.data.titleSize) {
            this.data.titleSize = this.data.titleSize + 'px';
        }
        if (this.data.messageSize) {
            this.data.messageSize = this.data.messageSize + 'px';
        }
        console.log(this.data);
        // this.themeService.theme.subscribe(value => {
        //   this.theme = value;
        // })
        this.startTimer(this.initialDuration);
    };
    AlertSnackbarToasterComponent.prototype.pauseTimer = function () {
        var _this = this;
        if (this.data.pauseProgressBarOnHover) {
            this.timerPaused = true;
            var intervalRef_1 = setInterval(function () {
                _this.data.duration += 50;
                if (!_this.timerPaused) {
                    clearInterval(intervalRef_1);
                }
            }, 50);
        }
    };
    AlertSnackbarToasterComponent.prototype.resumeTimer = function () {
        if (this.data.pauseProgressBarOnHover) {
            this.timerPaused = false;
            this.startTimer(this.initialDuration);
        }
    };
    AlertSnackbarToasterComponent.prototype.closeSelf = function (event) {
        event.stopPropagation();
        this.snackbarRef.dismiss();
    };
    AlertSnackbarToasterComponent.prototype.closeOnClick = function (event) {
        if (this.data.closeOnClick) {
            event.stopPropagation();
            this.snackbarRef.dismiss();
        }
    };
    AlertSnackbarToasterComponent.prototype.closeWithAction = function () {
        event.stopPropagation();
        this.snackbarRef.dismissWithAction();
    };
    AlertSnackbarToasterComponent.prototype.startTimer = function (duration) {
        var _this = this;
        if (this.data.progressBarType == "decreasing") {
            var intervalRef_2 = setInterval(function () {
                _this.zone.run(function () {
                    _this.timerinMilSec -= 50;
                    var newVal = (_this.timerinMilSec / duration) * 100;
                    _this.timer = newVal;
                    _this.changeDetectionRef.markForCheck();
                    if (_this.timer == 0) {
                        clearInterval(intervalRef_2);
                        _this.snackbarRef.dismiss();
                    }
                    if (_this.timerPaused) {
                        clearInterval(intervalRef_2);
                    }
                });
            }, 50);
        }
        else {
            var intervalRef_3 = setInterval(function () {
                _this.zone.run(function () {
                    _this.timerinMilSec += 50;
                    var newVal = (_this.timerinMilSec / duration) * 100;
                    _this.timer = newVal;
                    _this.changeDetectionRef.markForCheck();
                    if (_this.timer == 100) {
                        clearInterval(intervalRef_3);
                        _this.snackbarRef.dismiss();
                    }
                    if (_this.timerPaused) {
                        clearInterval(intervalRef_3);
                    }
                });
            }, 50);
        }
    };
    AlertSnackbarToasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert-snackbar-toaster',
            template: __webpack_require__(/*! ./alert-snackbar-toaster.component.html */ "./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./alert-snackbar-toaster.component.scss */ "./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarRef"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], AlertSnackbarToasterComponent);
    return AlertSnackbarToasterComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h3>\n    Welcome to {{ title }}!\n  </h3>\n  <img width=\"50\" alt=\"Angular Logo\"\n    src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<button mat-raised-button style=\"margin-left: 10px;\" color=\"primary\" (click)=\"openToaster()\">toast</button>\n<button mat-raised-button style=\"margin-left: 10px;\" color=\"primary\" (click)=\"openConfirmDialogue()\">confirm</button>\n<div style=\"position: absolute;right: 50px;font-size: 14px;\">Example Code on <a style=\"color: blue;\"\n    href=\"https://github.com/discoverdollartech/dd-ngx-alerts\">Github</a></div>\n<div style=\"display: flex;font-size: 14px;\">\n  <div style=\"width: 30%;margin: 1%;\">\n    <h3 style=\"width: 70%;\">Toaster Config:</h3>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Title\" [(ngModel)]=\"toasterConfig.title\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" placeholder=\"Title Size\" [(ngModel)]=\"toasterConfig.titleSize\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Message\" [(ngModel)]=\"toasterConfig.message\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" placeholder=\"Message Size\" [(ngModel)]=\"toasterConfig.messageSize\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" placeholder=\"Duration\" [(ngModel)]=\"toasterConfig.duration\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Horizontal Position\" [(ngModel)]=\"toasterConfig.horizontalPosition\">\n      <mat-hint>'left'|'right'|'center'</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Vertical Position\" [(ngModel)]=\"toasterConfig.verticlePosition\">\n      <mat-hint>'top'|'bottom'</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" placeholder=\"Width\" [(ngModel)]=\"toasterConfig.width\">\n      <mat-hint>min:250, max:400</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Background Color\" [(ngModel)]=\"toasterConfig.backgroundColor\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Text Color\" [(ngModel)]=\"toasterConfig.textColor\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Mat Icon\" [(ngModel)]=\"toasterConfig.matIcon\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Icon Color\" [(ngModel)]=\"toasterConfig.iconColor\">\n    </mat-form-field>\n    <div style=\"width: 70%;\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"toasterConfig.showProgressBar\" [labelPosition]=\"'after'\">\n        Show Progress Bar\n      </mat-checkbox>\n    </div>\n    <div style=\"width: 70%;\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"toasterConfig.pauseProgressBarOnHover\"\n        [labelPosition]=\"'after'\">\n        Progress Pause On Hover\n      </mat-checkbox>\n    </div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Progrss Bar Color\" [(ngModel)]=\"toasterConfig.progressBarColor\">\n      <mat-hint>'primary' | 'accent' | 'warn'</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Progrss Bar Type\" [(ngModel)]=\"toasterConfig.progressBarType\">\n      <mat-hint>'increasing' | 'decreasing'</mat-hint>\n    </mat-form-field>\n    <div style=\"width: 70%;\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"toasterConfig.closeOnClick\" [labelPosition]=\"'after'\">\n        Close On Click\n      </mat-checkbox>\n    </div>\n    <div style=\"width: 70%;\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"toasterConfig.showCloseButton\" [labelPosition]=\"'after'\">\n        Show Close Button\n      </mat-checkbox>\n    </div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Close Button Color\" [(ngModel)]=\"toasterConfig.closeButtonColor\">\n      <mat-hint>'primary' | 'accent' | 'warn'</mat-hint>\n    </mat-form-field>\n    <div style=\"width: 70%;\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"toasterConfig.showActionButton\" [labelPosition]=\"'after'\">\n        Show Action Button\n      </mat-checkbox>\n    </div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Action Button Text\" [(ngModel)]=\"toasterConfig.actionButtonText\">\n      <mat-hint>'primary' | 'accent' | 'warn'</mat-hint>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Action Button Color\" [(ngModel)]=\"toasterConfig.actionButtonColor\">\n      <mat-hint>'primary' | 'accent' | 'warn'</mat-hint>\n    </mat-form-field>\n  </div>\n  <div style=\"width: 30%;margin: 1%;\">\n    <h3 style=\"width: 70%;\">Confirm Config:</h3>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Title\" [(ngModel)]=\"confirmConfig.title\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" placeholder=\"Title Size\" [(ngModel)]=\"confirmConfig.titleSize\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Message\" [(ngModel)]=\"confirmConfig.message\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"number\" placeholder=\"Message Size\" [(ngModel)]=\"confirmConfig.messageSize\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Mat Icon\" [(ngModel)]=\"confirmConfig.matIcon\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Animation</mat-label>\n      <mat-select [(value)]=\"confirmConfig.iconAnimation\">\n        <mat-option value=\"undefined\">None</mat-option>\n        <mat-option *ngFor=\"let anm of animations\" [value]=\"anm\">{{anm}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput type=\"text\" placeholder=\"Icon Color\" [(ngModel)]=\"confirmConfig.iconColor\">\n    </mat-form-field>\n    <div style=\"width: 70%;\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"confirmConfig.disableClose\" [labelPosition]=\"'after'\">\n        Disbale Close(ESC and overlay click will not work)\n      </mat-checkbox>\n    </div>\n    <div style=\"width: 70%;\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"confirmConfig.autoFocus\" [labelPosition]=\"'after'\">\n        Auto Focus\n      </mat-checkbox>\n    </div>\n    <div style=\"width: 70%;\">\n      <mat-checkbox class=\"example-margin\" [(ngModel)]=\"confirmConfig.restoreFocus\" [labelPosition]=\"'after'\">\n        Restore Focus\n      </mat-checkbox>\n    </div>\n    <div style=\"width: 100%;\">\n      <div>\n        Buttons:\n        <span style=\"margin-left:10px ;\">\n          <button mat-icon-button (click)=\"addBtn()\">\n            <mat-icon>add</mat-icon>\n          </button>\n        </span>\n      </div>\n      <div *ngFor=\"let btn of buttonArr; let i = index;\">\n        <div style=\"padding: 5px;border: 1px dotted black;\">\n          <button mat-icon-button (click)=\"removeBtn(i)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" placeholder=\"Button ID\" [(ngModel)]=\"btn.id\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" placeholder=\"Button Text\" [(ngModel)]=\"btn.text\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" placeholder=\"Button Color\" [(ngModel)]=\"btn.color\">\n            <mat-hint>'primary' | 'accent' | 'warn'</mat-hint>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" placeholder=\"Button Type\" [(ngModel)]=\"btn.type\">\n            <mat-hint>'basic' | 'raised' | 'stroked' | 'flat' | 'icon' | 'fab' | 'minifab'</mat-hint>\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"text\" placeholder=\"Button Icon\" [(ngModel)]=\"btn.icon\">\n          </mat-form-field>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div style=\"width: 30;\">\n    Toaster Config:\n    <pre>{{toasterConfig|json}}</pre>\n    Confirm Config:\n    <pre>{{confirmConfig|json}}</pre>\n    Buttons:\n    <pre>{{buttonArr|json}}</pre>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%;\n  font-size: 14px;\n  margin: 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9kZC1uZ3gtYWxlcnRzL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mdWxsLXdpZHRoe1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW46IDEwcHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert-service/alert-service.service */ "./src/app/alert-service/alert-service.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(alertService) {
        this.alertService = alertService;
        this.title = 'dd-ngx-alerts';
        this.animations = [
            'bounce',
            'flash',
            'pulse',
            'rubberBand',
            'shake',
            'swing',
            'tada',
            'wobble',
            'jello',
            'heartBeat',
            'headShake',
            'bounceIn',
            'bounceInDown',
            'bounceInLeft',
            'bounceInRight',
            'bounceInUp',
            'bounceOut',
            'bounceOutDown',
            'bounceOutLeft',
            'bounceOutRight',
            'bounceOutUp',
            'fadeIn',
            'fadeInDown',
            'fadeInDownBig',
            'fadeInLeft',
            'fadeInLeftBig',
            'fadeInRight',
            'fadeInRightBig',
            'fadeInUp',
            'fadeInUpBig',
            'fadeOut',
            'fadeOutDown',
            'fadeOutDownBig',
            'fadeOutLeft',
            'fadeOutLeftBig',
            'fadeOutRight',
            'fadeOutRightBig',
            'fadeOutUp',
            'fadeOutUpBig',
            'flip',
            'flipInX',
            'flipInY',
            'flipOutX',
            'flipOutY',
            'lightSpeedIn',
            'lightSpeedOut',
            'rotateIn',
            'rotateInDownLeft',
            'rotateInDownRight',
            'rotateInUpLeft',
            'rotateInUpRight',
            'rotateOut',
            'rotateOutDownLeft',
            'rotateOutDownRight',
            'rotateOutUpLeft',
            'rotateOutUpRight',
            'slideInUp',
            'slideInDown',
            'slideInLeft',
            'slideInRight',
            'slideOutUp',
            'slideOutDown',
            'slideOutLeft',
            'slideOutRight',
            'zoomIn',
            'zoomInDown',
            'zoomInLeft',
            'zoomInRight',
            'zoomInUp',
            'zoomOut',
            'zoomOutDown',
            'zoomOutLeft',
            'zoomOutRight',
            'zoomOutUp',
            'hinge',
            'jackInTheBox',
            'rollIn',
            'rollOut',
            'collapse',
            'rotate',
            'hueRotate'
        ];
        this.toasterConfig = {
            title: 'Toaster',
            titleSize: 16,
            message: 'This is a sample toaster!',
            messageSize: 14,
            duration: 5000,
            horizontalPosition: 'right',
            verticlePosition: 'top',
            width: 0,
            backgroundColor: 'white',
            textColor: '',
            matIcon: '',
            iconColor: '',
            showProgressBar: true,
            progressBarColor: undefined,
            progressBarType: undefined,
            pauseProgressBarOnHover: true,
            closeOnClick: true,
            showCloseButton: true,
            closeButtonColor: undefined,
            showActionButton: false,
            actionButtonText: '',
            actionButtonColor: undefined
        };
        this.buttonArr = [{
                id: 'default',
                text: 'OK',
                color: 'primary',
                type: 'basic',
                icon: ''
            }];
        this.confirmConfig = {
            title: 'Are You Sure?',
            titleSize: 28,
            message: 'This action cannot be reversed!',
            messageSize: 16,
            matIcon: 'access_alarm',
            iconAnimation: 'shake',
            iconColor: '',
            buttons: [],
            disableClose: true,
            autoFocus: true,
            restoreFocus: true,
            width: undefined,
        };
    }
    AppComponent.prototype.addBtn = function () {
        this.buttonArr.push({
            id: '1',
            text: 'OK',
            color: 'primary',
            type: 'basic',
            icon: ''
        });
    };
    AppComponent.prototype.removeBtn = function (idx) {
        this.buttonArr.splice(idx, 1);
    };
    AppComponent.prototype.openToaster = function (title, message) {
        var toasterRef = this.alertService.toaster(this.toasterConfig);
        toasterRef.afterDismissed().subscribe(function () {
            console.log('The toaster was dismissed!');
        });
        toasterRef.onAction().subscribe(function () {
            console.log('Toaster action button was clicked!');
        });
    };
    AppComponent.prototype.openConfirmDialogue = function () {
        this.confirmConfig.buttons = this.buttonArr;
        console.log(this.confirmConfig.buttons);
        var dialogueRef = this.alertService.confirm(this.confirmConfig);
        dialogueRef.afterClosed().subscribe(function (confirmResult) {
            console.log(confirmResult);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_2__["AlertServiceService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _alert_service_alert_dialogue_confirm_alert_dialogue_confirm_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component */ "./src/app/alert-service/alert-dialogue-confirm/alert-dialogue-confirm.component.ts");
/* harmony import */ var _alert_service_alert_snackbar_toaster_alert_snackbar_toaster_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component */ "./src/app/alert-service/alert-snackbar-toaster/alert-snackbar-toaster.component.ts");
/* harmony import */ var _alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert-service/alert-service.service */ "./src/app/alert-service/alert-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _alert_service_alert_dialogue_confirm_alert_dialogue_confirm_component__WEBPACK_IMPORTED_MODULE_5__["AlertDialogueConfirmComponent"],
                _alert_service_alert_snackbar_toaster_alert_snackbar_toaster_component__WEBPACK_IMPORTED_MODULE_6__["AlertSnackbarToasterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]
            ],
            providers: [_alert_service_alert_service_service__WEBPACK_IMPORTED_MODULE_7__["AlertServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [_alert_service_alert_dialogue_confirm_alert_dialogue_confirm_component__WEBPACK_IMPORTED_MODULE_5__["AlertDialogueConfirmComponent"], _alert_service_alert_snackbar_toaster_alert_snackbar_toaster_component__WEBPACK_IMPORTED_MODULE_6__["AlertSnackbarToasterComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/d/dd-ngx-alerts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map