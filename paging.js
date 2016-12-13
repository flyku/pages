/*ajax数据*/
	var options = {
			'url': "http://192.168.19.20:8000/role/findByCondition?page=",
			//默认第一页
			'pageNo': 3,
			//每页几条
			'pageSize': 5,
			//插入id
			'pageId': "#body"
		},
		nums = null;
	init(options);
	/*初始化分页*/
	$(".pages").createPage({
		pagenumber: options.pageNo,
		pagecount: nums,
		backFn: function(p) {
			//重置哪一页数据
			options.pageNo = p;
			init(options);
		}
	});


	function init(options) {
		$(options.pageId).html("");
		$.ajax({
			url: options.url + options.pageNo + '&size=' + options.pageSize,
			type: "get",
			async: false,
			dataType: "json",
			success: function(data) {
				//渲染数据
				tpl.render(testTpl, data, function(htms) {
						$(options.pageId).html(htms)
					})
					//总页数
				nums = data.data.pages;
			},
			error: function() {
				alert("error");
			}
		});
	}