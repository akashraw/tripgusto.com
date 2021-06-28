import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nag-tibba',
  templateUrl: './nag-tibba.component.html',
  styleUrls: ['./nag-tibba.component.css']
})
export class NagTibbaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public trip = {
    title:'Nag-Tibba',
    subtitle:'Trek',
    avail:'All Year',
    Length:'3D-2N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`Nag Tibba is one of the most offbeat destinations offered by the mystic land of Uttarakhand. Located 90km from Dehradun Nag Tibba offers a mild and unique excursion to “Serpent's peak” “Nag tibba”.`,
              part2:`Marked as the highest peak in the Shivalik range this hidden jewel offers a distinct flora and fauna. From the peak, you may witness Bandarpoonch Peak, the Gangotri Peaks, Kedarnath Peak, Changabang Peaks, and the Doon Valley.`,  
              part3:`A 7 km long trail to the Nag Tibba top at an altitude of 3022 meters is cherished by adventurers. The Smell of Deodars, secluded villages, and magnificence of Shivalik ranges is treasured all along the trail. This also makes it a perfect weekend getaway, most preferred for people who are new to the Himalayan Endeavor. `,
                    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:',],
              head:['Departure from Delhi:',
                    'Pantwari Village:', 
                    'Trek to Nag Tibba Summit',
                    'Early Morning arrival at Delhi:',
                   ],
              body:[//day 0 body
                    `We’ll be departing from Delhi in the evening. And hence most of the road journey would be covered during the night`,
                    //day 1 body
                     `We’ll be reaching early in the morning at Pantwari Village. After having a quick and hearty breakfast we’ll be trekking to the base camp of Nag Tibba. Here you may relax and loiter around the meadows. Enjoy your evening with a lovely sunset followed by a bonfire. `,
                     //day 2 body
                     `We’ll have an early morning trek to the Nag Tibba Summit. The summit is about a 5 km moderate climb. The view from the summit is astounding. After we trek down you can relax in the serenity and explore around the campsite and thereafter we’ll trek down to the Pantwari village. From here we’ll depart to Delhi.`,                      
                     //day 3 body
                   ]

              },

    inclusions:[
                `tranpotation by traveller`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 1: dinner ; Day 2: Breakfast + lunch;)',
                'Sightseeing as per Itinerary',
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                'bag pack with rain cover',

                'day bag',
            
                'Trekking Shoes (Forclaz 100, 500 recommended)',
                
                'A pair of full sleeve shirts/T-shirts',
                
                '2 pairs of cotton socks and 1 pairs of woolen socks',
                
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
                "assets/images/nag-tibba/nagtibba-gallery-1.jpg", 
                "assets/images/nag-tibba/nagtibba-gallery-2.jpg",
                "assets/images/nag-tibba/nagtibba-gallery-3.jpg", 
                "assets/images/nag-tibba/nagtibba-gallery-4.jpg", 
                "assets/images/nag-tibba/nagtibba-gallery-5.jpg",
                "assets/images/nag-tibba/nagtibba-gallery-6.jpg",
                "assets/images/nag-tibba/nagtibba-7.jpg"

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
{ price: "₹5,999", occupancy: "Double Occupancy" },
{ price: "₹4,999", occupancy: "Triple Occupancy" }
];