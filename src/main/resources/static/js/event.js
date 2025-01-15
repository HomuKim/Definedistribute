window.addEventListener('load', function() {
	$("#header").load("header.html", function() {
		if (typeof initializeHeader === 'function') {
			initializeHeader();
		}
	});
	$("#footer").load("footer.html");
});

document.addEventListener('DOMContentLoaded', function() {
	const eventImage = document.getElementById('eventImage');
	const eventTitle = document.getElementById('eventTitle');
	const eventDescription = document.getElementById('eventDescription');
	const prevBtn = document.querySelector('.prev-btn');
	const nextBtn = document.querySelector('.next-btn');

	const events = [
		{
			image: 'images/event/event-banner1.png',
			title: '새해 맞이 초특가 이벤트!!!',
			description: '새해에는 건강과 함께 시작하세요!<br>헬스권 12개월 등록시 단 399,000원!<br>추가 혜택으로 PT 4회(308,000원 상당) 무료 제공까지!<br><br>하루 무제한 입장가능<br>깨끗하고 쾌적한 샤워 시설 무료 사용<br><br>[지인과 함께하면 혜택이 2배!]<br>-운동복 50% 할인 (15,000원 -> 7,500원)<br>-회원권 12개월 등록 시 15일 추가 연장<br><br>성북구 최대 규모, 300평 이상의 넓은 공간<br>2024년도 해외 / 국내 1위 헬스머신 70종 완비!<br>-Hammer Strength 공식 인증<br>-MAX PUMP, DRAX 등 프리미엄 설비<br><br>행사 기간 : 선착순 80명 한정!<br>지금 바로 시작해서 건강한 2025년을 맞이하세요!<br>새해엔 운동으로 새로운 나를 만나보세요!<br>"디파인더바디짐"에서 여러분을 기다립니다.'
		},
		{
			image: 'images/event/event-banner2.jpg',
			title: '랜덤 선물 뽑기 이벤트!!!',
			description: '참여방법<br>	1.네이버 리뷰 작성(사진 2장+ 3줄 이상) <br>2.리뷰 작성 후, 뽑기권 1회 증정! <br>어떤 선물이 나올지 두근두근~<br><br>선물안내<br>1등 : 회원권 1개월<br>2등 : 삼대오백 부스터<br>3등 : 운동복 1개월<br>꽝 : 무슈거 사탕<br><br>이벤트 기간<br>2025.01.06 ~ 2025.01.22<br><br>유의 사항<br>-기존회원(일일권 제외) 대상<br>-자세한 사항은 센터데스크로 문의해주세요!<br><br>올해는 건강과 재미를 함께 잡아보세요!<br>운동도 하고, 선물도 받고! 지금 바로 도전하세요!'
		},
		{
			image: 'images/event/event-banner3.jpg',
			title: '친구 추천 이벤트',
			description: '친구와 함께 등록 시 두 분 모두 20% 할인! 함께 운동하면 더 즐겁습니다.'
		}
	];

	let currentIndex = 0;

	function updateEvent(index) {
		// 페이드 아웃
		eventImage.classList.add('fade-out');
		eventTitle.classList.add('fade-out');
		eventDescription.classList.add('fade-out');

		setTimeout(() => {
			eventImage.src = events[index].image;
			eventTitle.textContent = events[index].title;
			eventDescription.innerHTML = events[index].description;

			// 페이드 인
			eventImage.classList.remove('fade-out');
			eventTitle.classList.remove('fade-out');
			eventDescription.classList.remove('fade-out');
		}, 300); // 트랜지션 시간과 일치
	}

	function checkImageExists(url) {
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => resolve(true);
			img.onerror = () => resolve(false);
			img.src = url;
		});
	}

	async function changeEvent(direction) {
		let newIndex = currentIndex;
		let imageExists = false;

		while (!imageExists) {
			newIndex = (newIndex + direction + events.length) % events.length;
			if (newIndex === currentIndex) {
				console.log("No valid images found");
				return;
			}

			imageExists = await checkImageExists(events[newIndex].image);
			if (imageExists) {
				currentIndex = newIndex;
				updateEvent(currentIndex);
				break;
			}
		}
	}

	prevBtn.addEventListener('click', () => changeEvent(-1));
	nextBtn.addEventListener('click', () => changeEvent(1));

	// 초기 이벤트 표시
	updateEvent(currentIndex);
});