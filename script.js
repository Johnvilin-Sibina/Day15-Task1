var result;
var current_table = null;
var request = new XMLHttpRequest();
request.open("GET", "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json");
request.send();
request.onload = function () {
    result = JSON.parse(request.response);
    current_table = createTable(0,10);
    movePaginationToBottom()
}

function create_table(tagname, attrname, attrvalue) {
    var res = document.createElement(tagname)
    res.setAttribute(attrname, attrvalue)
    return res
}

function create_thead(tagname) {
    var res = document.createElement(tagname)
    return res
}
function create_th(tagname, content) {
    var res = document.createElement(tagname)
    res.innerHTML = content;
    return res
}

function create_tbody(tagname) {
    var res = document.createElement(tagname)
    return res
}

function create_tr(tagname) {
    var res = document.createElement(tagname)
    return res
}

function create_td(tagname, content) {
    var res = document.createElement(tagname);
    res.innerHTML = content;
    return res
}

function clear_table() {
    if (current_table) {
        current_table.remove();
        current_table = null;
    }
}

function createTable(start,end){
    clear_table();
    var table = create_table("table", "width", "60%");

    var thead = create_thead("thead");
    
    var th1 = create_th("th", "Id");
    var th2 = create_th("th", "Name");
    var th3 = create_th("th", "Email");
    
    var tbody = create_tbody("tbody"); 

    for (let i = start; i <end; i++) {
        var tr = create_tr("tr");
        
        var td1 = create_td("td", result[i].id)
        var td2 = create_td("td", result[i].name)
        var td3 = create_td("td", result[i].email)
        
        tr.append(td1, td2, td3);
         tbody.append(tr);
}
thead.append(th1, th2, th3);

table.append(thead, tbody);
document.body.append(table);
return table;
}

var div = document.createElement("div");

    function create_span(tagname) {
        var span = document.createElement(tagname);
        return span;
    }
    
    
    function create_anchor(tagname, attrname, attrvalue, content) {
        var anchor = document.createElement(tagname);
        anchor.setAttribute(attrname, attrvalue);
        anchor.innerHTML = content;
        return anchor;
    }
    
    var s0 = create_span("span");
    var s1 = create_span("span");
    var s2 = create_span("span");
    var s3 = create_span("span");
    var s4 = create_span("span");
    var s5 = create_span("span");
    var s6 = create_span("span");
    var s7 = create_span("span");
    var s8 = create_span("span");
    var s9 = create_span("span");
    var s10 = create_span("span");
    var s00 = create_span("span");
    
    var a0 = create_anchor("a", "href", "#", "&laquo;First");
    var a1 = create_anchor("a", "href", "#", "1");
    var a2 = create_anchor("a", "href", "#", "2");
    var a3 = create_anchor("a", "href", "#", "3");
    var a4 = create_anchor("a", "href", "#", "4");
    var a5 = create_anchor("a", "href", "#", "5");
    var a6 = create_anchor("a", "href", "#", "6");
    var a7 = create_anchor("a", "href", "#", "7");
    var a8 = create_anchor("a", "href", "#", "8");
    var a9 = create_anchor("a", "href", "#", "9");
    var a10 = create_anchor("a", "href", "#", "10");
    var a00 = create_anchor("a", "href", "#", "Last&raquo;");
    
    s0.append(a0)
    s1.append(a1);
    s2.append(a2);
    s3.append(a3);
    s4.append(a4);
    s5.append(a5);
    s6.append(a6);
    s7.append(a7);
    s8.append(a8);
    s9.append(a9);
    s10.append(a10);
    s00.append(a00)
    
    div.append(s0,s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,s00);
    document.body.append(div);

function movePaginationToBottom() {
    document.body.append(div);
}
    
a0.addEventListener("click",function(){
    current_table = createTable(0,10)
    movePaginationToBottom()
});

a1.addEventListener("click",function() {
        current_table = createTable(0, 10);
        movePaginationToBottom()
    });

a2.addEventListener("click",function() {
        current_table = createTable(10, 20);
        movePaginationToBottom()
    })

a3.addEventListener("click",function() {
        current_table = createTable(20, 30);
        movePaginationToBottom()
    })

a4.addEventListener("click",function() {
        current_table = createTable(30, 40);
        movePaginationToBottom()
    })

a5.addEventListener("click",function() {
        current_table = createTable(40, 50);
        movePaginationToBottom()
    })

a6.addEventListener("click",function() {
        current_table = createTable(50, 60);
        movePaginationToBottom()
    })

a7.addEventListener("click",function() { 
        current_table = createTable(60, 70);
        movePaginationToBottom()
    })

a8.addEventListener("click",function() {
        current_table = createTable(70, 80);
        movePaginationToBottom()
    })

a9.addEventListener("click",function() {
        current_table = createTable(80, 90);
        movePaginationToBottom()
    })

a10.addEventListener("click",function() {
        current_table = createTable(90, 100);
        movePaginationToBottom()
    })

a00.addEventListener("click",function(){
    current_table = createTable(90,100);
    movePaginationToBottom()
})
    
    
