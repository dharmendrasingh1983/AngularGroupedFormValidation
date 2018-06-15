import { Component, OnInit, Input } from '@angular/core';
import { Schema } from '../../staticItems/schema';
import { isNgTemplate } from '@angular/compiler';
import { ComponentModel } from '../../models/componentModel';
import { NgForm, FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ComponentItemModel } from '../../models/componentItemModel';
import { MatDialog, MatDialogRef, } from '@angular/material';
import { ChildComponentComponent } from '../child-component/child-component.component';
import { isArray } from 'util';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  panelOpenState: boolean = true;
  componentData: Array<ComponentModel>;
  public itmeForm: FormGroup;
  animal: string;
  name: string;
  dialogRef: any;
  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) {

  }

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
    let formgroupbuilder = this.formBuilder.group({});
    this.componentData.forEach(element => {
      let fGroup = new FormGroup({});
      element.componentItems.forEach(element1 => {
        let control: FormControl = new FormControl('', [element1.required ? Validators.required : Validators.nullValidator]);
        fGroup.addControl(element1.name, control);
      });
      formgroupbuilder.addControl(element.groupName, fGroup);
    });

    this.itmeForm = formgroupbuilder;

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
                let keyValueOption=[];
                element[key].forEach(optionObj => {
                  keyValueOption.push({key:Object.keys(optionObj)[0],value:optionObj[Object.keys(optionObj)[0]]});
                });
                com[propName]=keyValueOption;
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

  onSubmit(form: NgForm) {
    console.log(form.valid);
    console.log(form.value);
    if (form.valid)
      this.openDialog(form.value);

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
}
