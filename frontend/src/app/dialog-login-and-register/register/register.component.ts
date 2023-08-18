import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SignupModel } from 'src/app/models/signup.model';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  @Output() newItemEvent = new EventEmitter<boolean>();

  addNewItem() {
    this.newItemEvent.emit(true);
  }

  constructor(
    private _coreService: CoreService,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this._genereteForm();
  }

  public signupForm!: FormGroup;

  private _genereteForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  url = '';

  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      console.log(event.target.files[0]);
      reader.readAsDataURL(event.target.files[0]); 
      reader.onload = (e: any) => { 
      var img = new Image;
        this.url = e.target.result;
        img.src = e.target.result;
        // console.log(img.width);
        console.log(this.url);
      }
    }
  }

  createSignup() {
    const signup = new SignupModel();
    signup.email = this.signupForm.get('email')?.value;
    signup.password = this.signupForm.get('password')?.value;
    signup.name = this.signupForm.get('name')?.value;
    signup.phone = this.signupForm.get('phone')?.value;

    console.log("signup: ", signup);
    try {
      this._coreService.save(signup).pipe().subscribe(
        (res : any) => {  
          setTimeout(() => {
            this.toastr.success('Create data connect ', 'Success');
          }, 2000);
        },
        (err) => {
          console.error("err: ", err);
          setTimeout(() => {
            this.toastr.error('Create data not connect ', 'Error');
          }, 2000);
        }
      )
    } catch(err) {
      console.error("Create data error: ", err);
    } 
  }

}
