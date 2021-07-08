import { Component, OnInit } from '@angular/core';
import { TripData } from '../TripData';
import { TripClass } from '../TripDataClass';
import { ActivatedRoute } from '@angular/router';
import { TripService } from '../trip.service';
@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})
export class TripDetailComponent implements OnInit {

  tripVar: TripClass;
  capRoute: String;
  //trips: TripClass;
  constructor(private route:ActivatedRoute, private tripService:TripService) { }

  ngOnInit(): void {
    this.capRoute=this.route.snapshot.params['TripRoute']
    this.getTripInfo();
    
  }

  
  getTripInfo(){
    this.tripVar=this.tripService.getTripInfos().find(o => o.route === this.capRoute)
    console.log(this.tripVar.Overview)
    
    //  this.trip= this.tripService.getTripInfo().find(o => o.route === this.capRoute);
    //  console.log(this.trip)
  }
  







  public trip = {
    title:'Badrinath',
    subtitle:'Dham',
    avail:'May - November',
    Length:'3D - 2N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`Badrinath Dham is dedicated to Lord Vishnu. A sacred deity in Hinduism. The temple is accessible by road and has an operation bust station at an altitude of 3133 meters above sea level. Situated on the banks of the Alaknanda River this place has a lot to offer. From Mana village excursion to the Vasudhara trek makes this place the most sought-after destination. Mystically it’s said that the legendary Pandavas visited this place en route to heaven and this place is no less than heaven. The whole valley is full of meadows and scenic spots. Mata Murti Ka Mela, which commemorates the descent of the river Ganges on mother earth, is the most prominent festival celebrated in the Badrinath Temple. Although Badrinath is located in North India, the head priest, or Rawal, is traditionally a Nambudiri Brahmin chosen from the South Indian state of Kerala.`,
              
             },

    Itinerary:{
              days:['Day 1:', 'Day 2', 'Day 3:',],
              head:['Rishikesh to Badrinath:', 
                    'Badrinath sightseeing:', 
                    'Badrinath to Rishikesh:'
                   ],
              body:[//day 1 body
                    `We'll break the day on a 294 km drive to Badrinath from Rishikesh. 
                    Via Devprayag, Rudraprayag, Karnprayag we’ll be driving via the banks of river Alaknanda. 
                    Through the hustling roads from Chamoli city, we will be crossing Helang. 
                    This place has a vibe. Now we will be climbing over the clouds, this place is the elevator of the mountains. From this place, things will start bewildering your mind. The northern wind calls for an adventure junkie. 
                    Soaring through these valleys we will take our first stop at Joshimath. From here you will witness the majestic deodar trees. We’ll retire at Badrinath Dham. `,
                    //day 2 body
                     `After early morning darshan, We’ll embark on Badrinath escapade. 
                     We’ll visit Mana village, the last village in the Indian Territory. We’ll also visit the famous Bheem Pul (A natural stone bridge on the Saraswati River). 
                     We’ll retire the day back at Badrinath.`,
                     //day 3 body                     
                    
                   ]

              },

    inclusions:[
                `Transportation by Traveller.`,
                'Accommodation on Triple/double Occupancy camps/hotel',
                'Meals as per Plan ( Day 1:  Dinner; Day 2: Dinner; Day 3: Breakfast)',
                'Sightseeing as per Itinerary',
                'Attached Washroom with each camp/hotel.',
                ' Experienced guide for the whole trip and hiking.'
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Pony(horse) and palkhi for the trek',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'Daybag',
            
                'Poncho/Raincoat',
                
                'A pair of full sleeve shirts/T-shirts and Track Pants',
                
                'A pair of cotton socks and a pair of woolen socks',
                
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
                "assets/images/badrinath/badrinath-slider.jpg", 
                "assets/images/badrinath/badrinath-slider-2.jpg",
                "assets/images/badrinath/badrinath-slider-1.jpg", 
                "assets/images/badrinath/vasu-dhara-1.jpg"
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
{ price: "₹11,500", occupancy: "Double Occupancy" },
{ price: "₹9,999", occupancy: "Triple Occupancy" }
];

