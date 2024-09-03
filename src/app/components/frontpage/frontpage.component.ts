import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css',
})
export class FrontpageComponent {
  menuOpen = true
  hidden = false
  selectedTab = 'women';
  foodMenuOpen = false;
  marketMenuOpen = false;

  constructor(private router : Router) { }

  ngOnInit(){
  }

  toggleMarketMenu(){
    this.marketMenuOpen = !this.marketMenuOpen
    this.foodMenuOpen = false
  }

  toggleFoodMenu(){
    this.foodMenuOpen = !this.foodMenuOpen;
    this.marketMenuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    setTimeout(()=>{ this.hidden = !this.hidden }, 200);
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }
  
}
