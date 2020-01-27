import {Component} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop disabled sorting
 */
@Component({
  selector: 'cdk-drag-drop-disabled-sorting-example',
  templateUrl: 'cdk-drag-drop-disabled-sorting-example.html',
  styleUrls: ['cdk-drag-drop-disabled-sorting-example.css'],
})
export class CdkDragDropDisabledSortingExample {
  items = [];

  basket = [
    'Carrots',
    'Tomatoes',
    'Onions',
    'Apples',
    'Avocados',
     'Oranges',
    'Bananas',
    'Cucumbers'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}


/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */