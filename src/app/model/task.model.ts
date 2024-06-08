import { Apartment } from "./apartment.model";

export class Task{
    id?: number;
    name?: string;
    description?: string;
    completed?: boolean;
    apartment?: Apartment;
    userId?: number;
}