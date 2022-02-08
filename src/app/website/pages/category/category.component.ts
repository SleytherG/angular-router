import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {switchMap} from "rxjs/operators";
import {Product} from "../../../models/product.model";
import {ProductsService} from "../../../services/products.service";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryId: string | null = null;

  products: Product[] = [];
  productId: string | null = null;
  limit = 10;
  offset = 0;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    // /**
    //  * Obtener los parametros de la ruta
    //  */
    // this.route.paramMap
    //   .subscribe(params => {
    //     /**
    //      * Que parametros queremos obtener y debe ser el mismo nombre en donde pusimos en la routing module
    //      */
    //     this.categoryId = params.get('id');
    //     console.log(this.categoryId);
    //     if (this.categoryId !== null) {
    //       this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
    //         .subscribe(data => {
    //           this.products = data;
    //         })
    //     }
    //   })
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.categoryId = params.get('id');
          if (this.categoryId) {
            return this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
          }
          return [];
        })
      ).subscribe(data => {
        this.products = data;
    })

    this.route.queryParamMap
      .subscribe(
        params => {
          this.productId = params.get('product');
          console.log(this.productId);
        }
      )

  }

  onLoadMore() {
    this.productsService.getAll(this.limit, this.offset).subscribe((data) => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }

}
