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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importDefault(require("./utils"));
const readDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, utils_1.default)();
    const userQuery = "Select * from users;";
    const response = yield client.query(userQuery);
    response.rows.map(row => {
        console.log(`ID: ${row.id}, Email: ${row.email}`);
    });
    const userQueryWithEmail = "Select * from users where email=$1;";
    const userValuesWithEmail = ["test3@gmail.com"];
    const emailResponse = yield client.query(userQueryWithEmail, userValuesWithEmail);
    emailResponse.rows.map(row => {
        console.log(`ID: ${row.id}, Email: ${row.email}`);
    });
    yield client.end();
    console.log("Data fetched successfully");
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield readDb();
    });
}
main();
