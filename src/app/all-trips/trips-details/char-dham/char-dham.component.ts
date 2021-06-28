import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-char-dham',
  templateUrl: './char-dham.component.html',
  styleUrls: ['./char-dham.component.css']
})
export class CharDhamComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Char',
    subtitle:'Dham',
    avail:'May-November',
    Length:'11D/10N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`Also known as Chota Char dham includes “Yamunotri, Gangotri, Kedarnath, and Badrinath. The pilgrimage begins towards Yamunotri Dham. The scenic road leads to the birthplace of the sacred river Yamuna known as Yamunotri Dham. From here we’ll visit the birthplace of the divine river Ganga at Gangotri Dham. From here we’ll travel to Kedar valley to the altars of Lord Shiva at Kedarnath Dham. 
              After the soulful experience at Kedarnath we’ll visit Badrinath Dham under the care of lord Vishnu. The whole valley is full of meadows and scenic spots. It is truly the most enthralling experience which seeps right into the bones themselves.`,
                    
             },

    Itinerary:{
              days:['Day 1:', 'Day 2', 'Day 3:', 'Day 4:', 'Day 5:', 'Day 6:', 'Day 7:','Day 8:', 'Day 9:', 'Day 10:', 'Day 11:'],
              head:['Rishikesh Local Sightseeing:',
                    'Rishikesh to Barkot', 
                    'Barkot to Yamunotri and then back to Barkot.', 
                    'Barkot to Uttarkashi', 
                    'Uttarkashi to Gangotri and Back to Uttarkashi', 
                    'Uttarkashi to Guptkashi', 
                    'Gupkashi to kedarnath',
                    'Kedarnath to Guptkashi',
                    'Guptkashi to Badrinath',
                    'Badrinath sightseeing',
                    'Badrinath to Rishikesh',
                   ],
              body:[//day 1 body
                    `After checking in the lodgings you can relax and explore the nights near Laxman Jhula. The cafes there has an addictive vibe in them.This day is gonna be exciting. We’ll be engaging in a thrilling experience. Here we’ll be plunging into Ganga on a raft. The thrill is something to look for. After this, you can explore Laxman Jhula and Ram Jhula. It looks like experiencing the two different worlds in such a short distance. In the night we’ll depart for Delhi. We’ll witness Ganga Arti at Parmarth Niketan.`,
                    //day 2 body
                     `We’ll be doing the early morning departure to Barkot after breakfast covering a distance of 160 Km. Barkot lies at the bank of the river Yamuna at Uttarkashi. The campsite lies near river Yamuna at an altitude of 4100 ft.`,
                     //day 3 body
                     `Covering a drive of 40 Km to Yamnotri Dham and then breaking the leg to a 6 km hike. As per convenience, you may hire a pony or Palki. Rest assured as our expert guide will make sure that you experience the mysticism of the Yamunotri Dham at an altitude of 10,200 ft. We’ll be back in Barkot by evening.`,
                     //day 4 body
                     `From Barkot we’ll travel to Uttarkashi on a 90 Km long drive crossing a plethora of exquisite Himalayan ranges. The local escapades is a must-suggested event just in case we have time after the journey. Uttarkashi is at an altitude of 6100 ft, this hidden jewel is a perfect retreat.`,
                     //day 5 body
                     `The day preludes an early morning departure to Gangotri Dham (10,200 ft) at a distance of 100 km. The journey encompasses a beautiful deodar forest en route Gangotri Dham. The temperature here drops quickly hence woolens are the must to keep warm. After sinking in the Himalayan bliss we’ll depart back to Uttarkashi where we’ll retire for the night.`,
                     //day 6 body
                      `We’ll check out early to travel to Guptashi on a 220 km long drive. En route, you will witness Asia's largest rock-filled dam, “Tehri Dam”. Next, we would be passing through the bustling streets of Rudraprayag. The second Prayag out of the five where you will witness the convergence of river Mandakini and river Alaknanda. While leaving the city you will witness some breathtaking scenes.`,
                     //day 7 body
                     `The day breaks with an early morning drive to Gauri Kund. It covers a 30kms drive to Gauri Kund and is surrounded by exquisite waterfalls and lush deodar forests. From Gauri Kund, the journey begins on foot to Kedarnath Temple covering an 18kms hike.As per convenience, you may hire a pony or Palki. Rest assured as our expert guide will make sure that you experience the mysticism of the Kedar Valley. We’ll reach Kedarnath temple in the evening, and experience the soulful escape at the altar of Lord Shiva.`,
                    //day 8 body
                    `The morning aarti at Kedarnath is a blissful experience and is most recommended. Today we’ll explore the mystics of Lord Shiva and Bhairav Baba. After that, we’ll descend to Gauri Kund and then back to the resort at Guptkashi.`,
                    //day 9 body
                    `After a hearty breakfast, we’ll break the day on a 185kms drive to Badrinath from Guptkashi. Next is Karnprayag the third Prayag out of five where you will witness the confluence of river Pindar and river Alaknanda. Pindar river is blue as the sky, it always leaves me in awe. Next in line is the fourth Prayag, Nandprayag. Here you will witness the convergence of the river Mandakini and river Alaknanda. The town is relatively small but has its delicacies. Through the hustling roads from Chamoli city, we will be crossing Helang. This place has a vibe. Now we will be climbing over the clouds, this place is the elevator of the mountains. From this place, things will start bewildering your mind. The northern wind calls for an adventure junkie. Soaring through these valleys we will take our first stop at Joshimath. From here you will witness the majestic deodar trees. We’ll retire at Badrinath Dham.`,
                    //day 10 body
                    `After early morning darshan, We’ll embark on Badrinath escapade. We’ll visit Mana village, the last village in the Indian Territory. We’ll also visit the famous Bheem Pul (A natural stone bridge on the Saraswati River). We’ll retire the day back at Badrinath.`,
                    //day 11 body
                    'After a soulful breakfast, we’ll depart to Rishikesh on a journey of 300 km drive. Rest assured overnight stay in a pleasant hotel in the epiphanies of the river Ganga would be already waiting for you guys. Have a time of a lifetime.',
                   ]

              },

    inclusions:[
                `Transportation by Traveller or Bus.`,
                'Stay available on a double/ triple sharing basis',
                'Meals as per MAP Plan',
                'Sightseeing as per Itinerary',
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'Backpack (min 60 Ltrs) with rain cover and day bag',
            
                'Sport Shoes (Prefered Trekking Shoes) and trekking shoes',
                
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
                "assets/images/char-dham/kedar-badri-1.jpg", 
                "assets/images/char-dham/badrinath-slider.jpg",
                "assets/images/char-dham/badrinath-slider-4.jpg", 
                "assets/images/char-dham/kedar-badri-2.jpg", 
                "assets/images/char-dham/kedarnath-2.jpg",
                "assets/images/char-dham/vasu-dhara.jpg",
                "assets/images/char-dham/vasu-dhara-1.jpg",
                "assets/images/char-dham/badrinath-slider-1.jpg"
               
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