(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-button_2.entry.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ionic-super-tabs/core/dist/esm/super-tab-button_2.entry.js ***!
  \**********************************************************************************/
/*! exports provided: super_tab_button, super_tabs_toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tab_button", function() { return SuperTabButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "super_tabs_toolbar", function() { return SuperTabsToolbarComponent; });
/* harmony import */ var _core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-7e187e4f.js */ "./node_modules/@ionic-super-tabs/core/dist/esm/core-7e187e4f.js");
/* harmony import */ var _utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils-b0b0ce49.js */ "./node_modules/@ionic-super-tabs/core/dist/esm/utils-b0b0ce49.js");



const SuperTabButtonComponent = class {
    constructor(hostRef) {
        Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** @internal */
        this.scrollableContainer = false;
    }
    componentWillLoad() {
        this.indexChildren();
    }
    componentDidLoad() {
        const slot = this.el.shadowRoot.querySelector('slot');
        slot.addEventListener('slotchange', () => {
            this.indexChildren();
        });
    }
    indexChildren() {
        this.label = this.el.querySelector('ion-label');
        this.icon = this.el.querySelector('ion-icon');
    }
    render() {
        return (Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "button", "aria-label": this.label ? this.label.innerText : false, "aria-disabled": this.disabled ? 'true' : false, "aria-selected": this.active ? 'true' : 'false', class: {
                'ion-activatable': true,
                'ion-focusable': true,
                'icon-only': !!this.icon && !this.label,
                'label-only': !!this.label && !this.icon,
                active: Boolean(this.active),
                scrollableContainer: this.scrollableContainer,
            } }, Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", { type: "unbounded" })));
    }
    get el() { return Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
    static get style() { return ":host{-ms-flex:1 0 0px;flex:1 0 0;cursor:pointer;position:relative;max-width:100%;overflow:hidden;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform:translateZ(0);transform:translateZ(0);height:72px;padding:0 24px;-webkit-touch-callout:none}:host,:host ::slotted(ion-icon),:host ::slotted(ion-label),:host ion-icon,:host ion-label{-webkit-user-select:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased}:host ::slotted(ion-icon),:host ::slotted(ion-label),:host ion-icon,:host ion-label{-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.15s;transition-duration:.15s;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-delay:0s;transition-delay:0s;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host ::slotted(ion-label),:host ion-label{color:var(--st-label-color-inactive,var(--st-base-color-inactive));line-height:var(--st-label-line-height,14px);height:var(--st-label-height,14px);font-size:var(--st-label-font-size,14px);text-transform:var(--st-label-text-transform,uppercase);font-weight:var(--st-label-font-weight,500);padding-bottom:var(--st-label-padding-bottom,16px)}:host ::slotted(ion-icon),:host ion-icon{color:var(--st-icon-color-inactive,var(--st-base-color-inactive));fill:var(--st-icon-color-inactive,var(--st-base-color-inactive));min-height:var(--st-icon-size,24px);min-width:var(--st-icon-size,24px);font-size:var(--st-icon-size,24px);padding-top:12px}\@media (hover:hover){:host(:hover){background:rgba(var(--ion-color-contrast-rgb),.04)}}:host(.active) ::slotted(ion-icon),:host(.active) ::slotted(ion-label),:host(.active) ion-icon,:host(.active) ion-label{-webkit-transition-delay:75ms;transition-delay:75ms}:host(.active) ::slotted(ion-label),:host(.active) ion-label{color:var(--st-label-color-active,var(--st-base-color-active))}:host(.active) ::slotted(ion-icon),:host(.active) ion-icon{color:var(--st-icon-color-active,var(--st-base-color-active));fill:var(--st-icon-color-active,var(--st-base-color-active))}:host(.icon-only),:host(.label-only){height:48px;-ms-flex-pack:center;justify-content:center}:host(.scrollableContainer){-ms-flex-positive:0;flex-grow:0;-ms-flex-preferred-size:auto;flex-basis:auto;min-width:90px;max-width:360px}::slotted{-ms-flex-negative:1;flex-shrink:1}:host(.label-only) ::slotted(ion-label),:host(.label-only) ion-label{padding-bottom:0}:host(.icon-only) ::slotted(ion-icon),:host(.icon-only) ion-icon{padding-top:0}"; }
};

const SuperTabsToolbarComponent = class {
    constructor(hostRef) {
        Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Whether to show the indicator. Defaults to `true`
         */
        this.showIndicator = true;
        /**
         * Background color. Defaults to `'primary'`
         */
        this.color = 'primary';
        /**
         * Whether the toolbar is scrollable. Defaults to `false`.
         */
        this.scrollable = false;
        /**
         * If scrollable is set to true, there will be an added padding
         * to the left of the buttons.
         *
         * Setting this property to false will remove that padding.
         *
         * The padding is also configurable via a CSS variable.
         */
        this.scrollablePadding = true;
        this.buttons = [];
        this.activeTabIndex = 0;
        this.leftThreshold = 0;
        this.rightThreshold = 0;
        this.buttonClick = Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "buttonClick", 7);
        this.queue = Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this, "queue");
    }
    async componentDidLoad() {
        this.debug('componentDidLoad');
        await this.queryButtons();
        this.slot = this.el.shadowRoot.querySelector('slot');
        this.slot.addEventListener('slotchange', this.onSlotChange.bind(this));
        if (this.activeTabIndex > 0) {
            requestAnimationFrame(() => {
                this.alignIndicator(this.activeTabIndex);
            });
        }
    }
    componentWillUpdate() {
        this.debug('componentWillUpdate fired');
        this.updateThresholds();
    }
    /** @internal */
    setActiveTab(index, align, animate) {
        this.activeTabIndex = index;
        this.markButtonActive(this.buttons[index]);
        if (align) {
            this.alignIndicator(index, animate);
        }
        return Promise.resolve();
    }
    /** @internal */
    setSelectedTab(index, animate) {
        this.alignIndicator(index, animate);
        return Promise.resolve();
    }
    /** @internal */
    moveContainer(scrollX, animate) {
        if (!this.buttonsContainerEl) {
            this.debug('moveContainer called before this.buttonsContainerEl was defined');
            return Promise.resolve();
        }
        Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["s"])(this.buttonsContainerEl, scrollX, 0, animate ? this.config.transitionDuration : 0, this.queue);
        return Promise.resolve();
    }
    onClick(ev) {
        if (!ev || !ev.target) {
            return;
        }
        let button = ev.target;
        const tag = button.tagName.toLowerCase();
        if (tag !== 'super-tab-button') {
            if (tag === 'super-tabs-toolbar') {
                return;
            }
            button = button.closest('super-tab-button');
        }
        this.setActiveTab(button.index, true, true);
        this.buttonClick.emit(button);
    }
    async onTouchStart(ev) {
        if (!this.scrollable) {
            return;
        }
        this.debug('onTouchStart called with: ', ev);
        const coords = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
        const vw = this.el.clientWidth;
        if (coords.x < this.leftThreshold || coords.x > vw - this.rightThreshold) {
            // ignore this gesture, it started in the side menu touch zone
            return;
        }
        this.initialCoords = coords;
        this.lastPosX = coords.x;
    }
    async onTouchMove(ev) {
        if (!this.buttonsContainerEl || !this.scrollable || !this.initialCoords || typeof this.lastPosX !== 'number') {
            this.debug('onTouchMove called before this.buttonsContainerEl was defined');
            return Promise.resolve();
        }
        const coords = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["p"])(ev);
        if (!this.isDragging) {
            const shouldCapture = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["c"])(coords, this.initialCoords, this.config);
            if (!shouldCapture) {
                if (Math.abs(coords.y - this.initialCoords.y) > 100) {
                    this.initialCoords = void 0;
                    this.lastPosX = void 0;
                }
                return;
            }
            // gesture is good, let's capture all next onTouchMove events
            this.isDragging = true;
        }
        if (!this.isDragging) {
            return;
        }
        ev.stopImmediatePropagation();
        // get delta X
        const deltaX = this.lastPosX - coords.x;
        // update last X value
        this.lastPosX = coords.x;
        if (deltaX === 0) {
            return;
        }
        // scroll container
        const scrollLeft = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.buttonsContainerEl);
        const scrollX = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.buttonsContainerEl, deltaX);
        if (scrollX === scrollLeft) {
            return;
        }
        this.moveContainer(scrollX, false);
    }
    async onTouchEnd() {
        this.debug('onTouchEnd called');
        this.isDragging = false;
        this.initialCoords = void 0;
        this.lastPosX = void 0;
    }
    async onSlotChange() {
        this.debug('onSlotChange fired');
        await this.queryButtons();
        await this.alignIndicator(this.activeTabIndex);
    }
    async queryButtons() {
        const buttons = Array.from(this.el.querySelectorAll('super-tab-button'));
        await Promise.all(buttons.map(b => b.componentOnReady()));
        if (!buttons) {
            return;
        }
        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];
            button.index = i;
            button.scrollableContainer = this.scrollable;
            if (this.activeTabIndex === i) {
                this.markButtonActive(button);
            }
        }
        this.buttons = buttons;
    }
    updateThresholds() {
        if (!this.config) {
            return;
        }
        if (this.config.sideMenu === 'both' || this.config.sideMenu === 'left') {
            this.leftThreshold = this.config.sideMenuThreshold;
        }
        if (this.config.sideMenu === 'both' || this.config.sideMenu === 'right') {
            this.rightThreshold = this.config.sideMenuThreshold;
        }
    }
    markButtonActive(button) {
        if (!button) {
            return;
        }
        if (this.activeButton) {
            this.activeButton.active = false;
        }
        button.active = true;
        this.activeButton = button;
    }
    adjustContainerScroll(animate) {
        if (!this.buttonsContainerEl) {
            this.debug('adjustContainerScroll called before this.buttonsContainerEl was defined');
            return;
        }
        this.queue.read(() => {
            let pos;
            const ip = this.indicatorPosition;
            const iw = this.indicatorWidth;
            const mw = this.buttonsContainerEl.clientWidth;
            const sp = Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["g"])(this.buttonsContainerEl);
            const centerDelta = (mw / 2 - iw / 2);
            if (ip + iw + centerDelta > mw + sp) {
                // we need to move the segment container to the left
                const delta = ip + iw + centerDelta - mw - sp;
                pos = sp + delta;
            }
            else if (ip - centerDelta < sp) {
                // we need to move the segment container to the right
                pos = ip - centerDelta;
                pos = Math.max(pos, 0);
                pos = pos > ip ? ip - mw + iw : pos;
            }
            if (typeof pos === 'number') {
                this.moveContainer(pos, animate);
            }
        });
    }
    /**
     * Align the indicator with the selected button.
     * This will adjust the width and the position of the indicator element.
     * @param index {number} the active tab index
     * @param [animate] {boolean=false} whether to animate the transition
     */
    alignIndicator(index, animate = false) {
        this.debug('alignIndicator', index, animate);
        if (!this.indicatorEl) {
            this.debug('alignIndicator called before this.buttonsContainerEl was defined');
            return;
        }
        if (!this.showIndicator) {
            return;
        }
        this.queue.read(() => {
            const remainder = index % 1;
            const isDragging = this.isDragging = remainder > 0;
            let position, width;
            const floor = Math.floor(index), ceil = Math.ceil(index);
            const button = this.buttons[floor];
            if (!button) {
                return;
            }
            position = button.offsetLeft;
            width = button.clientWidth;
            if (this.isDragging && floor !== ceil) {
                const buttonB = this.buttons[ceil];
                const buttonBWidth = buttonB.clientWidth;
                const buttonBPosition = buttonB.offsetLeft;
                position += remainder * (buttonBPosition - position);
                width += remainder * (buttonBWidth - width);
            }
            this.indicatorPosition = position;
            this.indicatorWidth = width;
            if (this.scrollable) {
                this.adjustContainerScroll(animate || !isDragging);
            }
            this.debug('alignIndicator.pre-raf', this.indicatorPosition, this.indicatorWidth);
            requestAnimationFrame(() => {
                if (!this.showIndicator || this.indicatorEl) {
                    this.indicatorEl.style.setProperty('--st-indicator-position-x', this.indicatorPosition + 'px');
                    this.indicatorEl.style.setProperty('--st-indicator-scale-x', String(this.indicatorWidth / 100));
                    this.indicatorEl.style.setProperty('--st-indicator-transition-duration', this.isDragging ? '0' : `${this.config.transitionDuration}ms`);
                }
            });
        });
    }
    /**
     * Internal method to output values in debug mode.
     */
    debug(...vals) {
        Object(_utils_b0b0ce49_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.config, 'toolbar', vals);
    }
    render() {
        this.debug('Rendering');
        const cls = {};
        if (typeof this.color === 'string' && this.color.trim().length > 0) {
            cls['ion-color-' + this.color.trim()] = true;
        }
        return (Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "navigation", class: cls }, Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "buttons-container", ref: (ref) => this.buttonsContainerEl = ref }, Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null), this.showIndicator &&
            Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("super-tab-indicator", { ref: (ref) => this.indicatorEl = ref, toolbarPosition: this.el.assignedSlot.name }))));
    }
    get el() { return Object(_core_7e187e4f_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
    static get style() { return ":host{-ms-flex:0 1 auto;flex:0 1 auto;display:block;position:relative;background:var(--super-tabs-toolbar-background,var(--ion-color-base));overflow:visible;-webkit-box-sizing:border-box;box-sizing:border-box;pointer-events:auto;-ms-touch-action:pan-x;touch-action:pan-x;z-index:2;-ms-flex-order:-1;order:-1;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased}:host,:host .buttons-container{width:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}:host .buttons-container{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;overflow:hidden}:host(:not([no-border])):after{left:0;bottom:-8px;background-position:left 0 top 0;position:absolute;width:100%;height:8px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAIBAMAAAACWGKkAAAAFVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAASAQCkAAAAB3RSTlMFTEIzJBcOYhQUIwAAAB9JREFUCNdjEIQCBiUoYDCGAgYXKGAIhQKGNChgwAAAorMLKSCkL40AAAAASUVORK5CYII=);background-repeat:repeat-x;content:\"\";z-index:3;-webkit-transform:translateZ(0);transform:translateZ(0)}:host([scrollable]) .buttons-container{will-change:scroll-position}:host([scrollable][scrollable-padding]) .buttons-container{padding-left:var(--st-scrollable-toolbar-padding-left,52px);width:calc(100% - var(--st-scrollable-toolbar-padding-left, $st-scrollable-toolbar-padding-left))}"; }
};




/***/ })

}]);
//# sourceMappingURL=0-es2015.js.map