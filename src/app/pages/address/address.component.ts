import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  get addressLineControl() {
    return this.addressForm.get('addressLine');
  }

  addressForm: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder
    ) { }

  ngOnInit() {
  }

  processImg(img: any) {
    console.log(img);
  }
}
