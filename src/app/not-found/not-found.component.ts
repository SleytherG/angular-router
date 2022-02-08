import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  imgNotFound: string = 'https://media.giphy.com/media/A9EcBzd6t8DZe/giphy.gif'

  constructor() { }

  ngOnInit(): void {
  }

}
