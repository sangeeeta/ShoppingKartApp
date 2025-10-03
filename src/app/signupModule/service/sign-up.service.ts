import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { content, environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { apiUrls } from '../../sharedModule/constants/apiUrl';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  private baseUrl = environment.API_URL;

  constructor(private readonly http: HttpClient) { }

  saveUserDetails(userDetails: any) {
    const url = `${this.baseUrl}/${apiUrls.saveUpdateProduct}`;
    const header = new HttpHeaders({
      'content-type': content.contentType
    });
    const requestBody = JSON.stringify(userDetails);
    return this.http.post(url, requestBody, { headers: header });
  }


}
