const Airplane = {
    init(name) {
        this.name = name;
        this.isFlying = false;

        this.takeOff.bind(this);
        this.land.bind(this);
    },

    takeOff() {
        if (!this.isFlying){
            this.isFlying = true;
            return `Airplane ${this.name} has taken off`;
        }

        return `Airplane ${this.name} has alredy taken off`;
    },

    land() {
        if (this.isFlying){
            this.isFlying = false;
            return `Airplane ${this.name} has landed`;
        }

        return `Airplane ${this.name} has alredy landed`;
    }
}
