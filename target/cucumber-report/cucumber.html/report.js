$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("usedcar.feature");
formatter.feature({
  "line": 2,
  "name": "Used Care Test",
  "description": "",
  "id": "used-care-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "user can search used car",
  "description": "",
  "id": "used-care-test;user-can-search-used-car",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab of car page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on used car tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Used Cars link on usedcar page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"Used Cars For Sale\" from used car page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"\u003cmake\u003e\" of the car",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"\u003cmodel\u003e\" of the car",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"\u003cprice\u003e\" in the field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car \"\u003cmake\u003e\" tab on page",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "used-care-test;user-can-search-used-car;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 18,
      "id": "used-care-test;user-can-search-used-car;;1"
    },
    {
      "cells": [
        "Audi",
        "A4",
        "ACT - All",
        "40000"
      ],
      "line": 19,
      "id": "used-care-test;user-can-search-used-car;;2"
    },
    {
      "cells": [
        "Suzuki",
        "Alto",
        "NSW - All",
        "20000"
      ],
      "line": 20,
      "id": "used-care-test;user-can-search-used-car;;3"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "ACT - All",
        "25000"
      ],
      "line": 21,
      "id": "used-care-test;user-can-search-used-car;;4"
    },
    {
      "cells": [
        "Mercedes-Benz",
        "C220",
        "NSW - All",
        "45000"
      ],
      "line": 22,
      "id": "used-care-test;user-can-search-used-car;;5"
    },
    {
      "cells": [
        "Nissan",
        "Note",
        "VIC - All",
        "25000"
      ],
      "line": 23,
      "id": "used-care-test;user-can-search-used-car;;6"
    },
    {
      "cells": [
        "Toyota",
        "Prius",
        "NSW - All",
        "30000"
      ],
      "line": 24,
      "id": "used-care-test;user-can-search-used-car;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 15263953000,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "user can search used car",
  "description": "",
  "id": "used-care-test;user-can-search-used-car;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab of car page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on used car tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Used Cars link on usedcar page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"Used Cars For Sale\" from used car page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Audi\" of the car",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"A4\" of the car",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"40000\" in the field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car \"Audi\" tab on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 512267300,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnBuySellTabOfCarPage()"
});
formatter.result({
  "duration": 1244886100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnUsedCarTab()"
});
formatter.result({
  "duration": 362947200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnUsedCarsLinkOnUsedcarPage()"
});
formatter.result({
  "duration": 232075900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iNavigateToFromUsedCarPage(String)"
});
formatter.result({
  "duration": 847838900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iSelectMakeOfTheCar(String)"
});
formatter.result({
  "duration": 928505600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A4",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectModelOfTheCar(String)"
});
formatter.result({
  "duration": 1302656400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuyCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 696856200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectPriceInTheField(String)"
});
formatter.result({
  "duration": 335981000,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2966197300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 29
    }
  ],
  "location": "BuyCarTest.iClickOnFindMyNextCarTabOnPage(String)"
});
formatter.result({
  "duration": 137516900,
  "status": "passed"
});
formatter.after({
  "duration": 2468633800,
  "status": "passed"
});
formatter.before({
  "duration": 9739352700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "user can search used car",
  "description": "",
  "id": "used-care-test;user-can-search-used-car;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab of car page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on used car tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Used Cars link on usedcar page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"Used Cars For Sale\" from used car page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Suzuki\" of the car",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Alto\" of the car",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"20000\" in the field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car \"Suzuki\" tab on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnBuySellTabOfCarPage()"
});
formatter.result({
  "duration": 1184467200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnUsedCarTab()"
});
formatter.result({
  "duration": 342600700,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnUsedCarsLinkOnUsedcarPage()"
});
formatter.result({
  "duration": 229453300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iNavigateToFromUsedCarPage(String)"
});
formatter.result({
  "duration": 677468500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iSelectMakeOfTheCar(String)"
});
formatter.result({
  "duration": 285128300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Alto",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectModelOfTheCar(String)"
});
formatter.result({
  "duration": 1586089600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 457860800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20000",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectPriceInTheField(String)"
});
formatter.result({
  "duration": 415316500,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3670197500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 29
    }
  ],
  "location": "BuyCarTest.iClickOnFindMyNextCarTabOnPage(String)"
});
formatter.result({
  "duration": 57823900,
  "status": "passed"
});
formatter.after({
  "duration": 2768765300,
  "status": "passed"
});
formatter.before({
  "duration": 9443986500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "user can search used car",
  "description": "",
  "id": "used-care-test;user-can-search-used-car;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab of car page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on used car tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Used Cars link on usedcar page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"Used Cars For Sale\" from used car page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Honda\" of the car",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"CR-V\" of the car",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"ACT - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"25000\" in the field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car \"Honda\" tab on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 45900,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnBuySellTabOfCarPage()"
});
formatter.result({
  "duration": 1189067800,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnUsedCarTab()"
});
formatter.result({
  "duration": 354862600,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnUsedCarsLinkOnUsedcarPage()"
});
formatter.result({
  "duration": 239314400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iNavigateToFromUsedCarPage(String)"
});
formatter.result({
  "duration": 509604700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iSelectMakeOfTheCar(String)"
});
formatter.result({
  "duration": 341781100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectModelOfTheCar(String)"
});
formatter.result({
  "duration": 758950500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 19
    }
  ],
  "location": "BuyCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 349042600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectPriceInTheField(String)"
});
formatter.result({
  "duration": 445059100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3449219100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 29
    }
  ],
  "location": "BuyCarTest.iClickOnFindMyNextCarTabOnPage(String)"
});
formatter.result({
  "duration": 116179200,
  "status": "passed"
});
formatter.after({
  "duration": 2881491400,
  "status": "passed"
});
formatter.before({
  "duration": 9672610700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "user can search used car",
  "description": "",
  "id": "used-care-test;user-can-search-used-car;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab of car page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on used car tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Used Cars link on usedcar page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"Used Cars For Sale\" from used car page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Mercedes-Benz\" of the car",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"C220\" of the car",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"45000\" in the field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car \"Mercedes-Benz\" tab on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 53400,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnBuySellTabOfCarPage()"
});
formatter.result({
  "duration": 1183118100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnUsedCarTab()"
});
formatter.result({
  "duration": 400311100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnUsedCarsLinkOnUsedcarPage()"
});
formatter.result({
  "duration": 226992600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iNavigateToFromUsedCarPage(String)"
});
formatter.result({
  "duration": 738308000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iSelectMakeOfTheCar(String)"
});
formatter.result({
  "duration": 285870200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C220",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectModelOfTheCar(String)"
});
formatter.result({
  "duration": 1631505800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 491141500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectPriceInTheField(String)"
});
formatter.result({
  "duration": 443980800,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4135799500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 29
    }
  ],
  "location": "BuyCarTest.iClickOnFindMyNextCarTabOnPage(String)"
});
formatter.result({
  "duration": 344560100,
  "status": "passed"
});
formatter.after({
  "duration": 2833992200,
  "status": "passed"
});
formatter.before({
  "duration": 9320434500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "user can search used car",
  "description": "",
  "id": "used-care-test;user-can-search-used-car;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab of car page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on used car tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Used Cars link on usedcar page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"Used Cars For Sale\" from used car page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Nissan\" of the car",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Note\" of the car",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"VIC - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"25000\" in the field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car \"Nissan\" tab on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 58100,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnBuySellTabOfCarPage()"
});
formatter.result({
  "duration": 1193460400,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnUsedCarTab()"
});
formatter.result({
  "duration": 606946800,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnUsedCarsLinkOnUsedcarPage()"
});
formatter.result({
  "duration": 264737100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iNavigateToFromUsedCarPage(String)"
});
formatter.result({
  "duration": 499316600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iSelectMakeOfTheCar(String)"
});
formatter.result({
  "duration": 308626500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Note",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectModelOfTheCar(String)"
});
formatter.result({
  "duration": 1650026800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VIC - All",
      "offset": 19
    }
  ],
  "location": "BuyCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 602130000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25000",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectPriceInTheField(String)"
});
formatter.result({
  "duration": 292298300,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3372036400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nissan",
      "offset": 29
    }
  ],
  "location": "BuyCarTest.iClickOnFindMyNextCarTabOnPage(String)"
});
formatter.result({
  "duration": 64214800,
  "status": "passed"
});
formatter.after({
  "duration": 2386512700,
  "status": "passed"
});
formatter.before({
  "duration": 9260125500,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "user can search used car",
  "description": "",
  "id": "used-care-test;user-can-search-used-car;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on buy+sell tab of car page",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on used car tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Used Cars link on usedcar page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I navigate to \"Used Cars For Sale\" from used car page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select make \"Toyota\" of the car",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select model \"Prius\" of the car",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select price \"30000\" in the field",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car \"Toyota\" tab on page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyCarTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 38400,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnBuySellTabOfCarPage()"
});
formatter.result({
  "duration": 1200217500,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iMouseHoverOnUsedCarTab()"
});
formatter.result({
  "duration": 395047300,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnUsedCarsLinkOnUsedcarPage()"
});
formatter.result({
  "duration": 244261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Cars For Sale",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iNavigateToFromUsedCarPage(String)"
});
formatter.result({
  "duration": 522960500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 15
    }
  ],
  "location": "BuyCarTest.iSelectMakeOfTheCar(String)"
});
formatter.result({
  "duration": 339054800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prius",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectModelOfTheCar(String)"
});
formatter.result({
  "duration": 722471700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyCarTest.iSelectLocation(String)"
});
formatter.result({
  "duration": 344431700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 16
    }
  ],
  "location": "BuyCarTest.iSelectPriceInTheField(String)"
});
formatter.result({
  "duration": 315067200,
  "status": "passed"
});
formatter.match({
  "location": "BuyCarTest.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3749635700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toyota",
      "offset": 29
    }
  ],
  "location": "BuyCarTest.iClickOnFindMyNextCarTabOnPage(String)"
});
formatter.result({
  "duration": 175383800,
  "status": "passed"
});
formatter.after({
  "duration": 2638736400,
  "status": "passed"
});
});