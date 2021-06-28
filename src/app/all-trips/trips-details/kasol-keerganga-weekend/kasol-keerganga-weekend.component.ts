import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kasol-keerganga-weekend',
  templateUrl: './kasol-keerganga-weekend.component.html',
  styleUrls: ['./kasol-keerganga-weekend.component.css']
})
export class KasolKeergangaWeekendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Kasol - Kheerganga',
    subtitle:'Weekend Getaway Trip',
    avail:'All year',
    Length:'3D-2N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`On the banks of river Parvati, Kasol has made a unique picture on the map. This place offers a unique mix of food and culture. From here you can break a leg to Chalal, Malana, and Waichin. The roaring of the Parvati river, the gust of Himalayan wind, and long trails between the alpine forests fill you with its sheer appreciation. The nights are mostly musical and around a bonfire.`,
              part2:`Kheerganga is one of the most suggested destinations to visit for its hot water spring. Situated in between the Parvati valley this place leaves a soulful experience. The trek is mild and goes via the beautiful pinecone forests. It is said that Goddess Parvati once cooked kheer for her eldest son Kartikay. And since then the hot water spring sprouts till date.`,  
              part3:`This makes it a perfect getaway for the most cherished Himachal experience. The trip takes you to places like Manikaran and Tosh with a unique flavor of culture and its diversity.`,
                    
             },

    Itinerary:{
              days:['Day 0:', 'Day 1', 'Day 2:', 'Day 3:', 'Day 4:',],
              head:['Departure from Delhi:',
                    'Kasol:', 
                    'Barshaini to Kheerganga:', 
                    'Kheerganga via Manikaran to Delhi',
                    'Early Morning arrival at Delhi:',
                   ],
              body:[//day 0 body
                    `We’ll be departing from Delhi in the evening as it’s an 11 hrs (481 Km) road trip to Bhuntar. After a nice dinner, most of our journey will be spent asleep. Let me remind you of your warm clothing as mornings are chilling in these mountains. We’ll be visiting Bhuntar and from there we’ll be going to Kasol.`,
                    //day 1 body
                     `We’ll reach Kasol at a decent time in the morning and after a nice breakfast, we will break a leg to Chalal village. The scenic village is engulfed by Pinecone trees. The smell of the forest mesmerizes one's mind. The route is adjacent to the Parvati River. The roaring of the river is hard to ignore. I am pretty sure till this time the photographer in you will lit up. After a nice little excursion to Chalal village, we’ll settle down for some refreshments. The evening at Kasol is something to look for. From the local handlooms to the items of your curiosities is being offered by this city. Now the place is famous for new experiences and the addictive lifestyle of being in a cozy cafe. Here you may choose to defect for all the gourmet this place has to offer. Don’t forget to sleep as the accommodations will be waiting for you.
`,
                     //day 2 body
                     `I know the bed doesn't let you up and go on in the chilly mornings but the destination calls for it. After an early breakfast well visit Barshaini via our convenience and from there we’ll trek to Kheerganga. The trek is mild and goes via the beautiful pinecone forests. We’ll be visiting via Rudranag an abode of lord shiva and the passing of a roaring brook. From Rudranag the trek gets a little steep. We should reach Kheerganga in the evening where a musical night over a bonfire will be waiting for you. The nights are long but the company makes it worthwhile. As your discretion calls one may retire to the tents.`,
                     //day 3 body
                     `The morning calls for a bath and what's better than being at Kheerganga. There is a hot water spring at Kheerganga which you can take to expunge all your fatigue. After breakfast, we’ll trek down to Bharshaini and visit Manikaran Sahib Gurudwara. The place is profound and people from all around visit this place for solace and its sheer culture. Heads up for a shopping spot. From here we’ll depart for               Delhi.`,                       
                     //day 4 body
                   ]

              },

    inclusions:[
                `Travel by Volvo bus to bhuntar and vice-versa. further transfer to a local vehicle.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per Plan ( Day 1: Breakfast ; Day 2: Breakfast + Dinner; Day 3: Breakfast)',
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
                "assets/images/kasol-kheerganga/kasol-gallery-1-1.jpg", 
                "assets/images/kasol-kheerganga/kheerganga-gallery-1.jpg",
                "assets/images/kasol-kheerganga/kheerganga-gallery-4.jpg", 
                "assets/images/kasol-kheerganga/kheerganga-gallery-2.jpg", 
                "assets/images/kasol-kheerganga/kasol-gallery.jpg",
                "assets/images/kasol-kheerganga/kheerganga-gallery-6.jpg"
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
 { price: "₹5,999", occupancy: "Double Occupancy" },
 { price: "₹4,999", occupancy: "Triple Occupancy" }
 ];