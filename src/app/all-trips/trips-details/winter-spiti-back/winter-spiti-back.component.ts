import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winter-spiti-back',
  templateUrl: './winter-spiti-back.component.html',
  styleUrls: ['./winter-spiti-back.component.css']
})
export class WinterSpitiBackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Spiti',
    subtitle:'Winter',
    avail:'March-April',
    Length:'7D - 6N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`As the fellow travellers say spiti has three colors blue, brown and white. Enclosed as a cold desert this place offers a soulful experience. The local cuisine is the most recommended activity. The climate here is dry but cold, due to high alleviation the air is this here. The tour takes you through Shimla, Kalpa, Kaza, Hikkim, and many more. 
              The valley offers a rich flora and fauna so keep your heads up for any exotic moments.`,
              part2:`The landscape changes like a season here. We'll be visiting “Pin Valley”. This hidden jewel marks itself as Pin Valley National Park on the map. The grassy landscapes and eccentric brooks make it a perfect retreat. We’ll retire here for the night. 
              After this we’ll visit Chitkul, the last village on the Indo-China border and you can witness the magnificent Kinnaur Kailash from there. This soulful journey is about to ends from Chitkul.`,
                    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:', 'Day 5:', 'Day 6:’,’Day 7:','Day 8:'],
              head:['Departure from Delhi:', 
                    'Shimla to Kalpa:', 
                    'Kalpa to kaza:', 
                    'Kaza Escapade:', 
                    'Departure to Kalpa via Pin Valley:', 
                    'Departure to Kalpa:', 
                    'Departure to Chitkul:',
                    'Departure to Shimla and the evening bus for Delhi:',
                    'Early Morning arrival at Delhi:'
                   ],
              body:[//day 0 body
                    `We’ll be departing from Delhi in the evening as it’s an 11 hrs (481 Km) road trip to Bhuntar. After a nice dinner, most of our journey will be spent asleep. Let me remind you of your warm clothing as mornings are chilling in these mountains. We’ll be visiting Shimla and from here we’ll be departing to Kalpa.`,
                    //day 1 body
                     `The journey invokes the adventurer in you. The 222 km long journey in the epiphanies of the Himalayan vibe is blissful. We’ll be traveling through Narkanda and Kufri. These high-altitude routes are blessed with the exquisite forest of Deodar and Pinecone. We’ll stay the night at Kalpa.`,
                     //day 2 body
                     `We’ll be departing early morning to embark on a crazy journey of 196 Km to Kaza. This day awaits a little excursion to the Nako monastery. After this, our next stop would be at Tabo for a little excursion at Tabo monastery (Tabo Chaos-Khor Monastery). The journey after Nako is a little treacherous as the landscape changes. The road takes you to Kaza via the banks of river Spiti. The valley here is mesmerizing. We’ll reach Kaza in the evening where we’ll retire for the night.`,
                     //day 3 body
                     `After a hot breakfast, we’ll depart on a spiti venture. We’ll cover Hikkim, Komic, Langza, Key Monastery, Chicham Bridge. 
                      Hikkim:- This hidden jewel is situated at an altitude of 4400 meters above sea level. This is the only village which is occupied all year long at this altitude. This is the only village with an operational post office, honoring it with the title of the world's highest altitude Post office. 
                      Komic:- This cute little village packs some crazy punch. The road reaching Komic is the world's highest motorable road to a human settlement.
                      Langza:- The buddha statue of Langza is the iconic location that marks it on the world map for its sheer mysticism. This place offers authentic Spiti cuisine with numerous little cafes.
                      Key Monastery:- This place offers the most soulful experience in the entire trip. Key Monastery is the oldest monastery in the district of Lahaul and Spiti. 
                      Chicham Bridge:- Also known as Asia’s highest bridge. The spectacle is astounding here. If lucky one might see a snow leopard, bearded vulture, and red fox. 
                      After this enthralling experience, we’ll retire at Kaza. The local cuisine is delightful here.`,
                     //day 4 body
                     `After a heartful breakfast, we’ll visit “Pin Valley” at Mudh village. This hidden jewel marks itself as Pin Valley National Park on the map. The grassy landscapes and eccentric brooks make it a perfect retreat. We’ll retire here for the night`,
                     //day 5 body
                      `We’ll depart early in the morning for Kalpa. The route here seems enchanted. The landscape changes in a blink of an eye. After a long perilous journey, we’ll retire at Kalpa.`,
                     //day 6 body
                    `After a heartful meal, we’ll depart for Chitkul. On the way, we’ll stop for a little excursion to Roghi Village and then will also check out the infamous suicide point. The roads here are thrilling. We’ll reach Chitkul in the evening and will retire for the day. Chitkul is the last village on the Indo-China border and you can witness the magnificent Kinnaur Kailash from there.`,
                     //day 7 body
                     `This soulful journey is about to end from Chitkul. We'll take the early morning ride to Shimla and will reach Shimla by noon. This is the souvenir time. You may sit, relax and reminisce here on a hot cup of evening tea. From here we’ll take the evening bus to Delhi.`,
                     //day 8 body
                   ]

              },

    inclusions:[
                `Travel by Volvo bus to Shimla and vice-versa. Transfer to a local vehicle.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per plan ( Day 1: Dinner; Day 2: Breakfast + Dinner; Day 3: Breakfast + Dinner; Day 4 : Breakfast + Dinner; Day 5 : Breakfast + Dinner; Day 6: Breakfast + Dinner; Day 7: Breakfast)',
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
                "assets/images/spiti/kibar-1.jpg", 
                "assets/images/spiti/kinnaur-1.jpg",
                "assets/images/spiti/spiti-4.jpg", 
                "assets/images/spiti/spiti-6.jpg",                 
                "assets/images/spiti/shimla-1.jpg",
                "assets/images/spiti/shimla-2.jpg",
                "assets/images/spiti/shimla-3.jpg",
                "assets/images/spiti/spiti-1.jpg",
                "assets/images/spiti/spiti-2.jpg",
                "assets/images/spiti/spiti-3.jpg",
                "assets/images/spiti/spiti-5.jpg",
                "assets/images/spiti/spiti-7.jpg",
                "assets/images/spiti/spiti-8.jpg",
                "assets/images/spiti/spiti-9.jpg",
                "assets/images/spiti/spiti-10.jpg"
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
{ price: "₹17,999", occupancy: "Double Occupancy" },
{ price: "₹16,499", occupancy: "Triple Occupancy" }
];