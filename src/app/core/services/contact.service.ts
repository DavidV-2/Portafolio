import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../config/app.config';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) {}

  sendFormData(payload: { language: string; email: string }) {
    return this.http.post(AppConfig.scriptAppUrl, JSON.stringify(payload), {
      headers: { 'Content-Type': 'text/plain;charset=utf-8' }
    });
  }
}