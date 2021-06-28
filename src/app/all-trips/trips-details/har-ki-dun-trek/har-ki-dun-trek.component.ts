import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-har-ki-dun-trek',
  templateUrl: './har-ki-dun-trek.component.html',
  styleUrls: ['./har-ki-dun-trek.component.css']
})
export class HarKiDunTrekComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Har Ki Dun',
    subtitle:'Trek',
    avail:'March-October',
    Length:'7D - 6N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`This hidden jewel is one of the most beautiful treks in the upper Himalayas which takes us to some thrilling places. The trek has a moderate climb through the dense alpine forest meadows. 
              The night under the starry sky is a heavenly feeling. Under nice weather you may check out the whole Har Ki Dun valley. The route is full of a waterfall and scenic meadows. We’ll cover Jaundhar Glacier and Maninda Tal. 
              From Maninda Tal. From the campsite, you’ll witness the peaks of Swargarohini 3, Bandar Punchh, Ruinsara, Black Peak, 
              and Bali Pass Range and the day breaks with mesmerizing Sunset.`,             
                    
             },

    Itinerary:{
              days:['Day 1:', 'Day 2', 'Day 3:', 'Day 4:', 'Day 5:', 'Day 6:', 'Day 7:'],
              head:['Departure from Dehradun:', 
                    'Sankari to Taluka then Trek to Seema:', 
                    'Seema to Har Ki Dun:', 
                    'Har ki dun Via (Jaundhar Glacier) | Maninda Tal to Boslo:', 
                    'Har Ki Dun to Seema:', 
                    'Seema to Taluka then SanKari:', 
                    'Sankari to Dehradun:'
                   ],
              body:[//day 1 body
                    `We’ll be departing from Dehradun early in the morning to Sankari. The 196 km long trip is full of scenic views and alpine forests. Sankari Base is situated at an altitude of 6400ft. We’ll stay the night at Sankari. The nights are chilly.`,
                    //day 2 body
                     `We’ll take the early morning drive to Taluka from Sankari. The 12km drive through the alpine forest is something to look for. From Taluka, we’ll embark on an excursion to Seema on a 16 km trek. The trail is easy and has a decent walk through the alpine forest.`,
                     //day 3 body
                     `After early morning breakfast, we’ll resume our journey through the valley. We’ll pass by Oslo grasslands offering an authentic Himalayan experience. From the campsite, you’ll witness the peaks of Swargarohini 3, Bandar Punchh, Ruinsara, Black Peak, and Bali Pass Range and the day breaks with mesmerizing Sunset.`,
                     //day 4 body
                     `The route is full of a waterfall and scenic meadows. We’ll cover Jaundhar Glacier and Maninda Tal. From Maninda Tal we’ll return to the Campsite. We’ll retire here for the night.`,
                     //day 5 body
                     `After early morning breakfast, we’ll trek to Seema. The trail is rich in flora and fauna. We’ll retire for the day here at Seema`,
                     //day 6 body
                      `After a heartful breakfast, we’ll trek back to Taluka. The trail is moderate and full of scenic views. After reaching Taluka we’ll drive back to Sankari and will stay the night at Sankari.`,
                     //day 7 body
                     `After breakfast, we’ll drive back to Dehradun where the trip ends.`,
                    
                   ]

              },

    inclusions:[
                'Travel by Traveller',
                'Stay available on a double/ triple sharing basis',
                'Meals plan day 1 dinner to day 7 breakfast',
                'Sightseeing as per Itinerary',
                'Trek Leader present all the time during trip',
                'First aid kit and oxygen cylinder',
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'Backpack (min 60 Ltrs) with rain cover',
            
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
                "assets/images/uk-backpacking/slider/chopta.jpg", 
                "assets/images/uk-backpacking/slider/chopta-6.jpg",
                "assets/images/uk-backpacking/slider/tungnath.jpg", 
                "assets/images/uk-backpacking/slider/auli.jpg", 
                "assets/images/uk-backpacking/slider/auli-2.jpg",
                "assets/images/uk-backpacking/slider/rishikesh.jpg"
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
{ price: "₹12,999", occupancy: "Double Occupancy" },
{ price: "₹11,999", occupancy: "Triple Occupancy" }
];