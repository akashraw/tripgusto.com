import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  backpacking=[
    'Free Cancellation up to 45 days before the departure date.',
    '50% will be charged of the trip cost, 30-44 days',
    '70% will be charged of  the trip cost, 15-29 days',
    '100% will be charged of the trip cost, 0-14 days'
  ]

weekend=[
'Free Cancellation up to 45 days before the departure date',
'44 Days to 30 Days of Departure date. 10% of the total Trip cost along with the booking amount will be charged as a cancellation fee.',
'29 Days to 20 Days of Departure date. 25% of the total trip cost along with the booking amount will be charged as a cancellation fee.',
'19 Days to 10 Days of Departure date. 50% of the total trip cost along with the booking amount will be charged as a cancellation fee.',
'10 Days to 6 Days of Departure date. 75% of the total trip cost will be charged as a cancellation fee.',
'6 Days to Trip Departure date. 100% of the total trip cost will be charged as a cancellation fee.'   
]    

long=[
'Free Cancellation up to 60 days before the departure date',
'59 Days to 45 days of Departure date. 10% of the total Trip cost. (Booking amount is non-refundable)',
'44 Days to 30 Days of Departure date. 25% of the total trip cost',
'29 Days to 15 Days of Departure date. 50% of the total trip cost.',
'15 Days to 8 Days of Departure date. 75% of the total trip cost.',
'7 Days to Trip Departure date. 100% of the total trip cost.',    
]

custom=[
`Free Cancellation up to 60 days before the departure date. Land Package only, flights as per the operator's cancellation policy`,
'59 Days to 45 days of Departure date. 10% of the total Trip cost.',
'44 Days to 30 Days of Departure date. 25% of the total trip cost',
'29 Days to 15 Days of Departure date. 50% of the total trip cost.',
'15 Days to 8 Days of Departure date. 75% of the total trip cost.',
'7 Days to Trip Departure date. 100% of the total trip cost.'
]


}
