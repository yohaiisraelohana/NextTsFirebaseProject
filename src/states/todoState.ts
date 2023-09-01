import { atom } from "jotai";
import { TodoINTR } from "../types/todo";

export const todoListAtom  = atom<TodoINTR[]>([]);