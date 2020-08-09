import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardDetail } from 'src/app/model/card-detail';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css'],
})
export class CardPaymentComponent implements OnInit {
  private cardDetail = 'assets/cardDetail.json';
  private typePriorityList: string[] = ['Platinium', 'Gold', 'Silver'];
  selectedBankIndex: string;
  amount: number;
  selectCard:boolean=  false;
  cardDetailList: CardDetail[] = [];
  showMsg:boolean = false;
  msg:string = "";

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService,
    
    private authService: AuthenticationService
  ) {
    this.selectCard = false;
    this.showMsg = false;
    this.msg = "";
  }
  public getJSON(): Observable<any> {
    return this.http.get(this.cardDetail);
  }
  ngOnInit(): void {
    
    this.cardDetailList = [];
    this.getJSON()
      .subscribe(
        (data) => {
          this.cardDetailList = data;
        },
        (error) => {
          console.log('Error reading data for bank');
        }
      )
      .add(() => {
        console.log('Reading of data .' + this.cardDetailList.length);
        if (this.cardDetailList && this.cardDetailList.length > 0) {
          // Sort by Card type
          this.cardDetailList = this.cardDetailList.sort(
            (cardDetail1: CardDetail, cardDetail2: CardDetail) => {

              // Card Type sort
              let typeIndex: number =
                this.typePriorityList.indexOf(cardDetail1.type) -
                this.typePriorityList.indexOf(cardDetail2.type);
  
                // Same card type then sort by score
              if (typeIndex == 0) {
                if (cardDetail1.score == cardDetail2.score) {
                  return 0;
                }
                return cardDetail1.score > cardDetail2.score ? -1 : 1;
              } else if (typeIndex > 0) {
                return 1;
              } else {
                return -1;
              }
            }
          );  
        }
        
      });
  }

  removeErrorMessage() {
    this.selectCard = false;
     this.msg = "";
  }
  pay() {
    console.log('Selected bank index' + this.selectedBankIndex);

    if (!this.selectedBankIndex) {
      this.selectCard = true;
        this.translateService.get('select.card').subscribe((res: string) => { 
         this.msg = res;
      });
    } else {

      var selectedCard:CardDetail = this.cardDetailList[this.selectedBankIndex];
      console.log("Selected Card is : " , selectedCard.type, selectedCard.cardNumber, selectedCard.score );

      alert("Selected Card is : " +  selectedCard.type + ": No :" + selectedCard.cardNumber + ", Points:" + selectedCard.score)
      this.authService.logout("paymentResult"); 
    }
     
  }
}
