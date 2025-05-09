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
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        if (n < 0) {
            throw new Error("Negative number not allowed");
        }
        yield new Promise(res => setTimeout(res, 1000)); // Simulate async operation
        return n * n;
    });
}
squareAsync(4).then(console.log); // Output after 1s: 16
squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
