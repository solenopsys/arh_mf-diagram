import {Component, OnInit} from '@angular/core';
import {BC} from "./test-structure";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'combinatorics',
  templateUrl: './combinatorics.component.html',
  styleUrls: ['./combinatorics.component.css']
})
export class CombinatoricsComponent implements OnInit{

  $conf:any;
  url:string;

  constructor(private http:HttpClient,private ar: ActivatedRoute) {


  }

  ngOnInit(): void {
    this.url = this.ar.snapshot.data['url'];
    console.log("URL",this.ar.snapshot.data)

    this.$conf=this.http.get(this.url);

  }


}
