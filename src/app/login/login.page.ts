import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = new FormGroup({
    usuario: new FormControl(''),
    pass: new FormControl('')
  });

  constructor(
    private menu: MenuController,
    private router: Router,
    private alert: ToastService,
    private authService: AuthenticationService
    ) { }

  ngOnInit() {
    if(this.authService.getCurrentId() !== null)
        this.router.navigate(['/asistencia']);
    else
      this.menu.enable(false);
  }


  public login():void {
    console.log('OnSubmit');
    console.log(this.formLogin.value);

    this.authService.login(this.formLogin.value.usuario, this.formLogin.value.pass)
      .subscribe(response => {
        
        if((response.data.length != 0 )){
                console.log(response)
                this.router.navigate(['/asistencia']);
                this.alert.success('Sesion iniciada correctamente');
        }else{
                console.log(response.data)
                this.alert.warning('Usuario o contraseña incorrecto');
             }
      },(error ) => {
             console.log(error)
    });
    
  }
  
}


