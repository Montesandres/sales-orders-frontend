import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Token } from './interface/token.interface';
import { apiUri } from '../app.module';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);
  private token?: Token;
  authPath = `${apiUri}/auth`;

  get currentToken(): Token | undefined {
    if (!this.token) return undefined;
    return structuredClone(this.token);
  }

  async logIn(userName: string, password: string): Promise<Token> {
    const token = await firstValueFrom(
      this.http.post<Token>(`${this.authPath}/login`, { userName, password })
    );
    this.token = token;
    localStorage.setItem('token', token.token);
    return token;
  }

   async checkAutentication():Promise<Token|null>{

    const token = localStorage.getItem('token');  
   
    if (token){
      const tokenData = await firstValueFrom(this.http.get<Token>(`${this.authPath}/revalite`));
      console.log(tokenData)
      this.token = tokenData;
      return tokenData
    }
    
    return null;
  }

  logOut() {
    this.token = undefined;
    localStorage.removeItem('token');
  }
}
