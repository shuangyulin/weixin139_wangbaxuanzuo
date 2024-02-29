var projectName = '网吧在线选座小程序'

/**
 * 根据角色渲染菜单
 */
function getMenuByRole() {
    var systemMenu = {
        "homeInfo": {
            "title": "首页",
            "href": "page/home/home.html"
        },
        "logoInfo": {
            "title": "网吧在线选座小程序",
            "image": "images/logo.png",
            "href": ""
        },
        "menuInfo": [{
            "title": "系统菜单",
            "icon": "fa fa-address-book",
            "href": "",
            "target": "_self",
            "child": []
        }]
    }
    // 菜单数据
    var menus = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","修改","删除","新增"],"menu":"附近网吧","menuJump":"列表","tableName":"fujinwangba"}],"menu":"附近网吧管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"预定位置","menuJump":"列表","tableName":"yudingweizhi"}],"menu":"预定位置管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商品店购","menuJump":"列表","tableName":"shangpindiangou"}],"menu":"商品店购管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商品类别","menuJump":"列表","tableName":"shangpinleibie"}],"menu":"商品类别管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"实名认证","menuJump":"列表","tableName":"shimingrenzheng"}],"menu":"实名认证管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"支付","menuJump":"列表","tableName":"zhifu"}],"menu":"支付管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"lunbotuguanli"},{"buttons":["新增","查看","修改","删除"],"menu":"活动广告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预定"],"menu":"附近网吧列表","menuJump":"列表","tableName":"fujinwangba"}],"menu":"附近网吧模块"},{"child":[{"buttons":["查看","下单"],"menu":"商品店购列表","menuJump":"列表","tableName":"shangpindiangou"}],"menu":"商品店购模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["预定"],"menu":"附近网吧","menuJump":"列表","tableName":"fujinwangba"}],"menu":"附近网吧管理"},{"child":[{"buttons":["查看"],"menu":"预定位置","menuJump":"列表","tableName":"yudingweizhi"}],"menu":"预定位置管理"},{"child":[{"buttons":["下单"],"menu":"商品店购","menuJump":"列表","tableName":"shangpindiangou"}],"menu":"商品店购管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"实名认证","menuJump":"列表","tableName":"shimingrenzheng"}],"menu":"实名认证管理"},{"child":[{"buttons":["查看","支付"],"menu":"支付","menuJump":"列表","tableName":"zhifu"}],"menu":"支付管理"}],"frontMenu":[{"child":[{"buttons":["查看","预定"],"menu":"附近网吧列表","menuJump":"列表","tableName":"fujinwangba"}],"menu":"附近网吧模块"},{"child":[{"buttons":["查看","下单"],"menu":"商品店购列表","menuJump":"列表","tableName":"shangpindiangou"}],"menu":"商品店购模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
    // 当前系统登陆的用户角色
    var role = localStorage.getItem("role");
    // 遍历菜单数据
	for (var i = 0; i < menus.length; i++) {
		// 判断当前登陆用户角色是否和菜单角色相同，相同则渲染菜单到前端
		if (menus[i].roleName == role) {
			// 获取角色对应的菜单数据
			var backMenu = menus[i].backMenu;
			// 遍历菜单数据
			for (var j = 0; j < backMenu.length; j++) {
				if (backMenu[j]) {
					console.log(backMenu[j].menu)
					// 获取目录
					var child = {
						"title": backMenu[j].menu,
						"href": "",
						"target": "_self",
						"child": []
					}
					// 获取目录下的菜单
					var backMenuChild = backMenu[j].child;
					for (var k = 0; k < backMenuChild.length; k++) {
						var href = "./page/" + backMenuChild[k].tableName + "/" + "list.html";
						if (backMenuChild[k].tableName == "shijuanliebiao") {
							href = "./page/exampaper/list.html"
						}
						if (backMenuChild[k].tableName == "shijuanguanli") {
							href = "./page/exampaper/list-admin.html"
						}
						if (backMenuChild[k].tableName == "shitiguanli") {
							href = "./page/examquestion/list.html"
						}
						if (backMenuChild[k].tableName == "kaoshijilu") {
							href = "./page/examrecord/list.html"
						}
						if (backMenuChild[k].tableName == "cuotiben") {
							href = "./page/examrecord/list-error.html"
						}
						if (backMenuChild[k].tableName == "luntanguanli") {
							href = "./page/forum/list.html"
						}
						if (backMenuChild[k].tableName == "liuyanbanguanli") {
							href = "./page/messages/list.html"
						}
						if (backMenuChild[k].tableName == "lunbotuguanli") {
							href = "./page/config/list.html"
						}
						if (backMenuChild[k].tableName == "lunbotuguanli") {
							href = "./page/config/list.html"
						}
						if (backMenuChild[k].tableName == "kefuguanli") {
							href = "./page/chat/list.html"
						}
						if (backMenuChild[k].tableName == "weizhifudingdan") {
							href = "./page/orders/list-weizhifu.html"
						}
						if (backMenuChild[k].tableName == "yizhifudingdan") {
							href = "./page/orders/list-yizhifu.html"
						}
						if (backMenuChild[k].tableName == "yifahuodingdan") {
							href = "./page/orders/list-yifahuo.html"
						}
						if (backMenuChild[k].tableName == "yiwanchengdingdan") {
							href = "./page/orders/list-yiwancheng.html"
						}
						if (backMenuChild[k].tableName == "yiquxiaodingdan") {
							href = "./page/orders/list-yiquxiao.html"
						}
						if (backMenuChild[k].tableName == "yituikuandingdan") {
							href = "./page/orders/list-yituikuan.html"
						}
						var childItem = {
							"title": backMenuChild[k].menu,
							"href": href,
							"target": "_self"
						}
						// 组装数据
						child.child.push(childItem);
					}
					systemMenu.menuInfo[0].child.push(child)
				}
			}
		}
	}
    return systemMenu;
}

/**
 * 获取所有的菜单
 */
function getAllMenu() {
    return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","修改","删除","新增"],"menu":"附近网吧","menuJump":"列表","tableName":"fujinwangba"}],"menu":"附近网吧管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"预定位置","menuJump":"列表","tableName":"yudingweizhi"}],"menu":"预定位置管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商品店购","menuJump":"列表","tableName":"shangpindiangou"}],"menu":"商品店购管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商品类别","menuJump":"列表","tableName":"shangpinleibie"}],"menu":"商品类别管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"实名认证","menuJump":"列表","tableName":"shimingrenzheng"}],"menu":"实名认证管理"},{"child":[{"buttons":["查看","修改","删除"],"menu":"支付","menuJump":"列表","tableName":"zhifu"}],"menu":"支付管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"lunbotuguanli"},{"buttons":["新增","查看","修改","删除"],"menu":"活动广告","tableName":"news"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看","预定"],"menu":"附近网吧列表","menuJump":"列表","tableName":"fujinwangba"}],"menu":"附近网吧模块"},{"child":[{"buttons":["查看","下单"],"menu":"商品店购列表","menuJump":"列表","tableName":"shangpindiangou"}],"menu":"商品店购模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["预定"],"menu":"附近网吧","menuJump":"列表","tableName":"fujinwangba"}],"menu":"附近网吧管理"},{"child":[{"buttons":["查看"],"menu":"预定位置","menuJump":"列表","tableName":"yudingweizhi"}],"menu":"预定位置管理"},{"child":[{"buttons":["下单"],"menu":"商品店购","menuJump":"列表","tableName":"shangpindiangou"}],"menu":"商品店购管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"实名认证","menuJump":"列表","tableName":"shimingrenzheng"}],"menu":"实名认证管理"},{"child":[{"buttons":["查看","支付"],"menu":"支付","menuJump":"列表","tableName":"zhifu"}],"menu":"支付管理"}],"frontMenu":[{"child":[{"buttons":["查看","预定"],"menu":"附近网吧列表","menuJump":"列表","tableName":"fujinwangba"}],"menu":"附近网吧模块"},{"child":[{"buttons":["查看","下单"],"menu":"商品店购列表","menuJump":"列表","tableName":"shangpindiangou"}],"menu":"商品店购模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
}

/**
 * 判断是否拥有权限
 */
function isAuth(tableName,key){
    let role = localStorage.getItem('role');
    if(!role){
        role = '管理员';
    }
    let menus = getAllMenu();
    for(let i=0;i<menus.length;i++){
        if(menus[i].roleName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}


// {
// 	"homeInfo": {
// 		"title": "首页",
// 		"href": "page/home/home.html"
// 	},
// 	"logoInfo": {
// 		"title": "网吧在线选座小程序",
// 		"image": "images/logo.png",
// 		"href": ""
// 	},
// 	"menuInfo": [{
// 		"title": "系统菜单",
// 		"icon": "fa fa-address-book",
// 		"href": "",
// 		"target": "_self",
// 		"child": [{
// 			"title": "模板目录",
// 			"href": "",
// 			"target": "_self",
// 			"child": [{
// 				"title": "模板列表",
// 				"href": "./page/template-list/list.html",
// 				"target": "_self"
// 			}]
// 		}, {
// 			"title": "富文本模板",
// 			"href": "",
// 			"target": "_self",
// 			"child": [{
// 				"title": "模板列表",
// 				"href": "./page/template-list-2/list.html",
// 				"target": "_self"
// 			}]
// 		}, {
// 			"title": "文件上传模板",
// 			"href": "",
// 			"target": "_self",
// 			"child": [{
// 				"title": "模板列表",
// 				"href": "./page/template-list-3/list.html",
// 				"target": "_self"
// 			}]
// 		}]
// 	}]
// }
// 测试数据
// [{
//     "backMenu": [{
//         "child": [{
//             "buttons": ["新增", "查看", "修改", "删除"],
//             "menu": "商品类型列表",
//             "tableName": "shangpinleixing"
//         }],
//         "menu": "商品类型管理"
//     }, {
//         "child": [{
//             "buttons": ["新增", "查看", "修改", "删除"],
//             "menu": "用户列表",
//             "menuJump": "列表",
//             "tableName": "yonghu"
//         }],
//         "menu": "用户管理"
//     }, {
//         "child": [{
//             "buttons": ["新增", "查看", "修改", "删除"],
//             "menu": "配置管理",
//             "tableName": "peizhiguanli"
//         }],
//         "menu": "系统管理"
//     }, {
//         "child": [{
//             "buttons": ["新增", "查看", "修改", "删除", "报表", "出库", "入库"],
//             "menu": "商品信息列表",
//             "tableName": "shangpinxinxi"
//         }],
//         "menu": "商品信息管理"
//     }, {
//         "child": [{
//             "buttons": ["查看", "审核", "报表"],
//             "menu": "订单信息列表",
//             "menuJump": "列表",
//             "tableName": "dingdanxinxi"
//         }],
//         "menu": "订单信息管理"
//     }, {
//         "child": [{
//             "buttons": ["查看", "修改", "删除", "报表"],
//             "menu": "商品出库列表",
//             "menuJump": "列表",
//             "tableName": "shangpinchuku"
//         }],
//         "menu": "商品出库管理"
//     }, {
//         "child": [{
//             "buttons": ["查看", "修改", "删除", "报表"],
//             "menu": "商品入库列表",
//             "menuJump": "列表",
//             "tableName": "shangpinruku"
//         }],
//         "menu": "商品入库管理"
//     }],
//     "roleName": "管理员",
//     "tableName": "users"
// }, {
//     "backMenu": [{
//         "child": [{
//             "buttons": ["查看", "修改", "删除", "支付"],
//             "menu": "订单信息列表",
//             "menuJump": "列表",
//             "tableName": "dingdanxinxi"
//         }],
//         "menu": "订单信息管理"
//     }, {
//         "child": [{
//             "buttons": ["查看"],
//             "menu": "商品出库列表",
//             "menuJump": "列表",
//             "tableName": "shangpinchuku"
//         }],
//         "menu": "商品出库管理"
//     }],
//     "roleName": "用户",
//     "tableName": "yonghu"
// }]
