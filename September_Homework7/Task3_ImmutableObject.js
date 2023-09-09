function Immutable(obj){
    this.obj = obj;

    return Object.freeze(this.obj);
}