let listCumtomer = [];
let checkEditCustomer = false;
let checkDeleteCustomer = false;
let checkDisplayTotalPay = false;
let validateBirthday = /^(0[0-9]|1[0-9]|2[0-9]|3[0-1])(\/)(0[0-9]|1[0-2])(\/)(19[0-9][0-9]|20[0-1][0-9])$/;
let validateEmail = /^[a-z][a-z0-9]{5,32}@[a-z0-9]{2,}(\.)([a-z0-9]{2,4}){1,2}$/;

function displayMainMenu() {
    let choose = prompt(
        "1. Add New Customer" + "\n" +
        "2. Display Information Customer" + "\n" +
        "3. Display Total Pay " + "\n" +
        "4. Edit Information Customer" + "\n" +
        "5. Delete Customer" + "\n" +
        "6. Exit");
    switch (choose) {
        case "1":
            addNewCustomer();
            break;
        case "2":
            displayCustomer();
            break;
        case "3":
            chooseDisplayTotalPay();
            break;
        case "4":
            chooseCustomerEdit();
            break;
        case "5":
            chooseDeleteCustomer();
            break;
        case "6":
            return;
        default:
            alert("fail");
            break;
    }

}

function addNewCustomer() {
    let checkBirth = false;
    let cus = new Customer();
    cus.setCustomerName(prompt("Enter Name Customer"));
    cus.setIdCard(prompt("Enter Id Card"));
    do {
        cus.setBirthCustomer(prompt("Enter Birth Customer (dd/mm/yyyy)"));
        if (validateBirthday.test(cus.getBirthCustomer()))
            checkBirth = true;
        else
            alert("Found!");
    }
    while (!checkBirth);
    do {
        cus.setEmailCustomer(prompt("Enter Email Customer"));
        if (validateEmail.test(cus.getEmailCustomer()))
            checkBirth = true;
        else
            alert("Found");
    } while (!checkBirth);
    cus.setAddressCustomer(prompt("Enter Address Customer"));
    cus.setTypeCustomer(prompt("Enter Type Customer"));
    cus.setDiscount(prompt("Enter Discount"));
    cus.setQuantityIncluded(prompt("Enter Quantity Included"));
    cus.setTypeRoom(prompt("Enter Type Room"));
    cus.setRentDays(prompt("Enter RentDays"));
    cus.setServiceType(prompt("Enter Service Type"));
    listCumtomer.push(cus);
    displayMainMenu();
}

function displayCustomer() {
    let result = "";
    for (let i = 0; i < listCumtomer.length; i++) {
        result += "\n" + (i + 1) + "Name : " + listCumtomer[i].getCustomerName() +
            ";ID Card : " + listCumtomer[i].getIdCard();
    }
    result += "\n" + (listCumtomer.length + 1) + ".Back to Menu";
    let chooseDisplayInfo = prompt(result);
    if (chooseDisplayInfo.toString() !== (listCumtomer.length + 1).toString()) {
        if (!checkDeleteCustomer && !checkDisplayTotalPay) {
            displayInformationCustomer(Number.parseInt(chooseDisplayInfo) - 1);
        } else if (checkDeleteCustomer) {
            deleteCustomer(Number.parseInt(chooseDisplayInfo) - 1);
        } else {
            displayTotalPay(Number.parseInt(chooseDisplayInfo) - 1);
        }
    } else {
        checkDisplayTotalPay = false;
        checkDeleteCustomer = false;
        checkEditCustomer = false;
        displayMainMenu();
    }
}

function displayInformationCustomer(index) {
    console.log(index + "displayInfor");
    if (checkEditCustomer) {
        let chooseInfoEdit = prompt(
            "1.Name :" + listCumtomer[index].getCustomerName() +
            "\n 2.IsCard : " + listCumtomer[index].getIdCard() +
            "\n 3.birthCustomer : " + listCumtomer[index].getBirthCustomer() +
            "\n 4.emailCustomer : " + listCumtomer[index].getEmailCustomer() +
            "\n 5.addressCustomer : " + listCumtomer[index].getAddressCustomer() +
            "\n 6.typeCustomer : " + listCumtomer[index].getTypeCustomer() +
            "\n 7.discount : " + listCumtomer[index].getDiscount() +
            "\n 8.quantityIncluded : " + listCumtomer[index].getQuantityIncluded() +
            "\n 9.typeRoom : " + listCumtomer[index].getTypeRoom() +
            "\n 10.rentDays : " + listCumtomer[index].getRentDays() +
            "\n 11.serviceType : " + listCumtomer[index].getServiceType() +
            "\n 12.Back."
        );
        if (chooseInfoEdit.toString() !== "12") {
            editInformationCustomer(index, Number.parseInt(chooseInfoEdit) - 1);

        } else {
            displayCustomer();
        }
    } else {
        alert("Information of customer :" +
            "\n Name :" + listCumtomer[index].getCustomerName() +
            "\n Id Card : " + listCumtomer[index].getIdCard() +
            "\n BirthCustomer : " + listCumtomer[index].getBirthCustomer() +
            "\n EmailCustomer : " + listCumtomer[index].getEmailCustomer() +
            "\n AddressCustomer : " + listCumtomer[index].getAddressCustomer() +
            "\n TypeCustomer : " + listCumtomer[index].getTypeCustomer() +
            "\n Discount : " + listCumtomer[index].getDiscount() +
            "\n QuantityIncluded : " + listCumtomer[index].getQuantityIncluded() +
            "\n TypeRoom : " + listCumtomer[index].getTypeRoom() +
            "\n RentDays : " + listCumtomer[index].getRentDays() +
            "\n ServiceType : " + listCumtomer[index].getServiceType()
        );
    }
    displayMainMenu();

}

function chooseDisplayTotalPay() {
    checkDisplayTotalPay = true;
    displayMainMenu();
}

function displayTotalPay(index) {
    alert(listCumtomer[index].totalPays());
    checkDisplayTotalPay = false;
    displayMainMenu();
}

function deleteCustomer(index) {
    let chooseConfirm = prompt(
        "Are you sure delete Customer : Name " + arrListCustomers[index][0] +
        "; IsCard :" + arrListCustomers[index][1] +
        "\n1.Yes\n2.No");
    if (chooseConfirm === "1") {
        arrListCustomers.splice(index, 1);
        alert("Delete Completed");
    }

    checkDeleteCustomer = false;
    displayMainMenu();
}

displayMainMenu();