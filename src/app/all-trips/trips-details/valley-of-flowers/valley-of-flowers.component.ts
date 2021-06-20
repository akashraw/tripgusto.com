import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-valley-of-flowers',
  templateUrl: './valley-of-flowers.component.html',
  styleUrls: ['./valley-of-flowers.component.css']
})
export class ValleyOfFlowersComponent implements OnInit {
  showDiv = {
    Itinerary : true,
    Costing : false,
    MoreInfo : false
  }

  constructor() { }

  ngOnInit(): void {
  }
  public trip = {
    title:'Uttarakhand',
    subtitle:'Backpacking Trip',
    avail:'All Year',
    Length:'5D - 4N',
    Travel:'Travel Included',
    
    Overview:{
              part1:`This hidden treasure is known for its vast valley of flowers and with every passing day, this land changes its colors as if nature is changing the carpets in the living area. Located at the core of Nanda Devi Biosphere makes it a must todo trek.`,
              part2:`At an altitude of 14000 ft, this place is home to millions of species of wildflowers such as saxifrages, sediams, lilies, poppy, calendulas, daisies, geranium, zinnia, and petunia. The status of National Park was granted to this valley in 1982 and is also one of the world heritage sites. Life in these parts is endearing as this is also home to some endangered species such as Asiatic Back bear, snow leopard, Blue sheep, Brown Bear, and more.`,  
              part3:`The best time to visit this hidden jewel is from Mid July to Mid August. The place is also known for Hemkund Sahib Gurudwara with a challenging climb and a serene lake at the top. The exhilarating view of the valley puts your mind in awe.`,
                    
             },

    Itinerary:{
              days:['Day 1:', 'Day 2', 'Day 3:', 'Day 4:', 'Day 5:'],
              head:['Rishikesh to Joshimath (275 km):', 
                    'Joshimath to Govindghat and trek to Ghangaria:', 
                    'Ghangaria to Valley of Flower and back to Ghangaria( 7-8km):', 
                    'Ghangaria to Hemkund sahib:', 
                    'Ghangaria to Govindghat and a long drive back to Rishikesh:',
                   ],
              body:[//day 1 body
                    `It all starts with an early morning departure from Rishikesh. With a spectacular 10 to 11 hrs drive along the majestic Ganges Valley to Joshimath which is situated at the altitude of 6100ft. Though high-speed networks are available all along the way I doubt you would be using any as the morning glimpses along the Ganges valley is breathtaking. Needless to worry we got you covered with tea and meal breaks for those grumbling tummies. For tea lovers, you are in luck, as this is Uttarakhand and tea is the only bonding beverage here. 
                      Driving through national highway 58 you would come across one of the most wondrous places on the face of earth Devprayag. Here witness the confluence of the mysticism through the rivers Bhagirathi and Alaknanda transcending into Ganga. This would be the first Prayag out of five (where two rivers meet each other) which you would be witnessing on this route. The route is mostly lively until you enter Srinagar where lies the foundation of one of the largest Universities in India. This city also takes pride in one of the biggest dams ever constructed on the river Alaknanda. 
                      Next, we would be passing through the bustling streets of Rudraprayag. The second Prayag out of the five where you will witness the convergence of river Mandakini and river Alaknanda. While leaving the city you will witness some breathtaking scenes. Trust me this doesn’t stop here and by the way tea lovers, what good is a tea without the tanginess of pakoras and we have got you covered here as well to take a moment and sink in the flavor of tea, tangy pakoras, and nature. 
                      Next is Karnprayag the third Prayag out of five where you will witness the confluence of river Pindar and river Alaknanda. 
                      Pindar river is blue as the sky, it always leaves me in awe. Next in line is the fourth Prayag, Nandprayag. Here you will witness the convergence of the river Mandakini and river Alaknanda. The town is relatively small but has its delicacies. Through the hustling roads from Chamoli city, we will be crossing Helang. This place has a vibe. 
                      Now we will be climbing over the clouds, this place is the elevator of the mountains. From this place, things will start bewildering your mind. The northern wind calls for an adventure junkie.
                       Soaring through these valleys we will take our first stop at Joshimath to call in the night however those who are full of excitement at this point can witness the majestic Himalayas and the mysticism of the Joshimath temple. 
                      Before you dive into slumber open your windows and graze the starry night just to find the moon to be closer than ever and if lucky the starry sky.`,
                    //day 2 body
                     `So, I am not an early riser but the thrill of this day won’t let you sleep for long. Mornings are lazy in the mountains and with a cold gust of air on your face, we will travel to Govindghat. Crossing the fifth Prayag that is Vishnuprayag, you will witness the junction of two soaring rivers here, Vishnuganga and Alaknanda. After a short while, we will be arriving at Govindghat. With a quick rest and online registration here, we will finally be reaching Pulna. Now here we will be ascending on a beautiful stone-paved path towards Ghangaria. The valley is full of waterfalls and rich vegetation. The stunning beauty is gonna leave a mark for a long long time in your hearts. This is just the start though. The trek route is well organized with local shops and lavatories, so those early morning haters like me rest assured you will find a moment to spare anyway. Foodies my brethren don’t worry I hear your bellies grumbling. We’ll be prepared with packed tiffins all full of surprises and joy. A picnic in the mountains sounds fun right. The whole valley goes along with the river Lakshman Ganga. Networks are scanty here but you should be able to connect with BSNL at Ghangaria. Finally, we will be reaching Ghangaria which is the ultimate stop at 9800 ft. This small village is freakishly lively concerning its size. We’ll be staying in a homely guest house with an appetizing menu for foodies like me. But tonight we’ll be resting here for tomorrow.`,
                     //day 3 body
                     `Early morning is the key here, we’ll trek to the valley of flowers at the altitude of 11500 ft. The valley is full of waterfalls and it's hard not to get used to it as it always fascinates me. Valley of flowers comes under Nanda Devi bio reserve so no littering guys. We’ll be having an amazing picnic in the valley. The flora and fauna are rich in this valley. The most astonishing is that the number of waterfalls just gets doubled. We’ll be scaling to the farthest edge of the Pindari glacier and guys here take a moment to breathe and let the time pass through you and try to find your solace in the clear skies and the greenest meadows. I know the whole idea is to be lost and then to be found again but the biosphere closes till 5:00 pm and we have to be back by then to Ghangaria. I doubt you would be able to take hold of your exhilaration as this place excites the soul itself.`,
                     //day 4 body
                     `Early morning we will start the trail and hike for (6 Kms) to visit at the “Hemkund Sahib”. It is a famous Sikh pilgrimage destination. In the afternoon we will trek downwards to reach Ghangaria and stay there for the night. The evening time is free and you can utilize this time to explore the stunning surroundings and for getting some rest.`,
                     //day 5 body
                     `This is the part which I hate the most, scaling down to the Govindghat via Pulna. Surprisingly the trek down is faster but doesn’t go out of the limb as these stone pathways are slippery due to constant moisture. Once back to Ghangaria, tea lovers are gonna have a pleasant time there. This will be a farewell to the most exquisite place on the face of the earth. We’ll be driving back to Rishikesh, rest assured overnight stay in a pleasant hotel in the epiphanies of the river Ganga would be already waiting for you guys. Have a time of a lifetime.`,
                    
                   ]

              },

    inclusions:[
                `Travel by Traveller.`,
                'Stay available on a double/ triple sharing basis',
                'Meals plan day 1 dinner to day 4 breakfast',
                'Sightseeing as per Itinerary',
                'Trek Leader present all the time during trip.',
                'First aid kit and oxygen cylinder.',
              ],

    excluded: [
                'Anything apart from Inclusions',
                'Activities apart from mentioned in the Itinerary',
                'Any expenses arising out of unforeseen circumstances (eg. climatic conditions )or any entry fees'
              ],

    TTC:[        //things to carry
                'Must Have original Govt. Photo Identity',
                
                'Backpack (min 60 Ltrs) with rain cover',
            
                'Trekking Shoes (Forclaz 100, 500 recommended)',
                
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
                "assets/images/valley-of-flowers/valley-6.jpg", 
                "assets/images/valley-of-flowers/valley-5.jpg",
                "assets/images/valley-of-flowers/valley-4.jpg", 
                "assets/images/valley-of-flowers/valley-3.jpg", 
                "assets/images/valley-of-flowers/valley-1.jpg",
                "assets/images/valley-of-flowers/valley-2.jpg"
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
{ price: "-", occupancy: "Double Occupancy" },
{ price: "-", occupancy: "Triple Occupancy" }
];