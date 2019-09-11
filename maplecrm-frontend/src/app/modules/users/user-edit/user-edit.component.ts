import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User, Role } from '@app/_core';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html'
})
export class UserEditComponent implements OnInit {

  @Input() user: User;
  @Input() roles: Role[];

  @Output() addRemoveRole = new EventEmitter<Role>();
  @Output() submitted = new EventEmitter<User>();
  @Output() canceled = new EventEmitter<string>();

  private angForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.roles = this.roles.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    }).map(r => {
      r = { ...r, granted: this.user.roles.includes(r.name) }
      return r;
    })
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      name: [this.user.name, Validators.required],
      imageUrl: [this.user.imageUrl]
    })
  }

  onSubmit() {
    if (this.angForm.invalid)
      return;

    this.submitted.emit(this.angForm.value);
  }

}