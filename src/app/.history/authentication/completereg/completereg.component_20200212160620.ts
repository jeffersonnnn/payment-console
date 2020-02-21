import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { first } from 'rxjs/operators';

// import { AuthenticationService } from '@app/core/services';

@Component({
  selector: 'app-completereg',
  templateUrl: './completereg.component.html',
  styleUrls: ['./completereg.component.scss']
})
export class CompleteregComponent implements OnInit {
  setupForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    // private authenticationService: AuthenticationService
      ) { }

  ngOnInit() {
    this.setupForm = this.formBuilder.group({
      // email: ['', Validators.required],
      // password: ['', Validators.required],

      firstName: [''],
      lastName: [''],
      email: [''],
      phoneNumber: [''],
      roleInput: [''],
      software: [''],
      industryTypeInput: [''],
      physicalBusinessAddressInput: [''],
      websiteURLText: [''],
      registrationStatusInput: ['']
    });

    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }
  get regStatus() {
    return this.setupForm.get('registrationStatusInput');
  }

  onSubmit() {
    this.submitted = true;

    if (this.setupForm.invalid) {
      return;
    }

    if (this.setupForm.value.registrationStatusInput === '/starter') {
      this.router.navigate(['activatereg']);
    } else if (this.setupForm.value.registrationStatusInput === 'registered') {
      this.router.navigate(['sim']);
    }

    // onNavigate(location) {
    //     if(location === 'your selected option') {
    //     this.router.navigate(['sim']);
    //   } else if(location === 'your another option') {
    //     this.router.navigate(['esaf']);
    //   }
    //  }
  }

}
