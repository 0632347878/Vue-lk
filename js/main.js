class Tank {
    constructor(ammunition) {
        this.ammunition = ammunition;
    }

    fireTo() {
        //Перед выстрелом проверяем снаряды:
        if (this.canFire(this.ammunition)) {
            this.ammunition = this.ammunition - 1;
        }
    }

    //Вспомогательный метод для проверки снарядов:
    canFire(ammunition) {
        if (ammunition > 0) {
            return true;
        } else {
            return false;
        }
    }
}

var tank = new Tank(3);

alert(tank.ammunition);
tank.fireTo();
alert(tank.ammunition);
tank.fireTo();
alert(tank.ammunition);
tank.fireTo();
alert(tank.ammunition);
tank.fireTo();
