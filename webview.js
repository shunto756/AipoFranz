module.exports = (Franz) => {
  const getMessages = function getMessages() {
  	//ブラウザのタイトルが更新されることを利用して通知をカウント(ver.1.0)
	//var element = document.getElementsByClassName("badge");
	//var text = document.title;
	//var cut_a = text.split(")");
	//var cut_b = cut_a[0].split("(");
	//count = Number(cut_b[1]);
	
	//.badgeのdata-badge内に追加される数を利用してカウント(ver1.2)
	var elements = document.getElementsByClassName('badge');
    count = 0;
    for(i=0;i<elements.length;i++){
    	var badge_no = elements[i].getAttribute('data-badge');
        if(badge_no != null){
        	count = count + Number(badge_no);
        }
    }
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
