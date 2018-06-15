import { ComponentItemModel } from "./componentItemModel";

export class ComponentModel {

    constructor(public title: string,public groupName:string, public componentItems: ComponentItemModel[]) { }

}