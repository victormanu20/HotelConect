import { Injectable } from '@angular/core';
import {AppService} from './app.service'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private userRole = '';

  constructor(public appService:AppService){

  }

  login(username: string, password: string) {
    // Lógica de autenticación
    // Aquí puedes realizar una petición HTTP al servidor para validar las credenciales
    // Si las credenciales son válidas, puedes establecer el estado de autenticación y el rol del usuario
    const users = this.appService.getUsers()
    const userSelect = users.find(user=> user.username === username && user.password ===password)
    if(userSelect){
      this.isLoggedIn = true;
      switch (userSelect.role) {
        case 'admin':
          this.userRole = 'admin';
          break;
        case 'user':
          this.userRole = 'user';          
          break;
            
            default:
              break;
      }
      localStorage.setItem('userData', JSON.stringify((userSelect)))
      return true
    }
    return false
  }

  logout() {
    // Simulación de cierre de sesión
    this.isLoggedIn = false;
    this.userRole = '';
    localStorage.removeItem('userData');

  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

  hasPermission(requiredRole: string): boolean {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
      this.userRole = userData.role
    }
    return this.userRole === requiredRole;
  }
}