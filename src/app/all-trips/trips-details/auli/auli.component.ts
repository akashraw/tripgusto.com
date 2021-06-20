
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auli',
  templateUrl: './auli.component.html',
  styleUrls: ['./auli.component.css']
})

export class AuliComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {}

public trip = {
      title:'Auli',
      subtitle:'Stay Trip',
      avail:'All Year',
      Length:'3D - 2N',
      Travel:'Travel Included',
      
      Overview:{
                part1:`Apart from being an exhilarating skiing destination, Auli is also known for its magnificent views of Nanda Devi Peak, Ghora Parbat, Hathi Parvat, Beethartoli, and many more. The peaks around Auli are fanatical. You can see “The sleeping beauty” a few Himalayan peaks aligned in a way that looks like a peerless dame sleeping nearby.`,
                part2:`This hidden jewel offers a fanatical excursion to Gurson Top via rhododendrons and alpine forests. This is the perfect offbeat destination for your introduction to the flavors of Garhwal. The nights are long and starry and on lucky days one can scale the milky way`,  
                part3:`The weekend retreat is preferred as this place is open year-round`,
                      
               },
 
      Itinerary:{
                days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:',],
                head:['Departure from Delhi:', 
                      'Rishikesh to Auli (280 KM):', 
                      'Auli Excursion:', 
                      'Auli: Rishikesh: Delhi:'
                     ],
                body:[//day 0 body
                      `Departure from Delhi. Though we are embarking on a chill getaway a proper rest is needed too for the fun of a lifetime. Take the complete rest.`,
                      //day 1 body
                       `It all starts with an early morning departure from Rishikesh. With a spectacular 10 to 11 hrs drive along the majestic Ganges Valley to Joshimath which is situated at the altitude of 6100ft. Though high-speed networks are available all along the way I doubt you would be using any as the morning glimpses along the Ganges valley is breathtaking. Needless to worry we got you covered with tea and meal breaks for those grumbling tummies. For tea lovers, you are in luck, as this is Uttarakhand and tea is the only bonding beverage here. 

Driving through national highway 58 you would come across one of the most wondrous places on the face of earth Devprayag.
 Here witness the confluence of the mysticism through the rivers Bhagirathi and Alaknanda transcending into Ganga. 
This would be the first Prayag out of five (where two rivers meet each other) which you would be witnessing on this route.
 The route is mostly lively until you enter Srinagar where lies the foundation of one of the largest Universities in India. 
This city also takes pride in one of the biggest dams ever constructed on the river Alaknanda. Next, we would be passing through the bustling streets of Rudraprayag. 
The second Prayag out of the five where you will witness the convergence of river Mandakini and river Alaknanda. While leaving the city you will witness some breathtaking scenes. 
Trust me this doesn’t stop here and by the way tea lovers, what good is a tea without the tanginess of pakoras and we have got you covered here as well to take a moment and sink in the flavor of tea, tangy pakoras, and nature.
 Next is Karnprayag the third Prayag out of five where you will witness the confluence of river Pindar and river Alaknanda. Pindar river is blue as the sky, it always leaves me in awe. 
Next in line is the fourth Prayag, Nandprayag. 
Here you will witness the convergence of the river Mandakini and river Alaknanda. 
The town is relatively small but has its delicacies. 
Through the hustling roads from Chamoli city, we will be crossing Helang. 
This place has a vibe. Now we will be climbing over the clouds, this place is the elevator of the mountains. From this place, things will start bewildering your mind. 
The northern wind calls for an adventure junkie. Soaring through these valleys we will take our first stop at Joshimath and then a short ride to Auli. 
The 11 Km escapade. The key is to get checked in as early as possible. With scrumptious food waiting for you, the nights are gonna be spent around a bonfire.
 Before you dive into slumber open your windows and graze the starry night just to find the moon to be closer than ever and if lucky the starry sky.
`,
                       //day 2 body
                       `The early bird takes the first bite. The mornings and to precise the sunrises are something to look for. The peaks around Auli are fanatical. You can see “The sleeping beauty” a few Himalayan peaks aligned in a way that looks like a peerless dame sleeping nearby. You can also see Nana Devi peak, Trishul peak, Hathi Parbat, Dungagiri, Beethartoli, Ghori Parat, and Mana Parbat. 
This day is full of surprises. After early morning breakfast, we’ll be taking the chair car to Auli top. The chilling weather and a scenic view with a hot cup of coffee is the perfect getaway. We’ll be embarking on an amazing escapade to Gurson Bugyal which is just 3 km ahead. After being back from this incursion we'll have a little rest and a musical night among the stars and then call the night.
`,
                       //day 3 body
                       `After a scrumptious breakfast and a heartful of joy, we leave for Delhi. We’ll take the time of our return to experience the breathtaking spots on our journey home. Once we reach Rishikesh we’ll take a little breather and then on the way to Delhi.`,
                       //day 4 body
                       `Reach Delhi in the morning`,
                      
                     ]
  
                },
 
      inclusions:[
                  `Travel by Traveller.`,
                  'Stay available on a double/ triple sharing basis',
                  'Meals as per Plan ( Day 1:  Dinner; Day 2: Breakfast + Dinner; Day 3: Breakfast;)',
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
                  "assets/images/auli/auli-2.jpg",
                  "assets/images/auli/auli-5.jpg", 
                  "assets/images/auli/auli-6.jpg", 
                  "assets/images/auli/auli.jpg",
                  "assets/images/auli/auli-8.jpg"
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
  { price: "₹9,999", occupancy: "Double Occupancy" },
  { price: "₹8,999", occupancy: "Triple Occupancy" },
  { price: "₹7,999", occupancy: "Quad Occupancy" }
];
