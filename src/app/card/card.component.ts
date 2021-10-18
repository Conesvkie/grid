import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  data: any[] = [
    {
      title: 'Kiwi',
      img: 'https://static.libertyprim.com/files/familles/kiwi-large.jpg?1569271790',
      description: 'This is a kiwi',
    },
    {
      title: 'Banana',
      img: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
      description: 'This is a banana',
    },
    {
      title: 'Strawberry',
      img: 'https://i.pinimg.com/originals/ae/7f/b9/ae7fb9b2718201fdd8c8238e779a3323.jpg',
      description: 'This is a strawberry',
    },
    {
      title: 'Kiwi',
      img: 'https://static.libertyprim.com/files/familles/kiwi-large.jpg?1569271790',
      description: 'This is a kiwi',
    },
    {
      title: 'Banana',
      img: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
      description: 'This is a banana',
    },
    {
      title: 'Strawberry',
      img: 'https://i.pinimg.com/originals/ae/7f/b9/ae7fb9b2718201fdd8c8238e779a3323.jpg',
      description: 'This is a strawberry',
    },
    {
      title: 'Kiwi',
      img: 'https://static.libertyprim.com/files/familles/kiwi-large.jpg?1569271790',
      description: 'This is a kiwi',
    },
    {
      title: 'Banana',
      img: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
      description: 'This is a banana',
    },
    {
      title: 'Strawberry',
      img: 'https://i.pinimg.com/originals/ae/7f/b9/ae7fb9b2718201fdd8c8238e779a3323.jpg',
      description: 'This is a strawberry',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
