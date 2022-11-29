import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent implements OnInit {

  mainForm!: FormGroup;
  personalInfoForm!: FormGroup;
  contactPreferenceCtrl!: FormControl;
  phoneCtrl!: FormControl;
  emailCtrl!: FormControl;
  confirmEmailCtrl!: FormControl;
  emailForm!: FormGroup;
  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;
  loginInfoForm!: FormGroup;
  showEmailCtrl$!: Observable<boolean>;
  showPhoneCtrl$!: Observable<boolean>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFromControls();
    this.initMainForm();  
    this.initFormObservables();

  }
  initFormObservables() {
    this.showEmailCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map(preference => preference === 'email'),
      tap(showEmailCtrl => {
        if (showEmailCtrl) {
            this.emailCtrl.setValidators([
                Validators.required,
                Validators.email]);
            this.confirmEmailCtrl.setValidators([
                Validators.required,
                Validators.email
            ]);
        } else {
            this.emailCtrl.clearValidators();
            this.confirmEmailCtrl.clearValidators();
        }
        this.emailCtrl.updateValueAndValidity();
        this.confirmEmailCtrl.updateValueAndValidity();
    })
    );
    this.showPhoneCtrl$ = this.contactPreferenceCtrl.valueChanges.pipe(
      startWith(this.contactPreferenceCtrl.value),
      map(preference => preference === 'phone'),
      tap(showPhoneCtrl => {
        if (showPhoneCtrl) {
            this.phoneCtrl.setValidators([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10)

            ]);
        } else {
            this.phoneCtrl.clearValidators();
        }
    })
    )
  }

  initMainForm(): void {

    this.mainForm = this.formBuilder.group({
      personalInfo: this.personalInfoForm,
      contactPreference: this.contactPreferenceCtrl,
      email: this.emailForm,
      phone: this.phoneCtrl,
      loginInfo :this.loginInfoForm
    });
    // throw new Error('Method not implemented.');
  }

  initFromControls(): void {
    this.personalInfoForm= this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
    });
    this.contactPreferenceCtrl = this.formBuilder.control('email');
    this.phoneCtrl = this.formBuilder.control('');
    this.emailCtrl = this.formBuilder.control('');
    this.confirmEmailCtrl = this.formBuilder.control('');
    this.emailForm = this.formBuilder.group({
      email: this.emailCtrl,
      confirm: this.confirmEmailCtrl
    });
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
    this.confirmPasswordCtrl = this.formBuilder.control('', Validators.required);
    this.loginInfoForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: this.passwordCtrl,
      confirmPassword: this.confirmPasswordCtrl
    });

    

    // throw new Error('Method not implemented.');
  }

  onSubmitForm(){
    console.log('====================================');
    console.log(this.mainForm.value);
    console.log('====================================');
  }

  getFormControlErrorText(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Ce champ est requis';
    } else if (ctrl.hasError('email')) {
        return 'Merci d\'entrer une adresse mail valide';
    } else {
        return 'Ce champ contient une erreur';
    }
  }

}
