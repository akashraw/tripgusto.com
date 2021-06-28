import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kedarnath-dham',
  templateUrl: './kedarnath-dham.component.html',
  styleUrls: ['./kedarnath-dham.component.css']
})
export class KedarnathDhamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Kedarnath',
    subtitle:'Dham',
    avail:'May - November',
    Length:'4D - 3N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`Kedarnath Dham is dedicated to Lord Shiva. The most sacred deity in Hinduism. The temple is not directly accessible by road and has to be reached by 22 kilometers (14 mi) uphill trek from Gaurikund. Through the dense forest, the trail takes you through the banks of the Mandakini river. The route is full of a scenic experience and waterfalls. This moderate hike is tiring as the temple is situated at an altitude of 3583 meters. The head priest (Raval) of the Kedarnath temple belongs to the Veerashaiva community from Karnataka. However, unlike in the Badrinath temple, the Raval of Kedarnath temple does not perform the pujas. The pujas are carried out by Raval's assistants on his instructions.`,
              part2:`After the long hike, this trek provides a soulful experience and hence is the most sought-after destination. The tour is only available in the summers`,  
              
             },

    Itinerary:{
              days:['Day 1:', 'Day 2', 'Day 3:', 'Day 4:',],
              head:[' Dehradun To Guptkashi:', 
                    'Guptkashi to kedarnath:', 
                    'Kedarnath to Guptkashi:', 
                    'Guptkashi to Dehradun:',
                   ],
              body:[//day 1 body
                    `It all starts with an early morning departure from Dehradun. With a spectacular 10 to 11 hrs drive along the majestic Ganges Valley to Joshimath which is situated at the altitude of 6100ft. Though high-speed networks are available all along the way I doubt you would be using any as the morning glimpses along the Ganges valley is breathtaking. Needless to worry we got you covered with tea and meal breaks for those grumbling tummies. For tea lovers, you are in luck, as this is Uttarakhand and tea is the only bonding beverage here. 

Driving through national highway 58 you would come across one of the most wondrous places on the face of earth Devprayag. Here witness the confluence of the mysticism through the rivers Bhagirathi and Alaknanda transcending into Ganga. This would be the first Prayag out of five (where two rivers meet each other) which you would be witnessing on this route. The route is mostly lively until you enter Srinagar where lies the foundation of one of the largest Universities in India. This city also takes pride in one of the biggest dams ever constructed on the river Alaknanda. Next, we would be passing through the bustling streets of Rudraprayag. The second Prayag out of the five where you will witness the convergence of river Mandakini and river Alaknanda. While leaving the city you will witness some breathtaking scenes. 

From here the Kedar Valley calls. Traveling through the small bustling cities like Agastmuni, Tilwada and Kund we will reach Guptkashi. We’ll retire to a cozy resort in the epiphanies of Kedar Valley. Mount Chaukhamba is blessed with its grandeur every day.
`,
                    //day 2 body
                     `The day breaks with an early morning drive to Gauri Kund. It covers a 30kms drive to Gauri Kund and is surrounded by exquisite waterfalls and lush deodar forests. From Gauri Kund, the journey begins on foot to Kedarnath Temple covering an 18kms hike. 
As per convenience, you may hire a pony or Palki. Rest assured as our expert guide will make sure that you experience the mysticism of the Kedar Valley. 

We’ll reach Kedarnath temple in the evening, and experience the soulful escape at the altar of Lord Shiva.
`,
                     //day 3 body
                     `
The morning aarti at Kedarnath is a blissful experience and is most recommended. Today we’ll explore the mystics of Lord Shiva and Bhairav Baba. After that, we’ll descend to Gauri Kund and then back to the resort at Guptkashi.
`,
                     //day 4 body
                     `After a scrumptious breakfast and a heartful of joy, we leave for Dehradun. We’ll take the time of our return to experience the breathtaking spots on our journey home. Once we reach Rishikesh we’ll take a little breather and then on the way to Dehradun.`,
                    
                   ]

              },

    inclusions:[
                `Transportation by Traveller.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 1:  Dinner; Day 2: Breakfast + lunch; Day 3: Breakfast + Dinner; Day 4: Breakfast)',
                'Sightseeing as per Itinerary',
                'All kinds of permits',
                'Trek Leader throughout the trip',
                'First aid kit & oxygen cylinder', 
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'Daybag with rain cover',

                'Poncho/Raincoat',
            
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
                "assets/images/kedarnath/kedar-badri-1.jpg", 
                "assets/images/kedarnath/kedarnath-2.jpg",
                "assets/images/kedarnath/kedar-badri-2.jpg", 
                "assets/images/kedarnath/char-dham-1.jpg", 
                
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
{ price: "₹13,999", occupancy: "Double Occupancy" },
{ price: "₹10,999", occupancy: "Triple Occupancy" }
];