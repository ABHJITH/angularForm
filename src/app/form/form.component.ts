import { Component, OnInit } from '@angular/core';
import { Formdata } from '../formdata';
import { FormSeriveService} from '../form-serive.service';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  model = new Formdata(null, null, null, null, false, false, false, false, false, null, null)

  
  constructor(private formservice:FormSeriveService) { }

  ngOnInit() {
      console.log(this.model)
  }
  onFormSubmit(userForm) {
    this.formservice.enroll(userForm);
    console.log(userForm.value)
  }
} 

