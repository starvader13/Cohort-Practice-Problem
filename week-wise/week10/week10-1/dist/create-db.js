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
const createDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const client = yield (0, utils_1.default)();
    const userQuery = `
        create table users(
            id serial primary key,
            email varchar(255) not null unique,
            password varchar(255) not null   
        );
    `;
    const todoQuery = `
        create table todos (
            id serial primary key,
            title text not null,
            description text,
            user_id integer references users(id),
            done boolean default false
        );
    `;
    yield client.query(userQuery);
    yield client.query(todoQuery);
    yield client.end();
    console.log("Table created successfully");
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield createDb();
    });
}
main();
