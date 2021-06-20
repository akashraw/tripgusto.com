import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manali-kasol-trithan-back',
  templateUrl: './manali-kasol-trithan-back.component.html',
  styleUrls: ['./manali-kasol-trithan-back.component.css']
})
export class ManaliKasolTrithanBackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Manali Kasol Tirthan',
    subtitle:'Backpacking Trip',
    avail:'all yearl',
    Length:'6D-5N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`Situated on the banks of the Beas river, Manali overs exquisite experiences such as Hidimba Temple, Manu Temple, and Vashisth temple. The day ends at Solang valley.`,
              part2:`On the banks of river Parvati, Kasol has made a unique picture on the map. This place offers a unique mix of food and culture. From here you can break a leg to Chalal, Malana, and Waichin. The roaring of the Parvati river, the gust of Himalayan wind, and long trails between the alpine forests fill you with its sheer appreciation. The nights are mostly musical and around a bonfire.`,  
              part3:`One of the most offbeat places mapped as an exotic destination. The destination offers authentic village excursions at Jibhi. Through the dense alpine forest, the day breaks at a local waterfall mesmerizing the whole experience.`,
              part4:`The trip takes you to explore more with Shoja, Jalori, and Serolsar Lake. Located at an altitude of 3100 meters Serloskar lake is a major attraction of Tirthan Valley. The pristine lake offers a soulful view of the majestic Himalayas.`,    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:', 'Day 5:', 'Day 6:'],

              head:['Departure from Delhi:', 
                    'Manali Excursion:', 
                    'Solang Valley:', 
                    'Kasol:', 
                    'Kasol to Jibhi:', 
                    'Excursion to Serolsar lake and Jalori pass.',
                    'Early Morning arrival at Delhi:'
                   ],
              body:[//day 0 body
                    `We’ll be departing from Delhi in the evening as it’s an 11 hrs road trip to Manali. After a nice dinner, most of our journey will be spent asleep. Let me remind you of your warm clothing as mornings are chilling in these mountains.`,
                    //day 1 body
                     `There are a lot of things which can be done in Manali. From the local retreat manali offers alpine excursion to himba temple, Manu temple and vashisht temple. There is a hot water spring which is most intriguing  You may choose to rest in the hotel and have a nice stroll around the city in the evening. You may also visit old Manali for its vibing cafes.`,
                     //day 2 body
                     `We can also visit the Solang valley and go skiing. The valley is full of scenic views. We can visit the Manu temple and water spins. We’ll get back to Manali for the night.`,
                     //day 3 body
                     `After breakfast, we’ll depart for Kasol at a decent time in the morning. The scenic village is engulfed by Pinecone trees. The smell of the forest mesmerizes one's mind. The route is adjacent to the Parvati River. The roaring of the river is hard to ignore. I am pretty sure till this time the photographer in you will lit up. After a nice little excursion to Chalal village, we’ll settle down for some refreshments. The evening at Kasol is something to look for. From the local handlooms to the items of your curiosities is being offered by this city. Now the place is famous for new experiences and the addictive lifestyle of being in a cozy cafe. Here you may choose to defect for all the gourmet this place has to offer. Don’t forget to sleep as the accommodations will be waiting for you.`,
                     //day 4 body
                     `After breakfast, we’ll depart for Jibhi. We’ll be reaching Jibhi at noon at a decent time. Here we’ll have a quick breakfast and freshen up a bit. Here you can choose to relax and enjoy the Himalayan spectacle or you can have a little excursion in the forest. We’ll have a little hike to a nice little waterfall and will explore Jibhi on foot. We’ll have a musical night over a bonfire to reminisce the journey we had so far. The nights are long but the company makes it worthwhile. As your discretion calls one may retire to a hotel.`,
                     //day 5 body
                      `This day is gonna be lengthy but exciting. After breakfast, we’ll drive to Jalori Pass and will also visit the village Shoja on the way. After reaching Jalori we’ll trek to “360 viewpoints”. As the name itself suggests, it’s a 360 view of Himalayan grandeur. After soaking in this scenic view we’ll head to Serolsar Lake. It’s a 6 Km long mild hike to Lake Serolsar. After the excursion, we’ll be back in Jibhi.
                      The morning calls for a bath and what's better than being at Kheerganga. There is a hot water spring at Kheerganga which you can take to expunge all your fatigue. After breakfast, we’ll trek down to Bharshaini and visit Manikaran Sahib Gurudwara. The place is profound and people from all around visit this place for solace and its sheer culture. Heads up for a shopping spot. From here we’ll depart for Delhi.`,
                     //day 8 body
                   ]

                  },

    inclusions:[
                `Travel by Volvo bus to manali and vice-versa. Transfer to a local vehicle.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 1: Breakfast ; Day 2: Breakfast + Dinner; Day 3: Breakfast, Day 4 : Breakfast + Dinner; Day 5 : Breakfast)',
                'Sightseeing as per Itinerary',
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'day bag',
            
                'Sport Shoes/casual shoes',
                
                'A pair of full sleeve shirts/T-shirts',
                
                '2 pairs of cotton socks and 2 pairs of woolen socks',
                
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
                "assets/images/manali-kasol-tirthan/manali-gallery-1.jpg", 
                "assets/images/manali-kasol-tirthan/manali-gallery-2.jpg",
                "assets/images/manali-kasol-tirthan/manali-gallery-3.jpg", 
                "assets/images/manali-kasol-tirthan/manali-gallery-4.jpg", 
                "assets/images/manali-kasol-tirthan/kasol-gallery.jpg",
                "assets/images/manali-kasol-tirthan/jibhi-gallery1.jpg",
                "assets/images/manali-kasol-tirthan/jalori-mata-gallery.jpg",
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
{ price: "₹14,499", occupancy: "Double Occupancy" },
{ price: "₹12,999", occupancy: "Triple Occupancy" }
];