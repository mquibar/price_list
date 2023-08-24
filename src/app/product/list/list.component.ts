import { AfterViewInit, Component, OnInit,ViewChild ,ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import {MatTableDataSource} from '@angular/material/table';
import { MatInput } from "@angular/material/input";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<Product>= new MatTableDataSource();
  displayedColumns: string[] = [
    'title',
    'price'
  ];

  @ViewChild('input', { static: true }) input: ElementRef | undefined;
  constructor(private service: ProductService) { 
    
  }

  ngAfterViewInit (){
    this.input?.nativeElement.focus();
 }

  ngOnInit(): void {
    this.service.findAll().subscribe(products => this.dataSource = new MatTableDataSource(products));
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
