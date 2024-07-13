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
const insertDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, utils_1.default)();
    const userQuery = "insert into users(email, password) values ($1, $2) returning id;";
    const userValues = ["test3@gmail.com", "test1234"];
    const response = yield client.query(userQuery, userValues);
    const todoQuery = "insert into todos(title, description, user_id, done) values ($1, $2, $3, $4);";
    const todoValues = ["Buy groceries", "Milk, Bread, Eggs", response.rows[0].id, false];
    yield client.query(todoQuery, todoValues);
    yield client.end();
    console.log("Data added successfully");
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield insertDb();
    });
}
main();
