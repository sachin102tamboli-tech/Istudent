

export interface Istudent {
    id: number;
    name: string;
    age: number;
    course: string;
    mobile: string;
}

export interface IRes<T> {
    msg : string,
    obj : T
}