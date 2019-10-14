import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, pipe } from 'rxjs'; 
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class MetaDataService{

  /* variables */
  public login_inputs:Observable<any>;

  /* init */

  constructor(
    private firebase:AngularFirestore
  ){
    this.getLoginInputs();
  }

  private getLoginInputs(){
    this.login_inputs = this.firebase.collection("MetaData").doc("login").get().pipe(
      map(data=>{
        return data.data().inputs;
      })
    );
  }

  

  /* temp */
  setLoginList(){
    this.firebase.collection("MetaData").doc("login").set({inputs:"野馬|乳午|山豬|綿羊|馴鹿|駱駝|大象|河馬|貓貓|獅子|花豹|老虎|狗狗|松鼠|樹懶|狐狸|野狼|棕熊|兔子|老鼠|猴子|袋鼠|刺蝟|海豹|鴕鳥|鯨魚|孔雀|鸚鵡|蜥蜴|鱷魚|青蛙|企鵝".split("|")});
  }
}
