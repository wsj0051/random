
//可修改参数
var chooseDelay = 100; //特效：名字闪动时间间隔（单位：ms）
var chooseTimes = 20; //特效：名字闪动次数
var allowSave = true; //特性：是否允许将预点名单存储在浏览器中
var namelist_md5 = {};
var currentTab = 0;
var listcount = {};
var namenow = null;
var globalList = [
    { "list": "new Array(%22%u59DA%u667A%u6E90%22%2C%22%u5218%u9510%u5EB7%22%2C%22%u5B59%u8D5F%u6DFC%22%2C%22%u5F20%u4E91%u6D69%22%2C%22%u738B%u946B%u51EF%22%2C%22%u9EC4%u9759%u96EF%22%2C%22%u5B5F%u5B87%u7FD4%22%2C%22%u67F3%u5A67%u794E%22%2C%22%u5B81%u4E00%u51E1%22%2C%22%u738B%u5E05%u68DA%22%2C%22%u6F58%u7965%u4E50%22%2C%22%u53F6%u745E%u94ED%22%2C%22%u5F20%u5B50%u6167%22%2C%22%u738B%u827A%u835F%22%2C%22%u7530%u7ECE%u5189%22%2C%22%u6F58%u6587%u6CFD%22%2C%22%u5B59%u4F73%u4E50%22%2C%22%u5218%u4E00%u822A%22%2C%22%u51AF%u661F%u535A%22%2C%22%u4EE3%u6653%u8339%22%2C%22%u90B1%u6021%u51E1%22%2C%22%u5321%u5965%u6960%22%2C%22%u4E8E%u4F73%u6167%22%2C%22%u738B%u4F73%u6021%22%2C%22%u9EC4%u9707%u5929%22%2C%22%u5355%u5965%u5B87%22%2C%22%u738B%u4F9D%u6657%22%2C%22%u82D7%u96E8%u5DDD%22%2C%22%u96F7%u5A9B%u5A9B%22%2C%22%u90D1%u51EF%u9F99%22%2C%22%u5E38%u65F6%u5EB7%22%2C%22%u5E84%u4E00%u51FD%22%2C%22%u9F50%u606C%u5189%22%2C%22%u7530%u7693%u5929%22%2C%22%u5362%u679D%u7426%22%2C%22%u5B59%u53EF%u51E1%22%2C%22%u8346%u715C%u7855%22%2C%22%u5DF4%u68A6%u742A%22%2C%22%u90B1%u4EA6%u4F73%22%2C%22%u66F9%u6C38%u5EB7%22%2C%22%u51AF%u6587%u8C6A%22%2C%22%u9A6C%u8302%u6E05%22%2C%22%u674E%u5955%u8C6A%22%2C%22%20%u5218%u5965%u98DE%22%2C%22%u5F20%u94B0%u5E78%22%2C%22%u5F90%u827A%u6668%22)", "id": "0", "tabName": "高一11班" },
    { "list": "new Array(%22%u9A6C%u60A6%u96C5%22%2C%22%u7530%u4E00%u8BFA%22%2C%22%u5F20%u5965%u742A%22%2C%22%u80E1%u7FD4%u5B87%22%2C%22%u5218%u6DA6%u8000%22%2C%22%u8C22%u5143%u535A%22%2C%22%u5468%u5FC3%u4E00%22%2C%22%u5F20%u5C55%u6E90%22%2C%22%u738B%u4F73%u73C2%22%2C%22%u80E1%u9510%22%2C%22%u96F7%u6674%u6674%22%2C%22%u5F20%u5B87%u7FD4%22%2C%22%u6B66%u4E07%u5168%22%2C%22%u6768%u8D75%u6770%22%2C%22%u674E%u6021%u7487%22%2C%22%u5F20%u7D2B%u5CA9%22%2C%22%u590F%u94B0%u51E1%22%2C%22%u6731%u946B%u679C%22%2C%22%u9AD8%u6587%u5F6C%22%2C%22%u7C73%u5B50%u8F69%22%2C%22%u5B59%u5B81%22%2C%22%u5411%u9633%22%2C%22%u674E%u777F%u777F%22%2C%22%u674E%u660C%u6BC5%22%2C%22%u6731%u6C38%u5EB7%22%2C%22%u5F20%u4F73%u99A8%22%2C%22%u5B59%u6587%u535A%22%2C%22%u6731%u58A8%u7FF0%22%2C%22%u5F20%u5B50%u6021%22%2C%22%u80E1%u7EA2%u827A%22%2C%22%u6881%u76DB%u535A%22%2C%22%u5362%u749E%22%2C%22%u5218%u5FD7%u6587%22%2C%22%u53F8%u71DA%u7136%22%2C%22%u5B54%u4EE4%u5965%22%2C%22%u9AD8%u5929%u9E92%22%2C%22%u5EF6%u70A4%u5B87%22%2C%22%u90D1%u667A%u6587%22%2C%22%u5355%u4E00%u68B5%22%2C%22%u6881%u6069%u6CFD%22%2C%22%u5218%u7D2B%u6DB5%22%2C%22%u8881%u96E8%u9732%22%2C%22%u65F6%u68A6%u5BD2%22%2C%22%u7A0B%u827A%u822A%22%2C%22%u5B54%u5BB6%u4E50%22%2C%22%u5218%u5B5F%u6CFD%22)", "id": "0", "tabName": "高一12班" },
];
//加载名单
function loadList() {
    checkList();
    try {
        return JSON.parse(base64.decode(localStorage['prelist_' + getMd5(getList())]));
    } catch (err) {
        initPrelist();
        return JSON.parse(base64.decode(localStorage['prelist_' + namelist_md5[currentTab]]));
    }
}
function getCurrentTab() {

    var index = 0;
    $("#ul_tabs li").each(function () {
        if ($(this).hasClass("active")) {
            index = $(this).index();
        }
    });
    return index;

}
//检查名单
function checkList() {
    currentTab = getCurrentTab();

    if ((localStorage['prelist_' + namelist_md5[currentTab]] == undefined) || (localStorage['prelist_' + namelist_md5[currentTab]] == null)) {
        initPrelist();
    } else {
        if (md5(localStorage['prelist_' + namelist_md5[currentTab]]) != localStorage['listmd5_' + namelist_md5[currentTab]]) {
            initPrelist();
        }
    }
}

//生成待点名单
function initPrelist() {
    var prelist = new Array();
    for (var i = 0; i < listcount[currentTab]; i++) {
        prelist[i] = i;
    }
    saveList(shuffle(prelist));
}

//保存名单
function saveList(arr) {
    str = base64.encode(JSON.stringify(arr));
    localStorage['listmd5_' + namelist_md5[currentTab]] = md5(str);
    localStorage['prelist_' + namelist_md5[currentTab]] = str;
}
//名单乱序
function shuffle(a) {
    var len = a.length;
    for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i));
        var temp = a[index];
        a[index] = a[len - i - 1];
        a[len - i - 1] = temp;
    }
    return a;
}

//随机闪动名字并修改/还原Class
function chooseName(times) {
    var prelist = loadList();
    var nameid = Math.floor(Math.random() * listcount[currentTab]);
    while (nameid == namenow) {
        nameid = Math.floor(Math.random() * listcount[currentTab]);
    }
    if (times == 0) {
        if (prelist.length == 0) {
            initPrelist();
            prelist = loadList();
        }
        nameid = prelist.shift();
        saveList(prelist);
    }
    if (namenow != null) {
        $('#name-' + currentTab + "-" + namenow.toString()).removeClass('alert-warning');
        $('#name-' + currentTab + "-" + namenow.toString()).addClass('alert-info');
    }
    namenow = nameid;
    $('#name-' + currentTab + "-" + namenow.toString()).removeClass('alert-info');
    $('#name-' + currentTab + "-" + namenow.toString()).addClass('alert-warning');
}

//开始随机
function startRandom() {
    $('#progressbar' + currentTab).width('0%');
    $('#div-start' + currentTab).slideUp(400,
        function () {
            $('#div-running' + currentTab).slideDown(400);
        });
    run(chooseTimes);
}

//点名
function run(times) {
    chooseName(times);
    times--;
    $('#progressbar' + currentTab).width((((chooseTimes - times) / chooseTimes) * 100).toString() + '%');
    if (times >= 0) {
        setTimeout(function () {
            run(times);
        },
            chooseDelay);
    } else {
        setTimeout(function () {
            $('#div-running' + currentTab).slideUp(400,
                function () {
                    afterChoose();
                    $('#div-start' + currentTab).slideDown(400);
                });
        },
            0);
    }
}


//点名完毕
function afterChoose() {
    $('#NameResultSpan').text(($('#name-' + currentTab + "-" + namenow.toString()).text()));
    $('#Result').modal();
}




//保存名单JS
function saveListJS() {
    var aTag = document.createElement('a');
    var blob = new Blob([$('#editnamelist').val()], { type: 'text/javascript' });
    aTag.download = 'list.json';
    aTag.href = URL.createObjectURL(blob);
    aTag.click();
    URL.revokeObjectURL(blob);
    aTag.remove();
}


//生成名单JS
function spawnListJS() {
    var names = $('#editnamelist').val().split("----");
    var allJson = [];
    $.each(names, function (i, v) {
        var name = v.split('\n');
        var output = [];

        $.each(name, function (j, k) {
            if (k.trim()) {
                output.push('"' + k + '"');
            }

        });

        var res = '{"list": "' + 'new Array(' + escape(output.join(",")) + ')","id": "' + i + '", "tabName": "tab' + i + '"}';
        allJson.push(res);
    });

    $('#editnamelist').val("[" + allJson.join(",") + "]");
}
function fetchData() {
    return list = fetch('list.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            return myJson;
        }).catch(function (error) {
            return globalList;
        });


};
//Run fetch and animation in sequence
function resolveFetch() {
    return new Promise(function (resolve, reject) {

        resolve(fetchData());
    });
};

resolveFetch().then(function (lists) {

    var liArray = [];
    var tabDivArray = [];
    $.each(lists, function (i, v) {
        var active = currentTab == i ? "active" : "";
        liArray.push('<li class="' + active + '"><a href="#page-random' + i + '"  data-toggle="tab">' + v.tabName + '</a></li>');

        tabDivArray.push('<div id="page-random' + i + '" class="panel-body tab-pane panel-body ' + active + '" style="margin-top:20px;">');
        tabDivArray.push('<div class="" style="margin-right:20%;margin-left:20%;"><div class="namelistdiv" id="namelist' + i + '">');
        var list = eval(unescape(lists[i].list));
        listcount[i] = list.length;
        $.each(list, function (j, k) {
            tabDivArray.push('<div class="name alert-info" id="name-' + i + '-' + j + '">' + list[j] + '</div>');
        });
        namelist_md5[i] = md5(JSON.stringify(list));
        tabDivArray.push('</div></div>');

        tabDivArray.push('<center>');
        tabDivArray.push('<div id="div-start"' + i + '><button class="btn btn-default btn-lg" onclick="javascript:startRandom()" type="button" style="width:50%"><h4 style="display:inline">开始</h4></button>');
        tabDivArray.push('</div>');
        tabDivArray.push('<div class="progress" id="div-running' + i + '" style="display:none;width:50%">');
        tabDivArray.push('<center>');
        tabDivArray.push('<div id="progressbar' + i + '" class="progress-bar progress-bar-info progress-bar-striped active" style="width:0%">');
        tabDivArray.push('<span class="sr-only">Running</span>');
        tabDivArray.push('</div>');
        tabDivArray.push('</center>');
        tabDivArray.push('</div>');
        tabDivArray.push('</center>');
        tabDivArray.push('</div>');
    });
    $("#li_last").before(liArray.join(" "));
    $("#page-editname").before(tabDivArray.join(" "));


    //初始化名单
    if (allowSave) {
        checkList();
    } else {
        initPrelist();
    }

})
