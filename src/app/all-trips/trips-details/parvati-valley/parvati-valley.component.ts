import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parvati-valley',
  templateUrl: './parvati-valley.component.html',
  styleUrls: ['./parvati-valley.component.css']
})
export class ParvatiValleyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Parvati Valley',
    subtitle:'Backpacking Trip',
    avail:'All Year',
    Length:'5D - 4N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`On the banks of river Parvati, Kasol has made a unique picture on the map. This place offers a unique mix of food and culture. From here you can break a leg to Chalal, Malana, and Waichin. The roaring of the Parvati river, the gust of Himalayan wind, and long trails between the alpine forests fill you with its sheer appreciation. The nights are mostly musical and around a bonfire. `,
              part2:`Kheerganga is one of the most suggested destinations to visit for its hot water spring. Situated in between the Parvati valley this place leaves a soulful experience. The trek is mild and goes via the beautiful pinecone forests. It is said that Goddess Parvati once cooked kheer for her eldest son Kartikay. And since then the hot water spring sprouts till date`,  
              part3:`This makes it a perfect getaway for the most cherished Himachal experience. The trip takes you to places like Manikaran and Tosh with a unique flavor of culture and its diversity.`,
                    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:', 'Day 5:', 'Day 6:'],
              head:['Departure from Delhi:', 
                    'Kasol : Excursion to Chalal Village:', 
                    'Excursion to Malana Village:', 
                    'Barshaini to Rudranag:', 
                    'Tosh excursion:', 
                    ' Tosh via Manikaran to Delhi:', 
                    'Early Morning arrival at Delhi:'
                   ],
              body:[//day 0 body
                    `We’ll be departing from Delhi in the evening as it’s an 11 hrs (481 Km) road trip to Bhuntar. After a nice dinner, most of our journey will be spent asleep. Let me remind you of your warm clothing as mornings are chilling in these mountains. We’ll be visiting Bhuntar and from there we’ll be going to Kasol.`,
                    //day 1 body
                     `We’ll reach Kasol at a decent time in the morning and after a nice breakfast, we will break a leg to Chalal village. The scenic village is engulfed by Pinecone trees. The smell of the forest mesmerizes one's mind. The route is adjacent to the Parvati River. The roaring of the river is hard to ignore. I am pretty sure till this time the photographer in you will lit up. After a nice little excursion to Chalal village, we’ll settle down for some refreshments. The evening at Kasol is something to look for. From the local handlooms to the items of your curiosities is being offered by this city. Now the place is famous for new experiences and the addictive lifestyle of being in a cozy cafe. Here you may choose to defect for all the gourmet this place has to offer. Don’t forget to sleep as the accommodations will be waiting for you.`,
                     //day 2 body
                     `Malana is a very secluded place and cultural solidarity is something to look for. The village is situated around mesmerizing flora and fauna. The village is famous for its serene beauty and much more. There you may relax or explore. We’ll trek back to Kasol after exploring Malana village.`,
                     //day 3 body
                     `I know the bed doesn't let you up and go on in the chilly mornings but the destination calls for it. After an early breakfast well visit Barshaini via our convenience and from there we’ll trek to Kheerganga. The trek is mild and goes via the beautiful pinecone forests. We’ll be visiting via Rudranag an abode of lord shiva. We’ll have a musical night over a bonfire to reminisce the journey we had so far. The nights are long but the company makes it worthwhile. As your discretion calls one may retire to the tents.`,
                     //day 4 body
                     `From Rudranag we’ll trek to Tosh. The village is lively and you can also witness the magnificence of  Parvati valley. There you can rest and explore nearby. The locals are quite friendly around here too. The nights in these places are serene with the Himalayas over our heads.
`,
                     //day 5 body
                      `After breakfast, we’ll trek down to Bharshaini and visit Manikaran Sahib Gurudwara. The place is profound and people from all around visit this place for solace and its sheer culture. Heads up for a shopping spot. From here we’ll depart for Delhi.`
                     //day 6 body
                    
                   ]

              },

    inclusions:[
                `Travel by volvo bus to bhuntar vice versa. Transfer to local vehicle.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 1:  Breakfast; Day 2: Breakfast; Day 3: Breakfast + Dinner; Day 4: Breakfast; Day 5: Breakfast;)',
                'Sightseeing as per Itinerary',
                'Stay (Day 1&2: hotel at kasol; Day 3: stay in camps; Day 4: saty in hotel )'
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
                "assets/images/parvati-valley-backpacking/kheerganga-gallery.jpg", 
                "assets/images//parvati-valley-backpacking/tosh-gallery-5.jpg",
                "assets/images//parvati-valley-backpacking/pin-parvati-3.jpg", 
                "assets/images//parvati-valley-backpacking/pin-parvati-1.jpg", 
                "assets/images//parvati-valley-backpacking/tosh-gallery-3.jpg",
                "assets/images//parvati-valley-backpacking/tosh-gallery-2.jpg"
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
{ price: "₹11,499", occupancy: "Double Occupancy" },
{ price: "₹10,000", occupancy: "Triple Occupancy" }
];