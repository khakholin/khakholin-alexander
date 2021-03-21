import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    hide = true;
    signInForm = new FormGroup({
        login: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
    });

    constructor(private router: Router) { }

    onSignIn() {
        // TODO integrate
        if (true) {
            this.router.navigate(['/coin-keeper']);
        }
    }
}
