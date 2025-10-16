import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // Claves SOLO para esta app
  private PREFIX = 'app:primerProyecto:';
  private KEY_USER = this.PREFIX + 'user';
  private KEY_PASS = this.PREFIX + 'pass';
  private KEY_LOGGED = this.PREFIX + 'loggedIn';

  login(username: string, password: string): boolean {
    const storedUser = (localStorage.getItem(this.KEY_USER) ?? '').trim();
    const storedPass = (localStorage.getItem(this.KEY_PASS) ?? '').trim();

    const ok =
      storedUser === (username ?? '').trim() &&
      storedPass === (password ?? '').trim();

    if (ok) localStorage.setItem(this.KEY_LOGGED, 'true');
    else localStorage.removeItem(this.KEY_LOGGED);

    return ok;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.KEY_LOGGED) === 'true';
  }

  logout() {
    localStorage.removeItem(this.KEY_LOGGED);
  }
}
