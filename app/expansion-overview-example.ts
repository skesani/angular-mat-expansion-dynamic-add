import { Component } from '@angular/core';

/**
 * @title Basic expansion panel
 */
@Component({
  selector: 'expansion-overview-example',
  templateUrl: 'expansion-overview-example.html',
  styleUrls: ['expansion-overview-example.css'],
})
export class ExpansionOverviewExample {
  panelOpenState: boolean = false;
  partyArray = [];

  addNew() {
    this.partyArray.push({
      id: this.getRandomId(),
      naming: 'Hulk',
      city: 'US',
    });
  }

  removeExp($evt) {
    this.partyArray = this.partyArray.filter((i) => i.id !== $evt);
  }

  getRandomId() {
    return (
      performance.now().toString(36) + Math.random().toString(36)
    ).replace(/\./g, '');
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
