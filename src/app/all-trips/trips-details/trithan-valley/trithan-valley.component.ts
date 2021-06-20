import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trithan-valley',
  templateUrl: './trithan-valley.component.html',
  styleUrls: ['./trithan-valley.component.css']
})
export class TrithanValleyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'TIRTHAN VALLEY',
    subtitle:'WEEKEND GETAWAY',
    avail:'All Year',
    Length:'3D - 2N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`One of the most offbeat places mapped as an exotic destination. The destination offers authentic village excursion at Jibhi. Through the dense alpine forest, the day breaks at a local waterfall mesmerizing the whole experience.`,
              part2:`The trip takes you to explore more with Shoja, Jalori, and Serolsar Lake. Located at an altitude of 3100 meters Serloskar lake is a major attraction of Tirthan Valley. The pristine lake offers a soulful view of the majestic Himalayas. `,
                   
              part3:`The trip encompasses the wonders of religious faiths. A little world of enigmas. The final pick is Jalori Pass which packs quite a punch of Dhauladhar stretches. At an altitude of 3120 meters, this hidden jewel leaves you in bliss and awe. Marking a perfect getaway.`
                    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:'],
              head:['Departure from Delhi:', 
                    'Arrival Jibhi :', 
                    'Excursion to Serolsar lake and Jalori pass.', 
                    'Departure to Bhuntar.', 
                    ' Early Morning Arrival at Delhi.', 
                    ],
              body:[//day 0 body
                    `We’ll be departing from Delhi in the evening as it’s an 11 hrs (481 Km) road trip to Bhuntar. After a nice dinner, most of our journey will be spent asleep. Let me remind you of your warm clothing as mornings are chilling in these mountains..`,
                    //day 1 body
                     `We’ll be reaching Jibhi in the morning at a decent time. Here we’ll have a quick breakfast and freshen up a bit. Here you can choose to relax and enjoy the Himalayan spectacle or you can have a little excursion in the forest. We’ll have a little hike to a nice little waterfall and will explore Jibhi on foot. We’ll have a musical night over a bonfire to reminisce the journey we had so far. The nights are long but the company makes it worthwhile. As your discretion calls one may retire to a hotel.`,
                     //day 2 body
                      `This day is gonna be lengthy but exciting. After breakfast, we’ll drive to Jalori Pass and will also visit the village Shoja on the way. After reaching Jalori we’ll trek to “360 viewpoints”. As the name itself suggests, it’s a 360 view of Himalayan grandeur. After soaking in this scenic view we’ll head to Serolsar Lake. It’s a 6 Km long mild hike to Lake Serolsar. After the excursion, we’ll be back in Jibhi.`,   

                     //day 3 body
                     `After a scrumptious breakfast and a heartful of joy, we leave for Bhuntar. The thrill doesn’t stop here. The much-awaited white water rafting would be waiting for you. After the thrilling experience, we’ll depart for Delhi..`
                   
                    
                   ]

              },

    inclusions:[
                `Travel by Traveller.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 1:  Breakfast; Day 2: Breakfast + Dinner; Day 3: Breakfast; ',
                'Sightseeing as per Itinerary',
                'River Rafting,'
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'Daybag',
            
                'Sport Shoes (Prefered Trekking Shoes)',
                
                'A pair of full sleeve shirts/T-shirts and Track Pants',
                
                'A pair of cotton socks and 2 pairs of woolen socks',
                
                '1 full sleeve sweater or fleece jacket (preferable)',
                
                'One jacket',
                
                'Thermal inners - 1 Pair',
                
                '1 pair of gloves',
                
                'Sun cap',
                
                'One scarf',
                
                'Light towel',
                
                'Lip balm',
                
                'Cold cream and sunscreen (SPF 40+)',
                
                'Water bottle 1 lt (At least)',
                
                'Headlamp or torch with fresh pair of batteries',
                
                'Personal toiletries and toilet paper',
                
                'Personal medicine kit',
                
                'Dark sunglasses (U/V protected)',
                
                'Walking stick (one)'
              ],
              //slider pictures
    slides:[ 
                "assets/images/tirthan-valley/jalori-mata-gallery.jpg", 
                "assets/images/tirthan-valley/tirthan-valley-1.jpg",
                "assets/images/tirthan-valley/tirthan-valley-2.jpg", 
                "assets/images/tirthan-valley/tirthan-valley-3.jpg", 
                "assets/images/tirthan-valley/shoja.jpg"
            ]
    };
  //occupancy table col declarations
  displayedColumns: string[] = ["occupancy", "price"];
  dataSource = tableDATA;
   //occupancy table col declarations ends
}
//end oninit



//occupancy table var
export interface tableOccupancy {
price: string;
occupancy: string;
}
//occupancy table data
const tableDATA: tableOccupancy[] = [
{ price: "₹7,499", occupancy: "Double Occupancy" },
{ price: "₹6,499", occupancy: "Triple Occupancy" }
];  