import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2946&q=80',
    },
    {
      title: 'forest',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9yZXN0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'women',
      url: 'https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      title: 'underwear',
      url: 'https://images.unsplash.com/photo-1568441556126-f36ae0900180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5kZXJ3ZWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
  ];

  setCurrentPage(i: number) {
    this.currentPage = i;
  }
  setCurrentPageBack() {
    if (this.currentPage > 0) this.currentPage += -1;
  }
  setCurrentPageNExt() {
    if (this.currentPage < this.images.length - 1) this.currentPage += 1;
  }
  getNextClass() {
    if ((this.currentPage = this.images.length - 1)) return 'disabled';
    return '';
  }
}
