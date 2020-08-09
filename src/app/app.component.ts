import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bank-ui-app';

  langs = ['en', 'fr'];

  year= null
 
 constructor(private translateService: TranslateService) {

  this.year = new Date().getFullYear();
 }

 public ngOnInit(): void {
   let browserlang = this.translateService.getBrowserLang();
   console.log("browserlang = ", browserlang)
   if (this.langs.indexOf(browserlang) > -1) {
     this.translateService.setDefaultLang(browserlang);
   } else {
     this.translateService.setDefaultLang('en');
   }
 }
  
}
