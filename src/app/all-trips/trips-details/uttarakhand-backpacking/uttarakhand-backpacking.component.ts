import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-uttarakhand-backpacking',
  templateUrl: './uttarakhand-backpacking.component.html',
  styleUrls: ['./uttarakhand-backpacking.component.css']
})

export class UttarakhandBackpackingComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {
  }
  showDiv = {
    previous : false,
    current : false,
    next : false,
  }
  
    public trip = {
      title:'Uttarakhand',
      subtitle:'Backpacking Trip',
      avail:'All Year',
      Length:'7D - 6N',
      Travel:'Travel Included',
      
      Overview:{
                part1:`Curated with the most enthralling destinations in Kedar Valley.`,
                part2:`The Journey just begins on the trail to Deoriatal. Laying in the epiphanies of Chaukhamba and Kedar peak Deoriatal leaves you nothing but the sheer experience of soulful bliss. 
                       The adventure begins through the rhododendron meadows and the alpine forest in Chopta to Tungnath and Chandrashila. Located at an altitude of 3470 meters, the Tungnath temple is one of the highest Shiva temples. 
                       The magnificence of the Himalayas can be experienced atop Chandrashilla. It is truly the most enthralling experience which seeps right into the bones themselves. After the soulful experience, the days retreat in the alpines of Auli. 
                       This place is the window of Himalayan captures such as Nanda Devi Peak, Ghora Parbat, Hathi Parvat, Beethartoli, and many more. The real bliss is roaming to Gurson bugyal. 
                       The heart wants this enigma to never end but everything ends so does this trip and it ends with a bang in Rishikesh.`,  
                part3:`After carefully selected as the best offbeat destinations this trip offers a whole of Garhwal color.`,
                      
               },

      Itinerary:{
                days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:', 'Day 5:', 'Day 6:'],
                head:['Departure from Delhi:', 
                      'Chopta:', 
                      'Trek to Tungnath and Chandrashila; Travel to Joshimath:', 
                      'Joshimath to Auli: Excursion in Auli:', 
                      'Travel to Rishikesh:', 
                      'White water rafting at Rishikesh:', 
                      'Early Morning arrival at Delhi:'
                     ],
                body:[//day 0 body
                      `We’ll be departing from Delhi in the evening. 
                       And hence most of the road journey would be covered during the night.`,
                      //day 1 body
                       `We reach Chopta by early evening. It’s filled with an eccentric view. As the name suggests. 
                       After soaking the solace in these parts we’ll retire in the camps at Chopta.`,
                       //day 2 body
                       `Early morning blooms are mesmerizing in these parts. The tea lovers are gonna love the spectacle. 
                       After a hearty meal, we’ll trek to Tungnath Temple, where the lord Shiva lies. 
                       The climb is mild and the view is mesmerizing. From here it’s just a 2 Km climb for Chandrashilla. 
                       The summit seems to touch the sky. You will have a mesmerizing 360 view of the Himalayas. 
                       We’ll have a little snack here at the top and caution guys, no littering. 
                       After this experience, we’ll trek down to Chopta. 
                       From here we’ll travel to Joshimath.`,
                       //day 3 body
                       `We’ll be traveling to Auli, a winter paradise. We’ll arrive there in the evening. 
                       You may relax in the camps and can stroll around the campsite. The villagers are quite friendly here. 
                       The evening will be majorly around a bonfire for you to reminisce about your adventure.
                       The mornings and to precise the sunrises are something to look for. 
                       The peaks around Auli are fanatical. You can see “The sleeping beauty” a few Himalayan peaks aligned in a way that looks like a peerless dame sleeping nearby.
                       You can also see Nana Devi peak, Trishul peak, Hathi Parbat, Dungagiri, Beethartoli, Ghori Parat, and Mana Parbat.
                       The chilling weather and a scenic view with a hot cup of coffee is the perfect getaway. 
                       We’ll be embarking on an amazing escapade to Gurson Bugyal which is just 3 km ahead. 
                       After being back from this incursion we'll have a little rest and a musical night among the stars and then call the night.`,
                       //day 4 body
                       `After a scrumptious breakfast and a heartful of joy, we leave for Rishikesh. 
                       We’ll take the time of our return to experience the breathtaking spots on our journey home. 
                       We’ll reach Rishikesh in the evening. After checking in the lodgings you can relax and explore the nights near Laxman Jhula. 
                       The cafes there has an addictive vibe in them.`,
                       //day 5 body
                        `This day is gonna be exciting. We’ll be engaging in a thrilling experience. 
                        Here we’ll be plunging into Ganga on a raft. The thrill is something to look for. After this, you can explore Laxman Jhula and Ram Jhula. 
                        It looks like experiencing the two different worlds in such a short distance. 
                        In the night we’ll depart for Delhi.`
                       //day 6 body
                      
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
                  "assets/images/uk-backpacking/slider/rishikesh.jpg", 
                  "assets/images/uk-backpacking/slider/rishikesh-1.jpg",
                  "assets/images/uk-backpacking/slider/rishikesh-5.jpg", 
                  "assets/images/uk-backpacking/slider/rishikesh-6.jpg", 
                  "assets/images/uk-backpacking/slider/chopta.jpg",
                  "assets/images/uk-backpacking/slider/chopta-4.jpg",
                  "assets/images/uk-backpacking/slider/chopta-6.jpg",
                  "assets/images/uk-backpacking/slider/tungnath.jpg",
                  "assets/images/uk-backpacking/slider/joshimath.jpg",
                  "assets/images/uk-backpacking/slider/auli-2.jpg",
                  "assets/images/uk-backpacking/slider/auli-5.jpg",
                  "assets/images/uk-backpacking/slider/auli-6.jpg",
                  "assets/images/uk-backpacking/slider/auli-8.jpg",
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
  { price: "₹13,999", occupancy: "Triple Occupancy" }
];

