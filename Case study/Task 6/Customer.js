let Customer = function () {
    this.setCustomerName = function (customerName) {
        this.customerName = customerName;
    };
    this.getCustomerName = function () {
        return this.customerName;
    };
    this.setIdCard = function (idCard) {
        this.idCard = idCard;
    };
    this.getIdCard = function () {
        return this.idCard;
    };
    this.setBirthCustomer = function (birthCustomer) {
        this.birthCustomer = birthCustomer;
    };
    this.getBirthCustomer = function () {
        return this.birthCustomer;
    };
    this.setEmailCustomer = function (emailCustomer) {
        this.emailCustomer = emailCustomer;
    };
    this.getEmailCustomer = function () {
        return this.emailCustomer;
    };
    this.setAddressCustomer = function (addressCustomer) {
        this.addressCustomer = addressCustomer;
    };
    this.getAddressCustomer = function () {
        return this.addressCustomer;
    };
    this.setTypeCustomer = function (typeCustomer) {
        this.typeCustomer = typeCustomer;
    };
    this.getTypeCustomer = function () {
        return this.typeCustomer;
    };
    this.setDiscount = function (discount) {
        this.discount = discount;
    };
    this.getDiscount = function () {
        return this.discount;
    };
    this.setQuantityIncluded = function (quantityIncluded) {
        this.quantityIncluded = quantityIncluded;
    };
    this.getQuantityIncluded = function () {
        return this.quantityIncluded;
    };
    this.setTypeRoom = function (typeRoom) {
        this.typeRoom = typeRoom;
    };
    this.getTypeRoom = function () {
        return this.typeRoom;
    };
    this.setRentDays = function (rentDays) {
        this.rentDays = rentDays;
    };
    this.getRentDays = function () {
        return this.rentDays;
    };
    this.setServiceType = function (serviceType) {
        this.serviceType = serviceType;
    };
    this.getServiceType = function () {
        return this.serviceType;
    };
    this.totalPays = function () {
        let moneyPerDays = 0;
        if (this.roomType === "Villa")
            moneyPerDays = 500;
        else if (this.roomType === "House")
            moneyPerDays = 300;
        else
            moneyPerDays = 100;
        return moneyPerDays * parseFloat(this.rentDays) * (1 - parseFloat(this.discount) / 100);

    };
};