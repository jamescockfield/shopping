"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _users;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const userSeed = require(process.cwd() + "/seed/userSeed.js");
const users = userSeed();
class UserRepository {
    constructor() {
        _users.set(this, void 0);
        __classPrivateFieldSet(this, _users, userSeed());
    }
    authenticate(username, password) {
        const matchingUsers = __classPrivateFieldGet(this, _users).filter(user => user.email === username && user.password === password);
        return matchingUsers.length;
    }
}
exports.UserRepository = UserRepository;
_users = new WeakMap();
//# sourceMappingURL=UserRepository.js.map