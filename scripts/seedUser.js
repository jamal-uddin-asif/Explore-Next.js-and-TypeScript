"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var bcrypt = require("bcrypt");
var mongodb_1 = require("../src/lib/mongodb");
function seedUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var client, db, saltRounds, _a, ADMIN_USERNAME, ADMIN_EMAIL, ADMIN_PASSWORD, USER_USERNAME, USER_EMAIL, USER_PASSWORD, hashedAdminPassword, hashedUserPassword;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, mongodb_1.default];
                case 1:
                    client = _b.sent();
                    db = client.db();
                    saltRounds = 10;
                    _a = process.env, ADMIN_USERNAME = _a.ADMIN_USERNAME, ADMIN_EMAIL = _a.ADMIN_EMAIL, ADMIN_PASSWORD = _a.ADMIN_PASSWORD, USER_USERNAME = _a.USER_USERNAME, USER_EMAIL = _a.USER_EMAIL, USER_PASSWORD = _a.USER_PASSWORD;
                    if (!ADMIN_USERNAME ||
                        !ADMIN_EMAIL ||
                        !ADMIN_PASSWORD ||
                        !USER_USERNAME ||
                        !USER_EMAIL ||
                        !USER_PASSWORD) {
                        throw new Error("Missing required environment variables");
                    }
                    return [4 /*yield*/, bcrypt.hash(ADMIN_PASSWORD, saltRounds)];
                case 2:
                    hashedAdminPassword = _b.sent();
                    return [4 /*yield*/, bcrypt.hash(USER_PASSWORD, saltRounds)];
                case 3:
                    hashedUserPassword = _b.sent();
                    return [4 /*yield*/, db.collection("users").insertMany([
                            {
                                username: ADMIN_USERNAME,
                                email: ADMIN_EMAIL,
                                role: "ADMIN",
                                password: hashedAdminPassword,
                                createdAt: new Date(),
                            },
                            {
                                username: USER_USERNAME,
                                email: USER_EMAIL,
                                role: "USER",
                                password: hashedUserPassword,
                                createdAt: new Date(),
                            },
                        ])];
                case 4:
                    _b.sent();
                    console.log("Admin and User seeded successfully");
                    return [2 /*return*/];
            }
        });
    });
}
seedUsers()
    .then(function () { return process.exit(0); })
    .catch(function (error) {
    console.error("Seeding failed:", error);
    process.exit(1);
});
