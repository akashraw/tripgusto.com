import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kedarkantha-trek',
  templateUrl: './kedarkantha-trek.component.html',
  styleUrls: ['./kedarkantha-trek.component.css']
})
export class KedarkanthaTrekComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public trip = {
    title:'Kedarkantha',
    subtitle:'Trek',
    avail:'All Year',
    Length:'5D - 4N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`The route to Kedarkantha is one of the most scenic experiences. The trek starts from Sankari a small village serving as the base camp. The trek takes you through the dense alpine forests. The route is mesmerizing especially for winters and hence making it the most sought-after winter destination. The Kedarkantha summit is advisable to be done in the morning as the walk under the starry night makes it the most soulful experience. At the Kedarkantha summit, the sun rays dance on the snow. This experience is the most overwhelming. This is mid trek is the most recommended retreat.`,
                    
             },

    Itinerary:{
              days:['Day 1:', 'Day 2', 'Day 3:', 'Day 4:', 'Day 5:',],
              head:['Departure from Dehradun to Sankari.:', 
                    'Sankari to Juda ka Talab:', 
                    'Juda ka Talab to Base Camp:', 
                    'Base Camp to Kedarkantha Summit Back to Juda Ka Talab:', 
                    'Juda ka Talab to Dehradun via Sankari:', 
                   ],
              body:[//day 1 body
                    `We’ll be departing from Dehradun early in the morning to Sankari. The 196 km long trip is full of scenic views and alpine forests. Sankari Base is situated at an altitude of 6400ft. We’ll stay the night at Sankari. The nights are chilly.`,
                    //day 2 body
                     `After breakfast at Sankari, we’ll trek to Juda ka Talab campsite. The scenic route takes you through the alpine forests. The rich flora and fauna are something to look for. We’ll reach Juda ka Talab by noon. Here you may choose to retire in the camps or you may explore the frozen Juda ka Talab.`,
                     //day 3 body
                     `The early bird steals the show. After breakfast, we’ll trek to Kedarkantha Base camp. The moderate climb is 4 km long. Stretching via the magnificent alpine forest the trail is blissful. We’ll reach Kedarkantha base camp by noon. The rest of the day is leisure.`,
                     //day 4 body
                     `The summit begins early in the morning with refreshments. The 4km hike to Kedarkantha Summit is the most fascinating experience as the starry night’s gleam in your soul. After the summit, we’ll trek back to Kedarkantha Base camp where we’ll have lunch and from here we’ll depart to Juda ka Talab. Here we’ll stay the night.`,
                     //day 5 body
                     `After breakfast, we’ll trek back to Sankari. Here you may take some rest as we’ll drive back to Dehradun. Our trek ends here.`,
                     
                    
                   ]

              },

    inclusions:[
                `Transportation by Traveller.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 1:  Dinner to Day 5: Breakfast)',
                'All kind of permits',
                'Trek Leader during whole trip',
                'First aid kit and oxygen cylinder ' 
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'Backpack (min 60 Ltrs) with rain cover',
            
                'Trekking Shoes(Forclaz 100, 500 recommended)',
                
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
                "assets/images/kedarkantha/kedarkantha-5.jpg", 
                "assets/images/kedarkantha/kedarkantha-4.jpg",
                "assets/images/kedarkantha/kedarkantha-3.jpg", 
                "assets/images/kedarkantha/kedarkantha-4.jpg", 
                "assets/images/kedarkantha/kedarkantha-2.jpg",
                "assets/images/kedarkantha/kedarkantha-6.jpg"
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
{ price: "₹8,499", occupancy: "Double Occupancy" },
{ price: "₹7,499", occupancy: "Triple Occupancy" }
];
