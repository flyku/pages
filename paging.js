/*ajax����*/
	var options = {
			'url': "http://192.168.19.20:8000/role/findByCondition?page=",
			//Ĭ�ϵ�һҳ
			'pageNo': 3,
			//ÿҳ����
			'pageSize': 5,
			//����id
			'pageId': "#body"
		},
		nums = null;
	init(options);
	/*��ʼ����ҳ*/
	$(".pages").createPage({
		pagenumber: options.pageNo,
		pagecount: nums,
		backFn: function(p) {
			//������һҳ����
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
				//��Ⱦ����
				tpl.render(testTpl, data, function(htms) {
						$(options.pageId).html(htms)
					})
					//��ҳ��
				nums = data.data.pages;
			},
			error: function() {
				alert("error");
			}
		});
	}