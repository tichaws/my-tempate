import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';
import {RouterTestingModule} from '@angular/router/testing'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UnauthorComponent,
        AuthorComponent
      ],
      imports: [ RouterTestingModule ] 
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
});

@Component({
  selector: 'app-unauthorization',
  template: ''
})
class UnauthorComponent {
}

@Component({
  selector: 'app-authorization',
  template: ''
})
class AuthorComponent {
}