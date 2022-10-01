import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food';
    Activity:any=[{
               Catogary:"Veg",
                            food:[
                          {
                                Title:"Panner",
                                Image:"https://healthynibblesandbits.com/wp-content/uploads/2018/10/How-to-Make-Paneer-10.jpg",
                          },
                                 {
                                  Title:"Sabji",
                                  Image:"https://assets.entrepreneur.com/content/3x2/2000/20150814185551-potatos-food-vegtable-chef.jpeg"
                         }
                        ] },
                        
                {
                  Catogary:"Nonveg",
                         food:[{
                                Title:"Mooton",
                                Image:"https://www.thespruceeats.com/thmb/kFPbPBvit_2pnmUt8lhABceAM-I=/3329x3329/smart/filters:no_upscale()/goat-mutton-curry-1957594-hero-01-afaf638173cd47d595c7ad99a018cf01.jpg"
                         },
                            {
                            Title:"Chicken",
                            Image:"https://www.seriouseats.com/thmb/OBckE8o3ypWrULAwlkb11RvKD7w=/1000x1000/smart/filters:no_upscale()/20210714-potato-starch-fried-chicken-vicky-wasik-seriouseats-20-17e193a6bf274bba9091810a0b18ef89.jpg"
                           
                          }]
                        }
                      ];
  selectedCatogary:any=null
  selectedFood:any=null
  a(val:any){
  this.selectedFood=val
  }
  b(a:any){
    this.selectedCatogary=a
  }

                    }
                        
                         