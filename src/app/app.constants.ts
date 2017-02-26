import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public Server: string = 'http://localhost:8000/';
    public ApiUrl: string = 'courses/';
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
