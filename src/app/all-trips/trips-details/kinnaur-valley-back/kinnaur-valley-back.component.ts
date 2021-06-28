import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kinnaur-valley-back',
  templateUrl: './kinnaur-valley-back.component.html',
  styleUrls: ['./kinnaur-valley-back.component.css']
})
export class KinnaurValleyBackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Kinnaur Valley',
    subtitle:'Backpacking Trip',
    avail:'All Year',
    Length:'5D - 4N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`Also known for the Kinnaur Kailash this hidden jewel offers a variety of scenic landscapes.
              River Baspa flows through the hilly regions of Kinnaur Valley. The valley enjoys a temperate climate due to high alleviation. The tour takes you through Shimla, Kalpa and Chitkul. The local cuisines are the catch. 
              The valley offers a rich flora and fauna so keep your heads up for any exotic moments.`
                    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:', 'Day 5:', 'Day 6:'],
              head:[ 
                    'Evening Departure From Delhi To Shimla:', 
                    'Shimla to Kalpa (Overnight Stay At Kalpa):', 
                    'Kalpa Sightseeing and Travel to Chitkul.:', 
                    ' Chitkul Sightseeing:', 
                    ' Departure to Shimla:', 
                    'Explore Shimla | Depart For Delhi:'
                   ],
              body:[//day 0 body
                    `We’ll be departing from Delhi in the evening as it’s an 11 hrs (481 Km) road trip to Bhuntar. After a nice dinner, most of our journey will be spent asleep. Let me remind you of your warm clothing as mornings are chilling in these mountains. We’ll be visiting Shimla and from here we’ll be departing to Kalpa.`,
                    //day 1 body
                     `The journey invokes the adventurer in you. The 222 km long journey in the epiphanies of the Himalayan vibe is blissful. We’ll be traveling through Narkanda and Kufri. These high-altitude routes are blessed with the exquisite forest of Deodar and Pinecone. We’ll stay the night at Kalpa.`,
                     //day 2 body
                     `After a heartful meal and Kalpa Sightseeing, we’ll depart for Chitkul. On the way, we’ll stop for a little excursion to Roghi Village and then will also check out the infamous suicide point. The roads here are thrilling. We’ll reach Chitkul in the evening and will retire for the day. 
                    `,
                     //day 3 body
                     `Chitkul is the last village on the Indo-China border and you can witness the magnificent Kinnaur Kailash from there. The rest of the day is for leisure. We’ll stay the night at Chitkul.`,
                     //day 4 body
                     `This soulful journey is about to end from Chitkul. We'll take the early morning ride to Shimla and will reach Shimla by noon. You may sit, relax and reminisce here on a hot cup of evening tea. Overnight stay at Shimla. You may take upon the cafe vibe here.`,
                     //day 5 body
                      `The day breaks for your leisure at Shimla. This is the souvenir time. From here we’ll take the evening bus to Delhi`
                     //day 6 body
                    
                   ]

              },

    inclusions:[
                `Travel by volvo bus to shimla vice versa. Transfer to local vehicle Traveller.`,
                'Stay available on a double/ triple sharing basis',
                'stay( Day 1 : hotel in kalpa, Day 2&3 : campstay in chitkul; Day 4 : hotel in shimla)',
                'Meals as per Plan ( Day 1:  Dinner; Day 2: Breakfast + Dinner; Day 3: Breakfast + Dinner; Day 4: Breakfast + Dinner; Day 5: Breakfast;)',
                'Sightseeing as per Itinerary',
                
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
                "assets/images/kinnaur-valley/chitkul-gallery-3.jpg", 
                "assets/images/kinnaur-valley/chitkul-gallery-4.jpg",
                "assets/images/kinnaur-valley/kinnaur-gallery-1.jpg", 
                "assets/images/kinnaur-valley/shimla-gallery-2.jpg", 
                "assets/images/kinnaur-valley/kinnaur-1.jpg",
                "assets/images/kinnaur-valley/shimla-gallery-3.jpg"
            ]
    };
    //occupancy table col declarations
displayedColumns: string[] = ["occupancy", "price"];
dataSource = tableDATA;
//occupancy table col declarations ends

}
//occupancy table var
export interface tableOccupancy {
price: string;
occupancy: string;
}
//occupancy table data
const tableDATA: tableOccupancy[] = [
{ price: "₹14,499", occupancy: "Double Occupancy" },
{ price: "₹12,499", occupancy: "Triple Occupancy" }
];