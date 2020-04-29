
//不用遍历data，直接截取data的分页

$(function(){
	var listVal=0; //获取点击要跳转的页数
	var leftminVal=0;//截取data的最小值
	var rightMaxVal=0;//截取data的最大值
	var lengths=5;   //每页有多少数据
	var pageindex=0;
	var pagesmaxNumber=0;
	var arrDatas=[];
	$('.numbPPage').each(function(){
		$(this).click(function(){
						$('#contents').empty();//清空要添加的盒子元素
			 listVal=$(this).text();//获取点击要跳转的页数
			 pageindex=listVal;		//获取索引
			 leftminVal=(listVal-1)*lengths;//截取data的最小值
			 rightMaxVal=leftminVal+lengths;//截取data的最大值
			 arrDatas=data.slice(leftminVal,rightMaxVal);
				$(arrDatas).each(function(i,o){  //遍历data
						html="<p>序号"+o.sn+"我是"+o.name+"诗词"+o.dream+o.netyv+"</p>";
						$('#contents').append(html);
					
				})
		})		
	})
//	递减
	$('.lefReduce').click(function(){	
		if(pageindex>1){
			$('#contents').empty();//清空要添加的盒子元素
			listVal--;
			 leftminVal=(listVal-1)*lengths;//截取data的最小值
			 rightMaxVal=leftminVal+lengths;//截取data的最大值
				 arrDatas=data.slice(leftminVal,rightMaxVal);
				$(arrDatas).each(function(i,o){  //遍历data
						html="<p>序号"+o.sn+"我是"+o.name+"诗词"+o.dream+o.netyv+"</p>";
						$('#contents').append(html);
					
				})
				pageindex--;
		}			
	})
//	递增
		$('.rightAdd').click(function(){
			pagesmaxNumber=parseInt($(data).length/lengths)+1;
		if(pageindex<pagesmaxNumber){
			$('#contents').empty();//清空要添加的盒子元素
			listVal++;
			 leftminVal=(listVal-1)*lengths;//截取data的最小值
			 rightMaxVal=leftminVal+lengths;//截取data的最大值
				 arrDatas=data.slice(leftminVal,rightMaxVal);
				$(arrDatas).each(function(i,o){  //遍历data
						html="<p>序号"+o.sn+"我是"+o.name+"诗词"+o.dream+o.netyv+"</p>";
						$('#contents').append(html);
					
				})
				pageindex++;
		}			
	})
	
	
	
	
	
})
