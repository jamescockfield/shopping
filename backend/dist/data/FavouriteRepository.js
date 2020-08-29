"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _favourites;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavouriteRepository = void 0;
class FavouriteRepository {
    constructor() {
        _favourites.set(this, void 0);
        __classPrivateFieldSet(this, _favourites, []);
    }
    setFavourite(productGuid, favourite) {
        return true;
    }
}
exports.FavouriteRepository = FavouriteRepository;
_favourites = new WeakMap();
//# sourceMappingURL=FavouriteRepository.js.map