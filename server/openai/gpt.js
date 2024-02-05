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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
exports.askGPT = void 0;
var dotenv_1 = require("dotenv");
var openai_1 = require("openai");
(0, dotenv_1.configDotenv)();
var configuration = new openai_1.Configuration({
    apiKey: process.env.OPENAI_KEY
});
var openai = new openai_1.OpenAI(configuration);
var ALLOWED_PROMPTS = [
    "course",
    "best course",
    "trending course",
    "best ai coures",
    "future trending course",
    "Hello",
    "hello",
    "Hi",
    "How are you",
    "What's up",
    "health",
    "nutrition",
    "diet",
    "meal",
    "recipe",
    "grocery",
    "navigation",
    "meal plan",
    "course list",
    "course list",
    "navigation",
    "Live Support",
    "doubt session",
    "clear doubt",
    "support",
    "teachers",
];
var askGPT = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var prompt_1, isAllowedPrompt, completion, urls, result, imgTags, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("Started asking GPT");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                prompt_1 = req.body.prompt;
                isAllowedPrompt = ALLOWED_PROMPTS.some(function (keyword) {
                    return prompt_1.toLowerCase().includes(keyword.toLowerCase());
                });
                if (prompt_1.toLowerCase().includes("live support" || "teachers")) {
                    return [2 /*return*/, res.status(200).json({
                            result: "Support page link: ".concat(process.env.BASE_URL, "/support"),
                        })];
                }
                if (prompt_1.toLowerCase().includes("coures")) {
                    return [2 /*return*/, res.status(200).json({
                            result: "Meal plan page link: ".concat(process.env.BASE_URL, "/user/courses"),
                        })];
                }
                // If the prompt is not related to the allowed topics, return an error message
                if (!isAllowedPrompt) {
                    return [2 /*return*/, res.status(200).json({
                            result: "Sorry, I can only help you with that related questions and navigating the app",
                        })];
                }
                return [4 /*yield*/, openai.createCompletion({
                        model: "text-davinci-003",
                        prompt: " ".concat(prompt_1, " "),
                        temperature: 0.6,
                        max_tokens: 500,
                    })];
            case 2:
                completion = _a.sent();
                urls = completion.data.choices[0].text.match(/(https?:\/\/[^\s]+\.(?:jpg|jpeg|png|gif))/);
                result = completion.data.choices[0].text;
                // If image URLs were found, append them to the response
                if (urls) {
                    imgTags = urls
                        .map(function (url) { return "<img src=\"".concat(url, "\" alt=\"related image\" width=\"300\">"); })
                        .join("");
                    result += "\n" + imgTags;
                }
                console.log({ result: result });
                return [2 /*return*/, res.status(200).json({ result: result })];
            case 3:
                error_1 = _a.sent();
                // Consider adjusting the error handling logic for your use case
                if (error_1.response) {
                    console.error(error_1.response.status, error_1.response.data);
                    res.status(error_1.response.status).json(error_1.response.data);
                }
                else {
                    console.error("Error with OpenAI API request: ".concat(error_1.message));
                    res.status(500).json({
                        error: {
                            message: "An error occurred during your request.",
                        },
                    });
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.askGPT = askGPT;
