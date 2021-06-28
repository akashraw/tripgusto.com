import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rishikesh-retreat',
  templateUrl: './rishikesh-retreat.component.html',
  styleUrls: ['./rishikesh-retreat.component.css']
})
export class RishikeshRetreatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Rishikesh',
    subtitle:'Retreat',
    avail:'All Year',
    Length:'3D - 2N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`Curated with the most enthralling destinations in Kedar Valley. The trip encapsulates adventure, culture, and retreat. 
                      Kanatal is the “Hamlet” of the offbeat destinations. Relaxing near the lake is heartful.`,
              part2:`The Journey just begins on the trail to Deoriatal. Laying in the epiphanies of Chaukhamba and Kedar peak Deoriatal leaves you nothing but the sheer experience of soulful bliss. 
                     The adventure begins through the rhododendron meadows and the alpine forest in Chopta to Tungnath and Chandrashila. Located at an altitude of 3470 meters, the Tungnath temple is one of the highest Shiva temples. 
                     The magnificence of the Himalayas can be experienced atop Chandrashilla. It is truly the most enthralling experience which seeps right into the bones themselves. After the soulful experience, the days retreat in the alpines of Auli. 
                     This place is the window of Himalayan captures such as Nanda Devi Peak, Ghora Parbat, Hathi Parvat, Beethartoli, and many more. The real bliss is roaming to Gurson bugyal. 
                     The heart wants this enigma to never end but everything ends so does this trip and it ends with a bang in Rishikesh.`,  
              part3:`After carefully selected as the best offbeat destinations this trip offers a whole of Garhwal color.`,
                    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:',],
              head:['Departure from Delhi:', 
                    'Rishikesh:', 
                    'Rishikesh Nature Escapade:', 
                    'Shivpuri Excursion:', 
                    'Reach back to Delhi:',
                   ],
              body:[//day 0 body
                    `
We’ll be departing from Delhi in the evening. And hence most of the road journey would be covered during the night. 
`,
                    //day 1 body
                     `This day is gonna be exciting. We’ll be engaging in a thrilling experience. Here we’ll be plunging into Ganga on a raft. The thrill is something to look for. After this, you can explore Laxman Jhula and Ram Jhula. It looks like experiencing the two different worlds in such a short distance.`,
                     //day 2 body
                     `We’ll take a nature hike to exotic waterfalls through dense forests. After this small excursion, we’ll visit Beatles Ashram. The cafes there have an addictive vibe in them`,
                     //day 3 body
                     `After a relaxing retreat on a beach at Shivpuri, the day is free for personal recreation till evening. In the evening we’ll witness the famous aarti at Parmarth niketan. From here we’ll depart for Delhi in the evening`,
                     //day 4 body
                     `goodmorning back to delhi`,
                   ]

              },

    inclusions:[
                `Travel by Traveller.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 2:  Dinner; Day 3: Breakfast + lunch; Day 4: Breakfast + Dinner; Day 5: Breakfast; Day 6: Breakfast;)',
                'Sightseeing as per Itinerary',
                'River Rafting, Cliff Jumping, and Bodysurfing in Rishikesh'
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
                "assets/images/rishikesh-retreat/rishikesh-5.jpg", 
                "assets/images/rishikesh-retreat/rishikesh-1.jpg",
                "assets/images/rishikesh-retreat/rishikesh-6.jpg", 
                "assets/images/rishikesh-retreat/rishikesh-2.jpg", 
                "assets/images/rishikesh-retreat/rishikesh-3.jpg",
                "assets/images/rishikesh-retreat/rishikesh-4.jpg"
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



