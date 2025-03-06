import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {

  // Check if the user is signed up 
  signUp (idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }
  
  // Check if the user is logged in by retrieving the token from localStorage
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if(decoded?.exp && decoded?.exp < Date.now() / 1000 )  {
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  // Retrieve the JWT token from localStorage
  getToken(): string {
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser;
  }

  // Store the JWT token in localStorage and redirect to the home page
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // Remove the JWT token from localStorage and redirect to the home page
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

// Export an instance of the AuthService class
export default new AuthService();
