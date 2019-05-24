import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  login(email, password) {
    console.log("Send credentials here")
    let credentials = {
      "email": email,
      "password": password
    }
    return this.http.post<any>('http://yourApiRoutehere.com/api/login', credentials)
    .pipe(response => <any>response)
  }
}
