import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  terms= ['We do not provide any insurance policy to cover the expenditure on sickness or accidents or losses incurred due to theft or other reasons.', 
          'Numerous factors such as weather and road conditions, the physical ability of participants etc. may bring alteration in the itinerary. We reserve the right to make necessary changes in the schedule in the interest of safety, comfort, and general well-being.',
          'Full payment should be made before the date of the trip.',
          'Initial booking amount should be paid in advance which is 50%.',
          'The IDs shall all be verified before boarding. No boarding shall be entertained without a valid Govt. ID.',
          'The Transfer of the bookings is not permitted. Only the names mentioned at the time of confirmation shall be allowed to travel.',
          'No refunds shall be made towards any inclusion(s) not availed by the Client.',
          'Travelers must take care of their luggage & belongings. The management shall not be accountable for missing items along the tour.',
          'The time of Departure is stated & fixed. All travelers must update their status with the Trip coordinator(s), & report at the pickup point 30 mins before the scheduled departure.', 
          'The Air Conditioning will be switched off in the hills. Also, during the trip, it shall be the Driver’s discretion to put off the AC as & when required, considering the travelers’ safety & ease of travel along uneven & dangerous routes.',
          'Our time of departure is fixed must depart by the stated time & keep their status updated with the trip coordinator(s). Anyone missing the bus shall not be eligible for any refunds. We shall call you twice before the scheduled departure.',
          'No act of misconduct or indiscipline shall be tolerated on the tours. We are a cordial travel community and we aspire to bring to you a hassle-free and memorable experience.', 
          'We shall not be responsible for any delays or alterations in the program or indirectly incurred expenses in cases such as Natural Hazards, accidents, breakdown of machinery, weather conditions, landslides, political closure, or any untoward incidents.',
          ]

  



  

}
