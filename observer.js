// 옵저버 패턴
// 비동기적인 Node에서 callback 패턴과 함께 많이 사용되는 패턴이기도 하다
// 어떠한 상태 변화가 일어날 때 관찰자(혹은 리스너)에게 통지할 수 있는 객체를 정의하는 패턴

class YoutubeChannel {
    constructor(channelName){
	    this.channelName = channelName;
	    this.subscribers = [];
	    this.videos = [];
    }
    // this.channelName = channelName;
    // this.subscribers = [];
    // this.videos = [];

    subscribe = (name, onUpload) => {
        const subscriber = {
            name: name,
            subscribe_date: new Date(),
	    onUpload
        }
        this.subscribers.push(subscriber);
        return subscriber;
    }

    notifyAll = () => {
        this.subscribers.forEach(s => {
		s.onUpload({
		    channelName: this.channelName,
		    videoName: this.videos[this.videos.length -1]
		});
	});
    }

    upload = (videoName) => {
        this.videos.push(videoName);
        this.notifyAll();
    }

    // return this;
}


const dogChannel = new YoutubeChannel("강혁욱 세나개");
const itChannel = new YoutubeChannel("잇섭의 IT");

const koreanUploadEventHandler = (event) => {
	console.log(`[${event.channelName}]에 "${event.videoName}"가 업로드 됐어!`)
}

const englishUploadEventHandler = (event) => {
	console.log(`[${event.channelName}] Channel upload Video "${event.videoName}"`)
}

dogChannel.subscribe("KorUser", koreanUploadEventHandler);
itChannel.subscribe("KorUser", koreanUploadEventHandler);

dogChannel.subscribe("engUser1", englishUploadEventHandler);
itChannel.subscribe("engUser2", englishUploadEventHandler);

console.log("Upload Dog Channel");
dogChannel.upload("세상에 나쁜 개는 없습니다. 나쁜 주인만 있을 뿐");

console.log("");
console.log("Upload IT Channel");
itChannel.upload("아이폰 프로 맥스 14 출시일 임박");
