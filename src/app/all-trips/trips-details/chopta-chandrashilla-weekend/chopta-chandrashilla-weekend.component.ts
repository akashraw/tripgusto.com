import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chopta-chandrashilla-weekend',
  templateUrl: './chopta-chandrashilla-weekend.component.html',
  styleUrls: ['./chopta-chandrashilla-weekend.component.css']
})
export class ChoptaChandrashillaWeekendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Chopta',
    subtitle:'Chandrashilla',
    avail:'all year',
    Length:'3D-2N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`The Journey just begins on the trail to Deoriatal. Laying in the epiphanies of Chaukhamba and Kedar peak Deoriatal leaves you nothing but the sheer experience of soulful bliss. The adventure begins through the rhododendron meadows and the alpine forest in Chopta to Tungnath and Chandrashila. Located at an altitude of 3470 meters, the Tungnath temple is one of the highest Shiva temples. The magnificence of the Himalayas can be experienced atop Chandrashilla. It is truly the most enthralling experience which seeps right into the bones themselves. This hidden jewel offers 360 degrees of Himalayan panorama, it makes it the perfect getaway`,
                    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:',],
              head:['Departure from Delhi:',
                    'Chopta', 
                    'Trek to Tungnath and Chandrashila:', 
                    'Excursion to Deoriatal: Back to Rishikesh:',
                    'Early Morning arrival at Delhi:',
                   ],
              body:[//day 0 body
                    `We’ll be departing from Delhi in the evening. And hence most of the road journey would be covered during the night. `,
                    //day 1 body
                     `We reach Chopta by early evening. It’s filled with an eccentric view. As the name suggests. After soaking the solace in these parts we’ll retire in the camps at Chopta.`,
                     //day 2 body
                     `Early morning blooms are mesmerizing in these parts. The tea lovers are gonna love the spectacle. After a hearty meal, we’ll trek to Tungnath Temple, where the lord Shiva lies. The climb is mild and the view is mesmerizing. From here it’s just a 2 Km climb for Chandrashilla. The summit seems to touch the sky. You will have a mesmerizing 360 view of the Himalayas. We’ll have a little snack here at the top and caution guys, no littering. After this experience, we’ll trek down to Chopta. We’ll stay the night at Chopta.
                     From here we’ll travel to Rishikesh.`,
                     //day 3 body
                     `After early morning breakfast, we’ll take a 2.2 Km mild hike to Deoria Tal. It’s filled with an eccentric view. As the name suggests Deoriatal is a small pond atop a meadow. The winds are a little chilly but you can witness Mount Chaukhamba at its magnificence. After soaking the solace in these parts we’ll trek down and travel back to Rishikesh. From here we’ll take the evening bus to Delhi.`,                       
                     //day 4 body
                   ]

              },

    inclusions:[
                `Travel by Volvo bus to bhuntar and vice-versa. further transfer to a local vehicle.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 1: Dinner ; Day 2: Breakfast + Dinner; Day 3: Breakfast)',
                'Sightseeing as per Itinerary',
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'Day bag',
            
                'Sport Shoes/casual shoes',
                
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
 { price: "₹8,499", occupancy: "Double Occupancy" },
 { price: "₹7,499", occupancy: "Triple Occupancy" },
 { price: "₹6,999", occupancy: "Quad Occupancy"}
 ];
 