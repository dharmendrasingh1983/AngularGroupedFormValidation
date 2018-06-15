import { Component, OnInit } from '@angular/core';
import { ComponentModel } from '../../models/componentModel';
import { Schema } from '../../staticItems/schema';
import { ComponentItemModel } from '../../models/componentItemModel';
import { isArray } from 'util';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ChildComponentComponent } from '../child-component/child-component.component';

@Component({
  selector: 'app-template-form-component',
  templateUrl: './template-form-component.component.html',
  styleUrls: ['./template-form-component.component.css']
})
export class TemplateFormComponentComponent implements OnInit {
  panelOpenState: boolean = true;
  componentData: Array<ComponentModel>;
  dialogRef: any;
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    let jsonResult = Schema.schems;
    let components: ComponentModel[] = [];
    let formGroup = {};
    if (jsonResult != undefined) {
      for (let key in jsonResult) {
        let a = key;
        if (key === 'components') {
          for (let cimKey in jsonResult[key]) {
            let title = jsonResult[key][cimKey].title;
            let comData = this.getChildComponent(jsonResult[key][cimKey]);
            components.push(new ComponentModel(title, cimKey, comData));
          }
        }
      }
      this.componentData = components;
    }
  }

  getChildComponent(comItems) {
    let componentsFieldsItem: ComponentItemModel[] = [];
    if (comItems != undefined) {
      comItems.fields.forEach(element => {
        let com = new ComponentItemModel();
        for (let key in element) {
          let propertyNames = Object.getOwnPropertyNames(com);
          for (let comKey in propertyNames) {
            let propName = propertyNames[comKey];
            if (propName === key) {
              if (isArray(element[key])) {
                let keyValueOption = [];
                element[key].forEach(optionObj => {
                  keyValueOption.push({ key: Object.keys(optionObj)[0], value: optionObj[Object.keys(optionObj)[0]] });
                });
                com[propName] = keyValueOption;
              } else {
                com[propName] = element[key];
              }
            }
          }
        }
        componentsFieldsItem.push(com);
      });
      return componentsFieldsItem;
    }
  }


  onSubmit(form:NgForm){

    if(form.valid){
      this.openDialog(form.value);
    }
  }

  openDialog(formData): void {
    this.dialogRef = this.dialog.open(ChildComponentComponent, {
      height: '400px',
      width: '600px',
      data: formData
    });

    this.dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
}
