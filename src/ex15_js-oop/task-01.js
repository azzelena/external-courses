'use strict';
var gift = function () {
    class Sweeties {
        constructor(weight) {
            this.weight = weight;
        }
    }

    class Sweetie extends Sweeties {
        constructor(type, weight) {
            super(weight);
            this.type = type;
        }
    }

    class methods {
        constructor(type) {
            this.type = type;
            this.arrayForSwiitiesParams = [];
        }

        forWeight(item) {
            this.arrayForSwiitiesParams.push(item);
            this.weight = this.weight + item.weight;
            return this;
        }

        sorting(parametr) {
            this.arrayForSwiitiesParams.sort(function(param1, param2) {
                if (parametr === 'type') 
                    return param1.type >= param2.type ? 1 : -1;
                if (parametr === 'weight') {
                    return param1.weight - param2.weight;
                }
            })
        }

        findName(itemName) {
            var giftContent = this.arrayForSwiitiesParams.filter(item => item.type === itemName);
            if (giftContent.length) {
            var giftInfo = 'Веса (' + itemName + ') в подарке для - ' + this.type + '\n';
                giftContent.forEach((item, i) => giftInfo += (i + 1) + '. ' + ' weight: ' + item.weight + '\n');
                return giftInfo;
            }
            return false;
        }

         get status() {
            var giftInfo = 'Подарок для ' + this.type + '\n';
            this.type = this.type;
            this.arrayForSwiitiesParams.forEach((item, i) => giftInfo += (i + 1) + '. ' + item.type +
             ', вес равен: ' + item.weight + ' грамм' + '\n' );
            return giftInfo;
        }
    }
    var sweetieFirstType = new Sweetie('первый тип', 400);
    var sweetieSecondType = new Sweetie('второй тип', 300);
    var sweetieThirdType = new Sweetie('третий тип', 50);
    
    var firstGift = new methods('Елена');
    var secondGift = new methods('Иван');
    var thirdGift = new methods('Александр');

    firstGift.forWeight(sweetieFirstType).forWeight(sweetieFirstType).forWeight(sweetieSecondType).forWeight(sweetieThirdType);
    secondGift.forWeight(sweetieThirdType).forWeight(sweetieSecondType).forWeight(sweetieThirdType).forWeight(sweetieFirstType);
    thirdGift.forWeight(sweetieThirdType).forWeight(sweetieFirstType);

    console.log(secondGift.status);
    secondGift.sorting('weight');
    console.log('Сортировка по весу: ' + secondGift.status);
    console.log(secondGift.findName('второй тип'));
    console.log(secondGift.findName('первый тип'));
}();
