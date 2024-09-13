import { Component, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DataService } from '../../services/data.service';


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
  user: any;

  constructor(private router : Router, public dataService: DataService) { }

  ngOnInit(){
    this.dataService.getUserInfo().subscribe(
      (data) => {
        console.log(data)
        this.user = this.capitalizeUserName(data)
      },
      (error) => {
        console.log(error)
      }
    )
  }

  capitalizeUserName(user: any) {
    if (user && user.name) {
      user.name = user.name.charAt(0).toUpperCase() + user.name.slice(1);
    }
    return user;
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
