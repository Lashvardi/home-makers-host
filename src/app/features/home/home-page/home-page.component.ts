// src/app/components/home-page/home-page.component.ts
import { Component, Injector, OnInit } from '@angular/core';
import { ApiCall } from '../../../core/decorators/api-call.decorator';
import { Observable } from 'rxjs';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface ICurrency {
  ccy: string;
  dictionaryKey: string;
  dictionaryValue: string;
  rateWeight: number;
  previousRate: number;
  currentRate: number;
  difference: number;
  buyRate: number;
  sellRate: number;
  dgtlBuyRate: number;
  dgtlSellRate: number;
  midBuyRate: null;
  midSellRate: null;
  defaultCcy: boolean;
  isFavourite: boolean;
  viewCcy: string;
  name: string;
  color: string;
  symbol: string;
}
export interface ICurrencyRoot {
  data: ICurrency[];

}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  // ეს ასინქრონულის მაგალითი აქანა ნახეთ
  // მეთოდის სახელი getCurrency დაა ცვლადის სახელი
  // უნდა ემთხვეოდნენ პროოოსტა ბოლოში Response$ ეგია საჭირო
  processApiCallResponse$!: Observable<IPost[]>;
  getCurrencyResponse$!: Observable<ICurrencyRoot>;
  cvladi: ICurrencyRoot = { data: [] };

  constructor(public injector: Injector) { }

  ngOnInit(): void { }

  @ApiCall<IPost[]>('https://jsonplaceholder.typicode.com/posts', { method: 'GET', useAsync: true })
  processApiCall(response?: IPost[]) {
    console.log('response', response);
  }

  @ApiCall<ICurrencyRoot>('https://bankofgeorgia.ge/api/currencies/history/',
    {
      method: 'GET',
      useAsync: true
    }
  )
  getCurrency(response?: ICurrencyRoot) {
    console.log('response', response);
  }

  @ApiCall<ICurrencyRoot>('https://bankofgeorgia.ge/api/currencies/history/',
    {
      method: 'GET',
      useAsync: false
    }
  )
  getCurrencyNotAsync(response?: ICurrencyRoot) {
    this.cvladi = response!;
  }
}
