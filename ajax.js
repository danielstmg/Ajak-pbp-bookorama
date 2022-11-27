function getXMLHTTPRequest() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function get_server_time() {
    // TODO 1: Lengkapi fungsi get_server_time()
    let xmlhttp = getXMLHTTPRequest();
    let page = 'get_server_time.php';
    xmlhttp.open("GET", page, true);
    xmlhttp.onreadystatechange = function(){
        if((xmlhttp.readyState == 4) && (xmlhttp.status == 200)){
            document.getElementById('showtime').innerHTML = xmlhttp.responseText;
        }
    }
    xmlhttp.send(null);
}

function add_customer_get() {
    let xmlhttp = getXMLHTTPRequest();

    var name = encodeURI(document.getElementById('name').value);
    var address = encodeURI(document.getElementById('address').value);
    var city = encodeURI(document.getElementById('city').value);

    // Validate
    if (name != "" && address != "" && city != "") {
        var url = 'add_customer_get.php?name='+name+'&address='+address+'&city='+city;
        var inner = 'add_response';
        xmlhttp.open('GET', url, true);
        xmlhttp.onreadystatechange = function(){
            if((xmlhttp.readyState==4)&&(xmlhttp.status==200)){
                document.getElementById(inner).innerHTML = xmlhttp.responseText;
            }
            return false;
        }
        xmlhttp.send(null);
    } else {
        alert("Please fill all the fields");
    }
}

function add_customer_post() {
    var xmlhttp = getXMLHTTPRequest();

    var name = encodeURI(document.getElementById('name').value);
    var address = encodeURI(document.getElementById('address').value);
    var city = encodeURI(document.getElementById('city').value);

    // Validate
    if (name != "" && address != "" && city != "") {
        let url = "add_customer_post.php";
        let inner = "add_response";
        let params = "name=" + name + "&address=" + address + "&city" + city;
        xmlhttp.open('POST', url, true);
        xmlhttp.setRequestHeader("Content-type", 
        "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange=function(){
            if((xmlhttp.readyState==4)&&(xmlhttp.status==200)){
                document.getElementById(inner).innerHTML=xmlhttp.responseText;
            }
            return false;
        }
        xmlhttp.send(params);
        console.log(name);

    } else {
        alert("Please fill all the fields");
    }
}

function callAjax(url,inner) {
    let xmlhttp = getXMLHTTPRequest();
    xmlhttp.open('GET', url, true);
    xmlhttp.onreadystatechange = function(){
        if((xmlhttp.readyState==4)&&(xmlhttp.status==200)){
            document.getElementById(inner).innerHTML = xmlhttp.responseText;
        }
        return false;
    }
    xmlhttp.send(null);
}

function showCustomer(customerid) {
    let inner = 'detail_customer';
    let url = 'get_customer.php?id=' + customerid;
    if(customer == ""){
        document.getElementById(inner).innerHTML='';
    }else{
        callAjax(url,inner);
    }
}

function showBook(isbn) {
    let inner = 'detail_book';
    let url = 'get_book.php?id=' + isbn;
    if(book == ""){
        document.getElementById(inner).innerHTML='';
    }else{
        callAjax(url,inner);
    }
}