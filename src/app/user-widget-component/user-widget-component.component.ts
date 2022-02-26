import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-widget-component',
  templateUrl: './user-widget-component.component.html',
  styleUrls: ['./user-widget-component.component.css']
})
export class UserWidgetComponentComponent implements OnInit {

  public name="Krushna Bansode";
  public gmail="krushnab@gmail.com";
  public status=true;

  status2(){
    if(this.status)
    {
      return "Active";
    }
    else{
      return "inactive";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
