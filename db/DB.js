var customerDB= new Array();

var itemDB= new Array();

var orderDB= new Array();

var customer1  ={
    id:"C00-001",
    name:"Amal",
    address:"Galle",
    contact:"031"
};
customerDB.push(customer1);
var customer2  ={
    id:"C00-002",
    name:"Kamal",
    address:"Colombo",
    contact:"011"
};
customerDB.push(customer2);
var customer3  ={
    id:"C00-003",
    name:"Nimal",
    address:"Panadura",
    contact:"032"
};
customerDB.push(customer3);
var item1 ={
    itemCode:"I00-001",
    name:"Pizza",
    qty:5,
    price:150.00
};
itemDB.push(item1);
var item2 ={
    itemCode:"I00-002",
    name:"Burger",
    qty:5,
    price:120.00
};
itemDB.push(item2);
loadAllCustomers();
  function loadAllCustomers() {
        $("#cusTable").empty();
        for (var i of customerDB) {
            let row = `<tr><td>${i.id}</td><td>${i.name}</td><td>${i.address}</td><td>${i.contact}</td></tr>`;
            $("#cusTable").append(row);
        }
  }

var order1 ={
    orderID:"OD00-001",
    cusID:"C00-001",
    total:"1200.00"
};
var order2 ={
    orderID:"OD00-002",
    cusID:"C00-001",
    total:"1200.00"
};
var order3 ={
    orderID:"OD00-003",
    cusID:"C00-001",
    total:"1200.00"
};
var orderDetails ={
    orderID:"OD00-001",
    itemCode:"I00-001",
    qty:"5"
};

orderDB.push(order1);
orderDB.push(order2);
orderDB.push(order3);

