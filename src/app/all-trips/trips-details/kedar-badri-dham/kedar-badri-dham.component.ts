import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kedar-badri-dham',
  templateUrl: './kedar-badri-dham.component.html',
  styleUrls: ['./kedar-badri-dham.component.css']
})
export class KedarBadriDhamComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Kedarnath- Badrinath',
    subtitle:'Dham',
    avail:'May- November',
    Length:'5D - 4N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`Kedarnath Dham is dedicated to Lord Shiva. The most sacred deity in Hinduism.Through the dense forest, the trail takes you through the banks of the Mandakini river. The route is full of a scenic experience and waterfalls. 
                    This moderate hike is tiring as the temple is situated at an altitude of 3583 meters.`,
              part2:`Badrinath Dham is dedicated to Lord Vishnu. A sacred deity in Hinduism. The temple is accessible by road and has an operation bust station at an altitude of 3133 meters above sea level. Situated on the banks of the Alaknanda River this place has a lot to offer. From Mana village excursion to the Vasudhara trek makes this place the most sought-after destination. 
              Mystically it’s said that the legendary Pandavas visited this place en route to heaven and this place is no less than heaven. The whole valley is full of meadows and scenic spots. Mata Murti Ka Mela, which commemorates the descent of the river Ganges on mother earth, is the most prominent festival celebrated in the Badrinath Temple.`,
                    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:', 'Day 5:',],
              head:[' Rishikesh To Guptkashi:', 
                    'Gupkashi to Kedarnath:', 
                    ' Kedarnath to Joshimath via Guptkashi.:', 
                    'Joshimath to Badrinath Dham; Badrinath sightseeing:', 
                    'Badrinath to Rishikesh:', 
                   ],
              body:[//day 1 body
                    `It all starts with an early morning departure from Rishikesh. With a spectacular 10 to 11 hrs drive along the majestic Ganges Valley to Joshimath which is situated at the altitude of 6100ft. Though high-speed networks are available all along the way I doubt you would be using any as the morning glimpses along the Ganges valley is breathtaking. Needless to worry we got you covered with tea and meal breaks for those grumbling tummies. For tea lovers, you are in luck, as this is Uttarakhand and tea is the only bonding beverage here. 

Driving through national highway 58 you would come across one of the most wondrous places on the face of earth Devprayag. Here witness the confluence of the mysticism through the rivers Bhagirathi and Alaknanda transcending into Ganga. This would be the first Prayag out of five (where two rivers meet each other) which you would be witnessing on this route. The route is mostly lively until you enter Srinagar where lies the foundation of one of the largest Universities in India. This city also takes pride in one of the biggest dams ever constructed on the river Alaknanda. Next, we would be passing through the bustling streets of Rudraprayag. The second Prayag out of the five where you will witness the convergence of river Mandakini and river Alaknanda. While leaving the city you will witness some breathtaking scenes. 

From here the Kedar Valley calls. Traveling through the small bustling cities like Agastmuni, Tilwada and Kund we will reach Guptkashi. We’ll retire to a cozy resort in the epiphanies of Kedar Valley. Mount Chaukhamba is blessed with its grandeur every day.
`,
                    //day 2 body
                     `The day breaks with an early morning drive to Gauri Kund. It covers a 30kms drive to Gauri Kund and is surrounded by exquisite waterfalls and lush deodar forests. From Gauri Kund, the journey begins on foot to Kedarnath Temple covering an 18kms hike. 
As per convenience, you may hire a pony or Palki. Rest assured as our expert guide will make sure that you experience the mysticism of the Kedar Valley. 

We’ll reach Kedarnath temple in the evening, and experience the soulful escape at the altar of Lord Shiva.
`,
                     //day 3 body
                     `The morning aarti at Kedarnath is a blissful experience and is most recommended. Today we’ll explore the mystics of Lord Shiva and Bhairav Baba. After that, we’ll descend to Gauri Kund. From here we’ll travel to Joshimath.`,
                     //day 4 body
                     `After early morning darshan, We’ll embark on Badrinath escapade. We’ll visit Mana village, the last village in the Indian Territory. We’ll also visit the famous Bheem Pul (A natural stone bridge on the Saraswati River). We’ll retire the day back at Badrinath.`,
                     //day 5 body
                     `After a soulful breakfast, we’ll depart to Rishikesh on a journey of 294km drive. Rest assured overnight stay in a pleasant hotel in the epiphanies of the river Ganga would be already waiting for you guys. Have a time of a lifetime.`,
                
                    
                   ]

              },

    inclusions:[
                `Travel by Traveller.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 1:  Dinner; Day 2: Breakfast + Dinner; Day 3: Breakfast; Day 4: Dinner; Day 5: Breakfast;)',
                'Sightseeing as per Itinerary',
                'Experienced guide for the whole trip and hiking.'
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'Backpack with rain cover',
            
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
                "assets/images/kedarnath-badrinath/kedarnath-2.jpg", 
                "assets/images/kedarnath-badrinath/kedar-badri-2.jpg",
                "assets/images/kedarnath-badrinath/kedar-badri-1.jpg", 
                "assets/images/kedarnath-badrinath/vasu-dhara.jpg", 
                "assets/images/kedarnath-badrinath/badrinath-slider-4.jpg",
                "assets/images/kedarnath-badrinath/badrinath-slider.jpg"
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
{ price: "₹19,499", occupancy: "Double Occupancy" },
{ price: "₹17,999", occupancy: "Triple Occupancy" }
];