export interface INote {
    title:string,
    content:string,
    category:"Work" | "Personal" | "Ideas" | "Others",
    pinned:boolean,
    tags:{
        label:string,
        color:string
    }
}