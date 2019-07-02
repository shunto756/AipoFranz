module.exports = (Franz) => {
  const getMessages = function getMessages() {

	//.badgeのdata-badge内に追加される数を利用してカウント
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
