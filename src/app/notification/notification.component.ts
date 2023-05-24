import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LoginService } from '../login/services/login.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  //For caching last language
  currentLang:string;

  constructor(private router: Router,
    public translate:TranslateService ,
    private loginService: LoginService,
    @Inject(DOCUMENT) private document: Document)
    {
      this.currentLang=localStorage.getItem('langi18n') || 'en';
      this.currentLangChange(this.currentLang);
     }

  ngOnInit(): void {
  }
  logout() {
    this.loginService.userLogOut();
    // this.router.navigate(['/'], { relativeTo: this.activatedRoute });
  }
  currentLangChange(lang:string) {
    localStorage.setItem('langi18n', lang);
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = lang === "ar" ? "rtl" : "ltr";
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.changeCssFile(lang);

  }
  //Method to switch between to styles
  changeCssFile(lang: string) {
    let headTag = this.document.getElementsByTagName("head")[0] as HTMLHeadElement;
    let existingLink = this.document.getElementById("langCss") as HTMLLinkElement;
    let bundleName = lang === "ar" ? "styles-ar.css":"styles.css";
    if (existingLink) {
       existingLink.href = bundleName;
    } else {
       let newLink = this.document.createElement("link");
       newLink.rel = "stylesheet";
       newLink.type = "text/css";
       newLink.id = "langCss";
       newLink.href = bundleName;
       headTag.appendChild(newLink);
    }
    
}
}