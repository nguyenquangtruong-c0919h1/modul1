
let tinh= function () {
    this.setwight = function (wight)
    {
        this.wight= wight;
    };
    this.getwight = function ()
    {
        return this.wight;
    };
    this.setwidth = function (width)
    {
        this.width= width;
    };
    this.getwidth = function ()
    {
        return this.width;
    };
    this.dientich = function () {
        return this.setwidth*this.setwight;
    };
    this.chuvi = function () {
        return this.setwidth*this.setwight;
    };
};